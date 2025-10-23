import { chromium } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';
import { log, writeJSON, routeToFilename } from './util.mjs';
import fs from 'fs-extra';

const BASE_URL = 'https://seriae.hudsonmyung.me';

export async function runAxe(routes) {
  log(`Running axe accessibility tests on ${routes.length} routes...`, 'info');

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const results = [];

  for (const route of routes.slice(0, 10)) { // Limit for demo
    const routeName = routeToFilename(route);

    try {
      await page.goto(BASE_URL + route, { waitUntil: 'networkidle', timeout: 30000 });
      await injectAxe(page);

      // Run axe and get results
      const axeResults = await page.evaluate(async () => {
        return await window.axe.run();
      });

      const violations = axeResults.violations;

      await writeJSON(`qa/artifacts/axe/${routeName}.json`, violations);

      const summary = violations.map(v =>
        `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} instances)`
      ).join('\\n');

      await fs.writeFile(`qa/artifacts/axe/${routeName}.txt`, summary || 'No violations found');

      results.push({ route, violationCount: violations.length });
    } catch (err) {
      results.push({ route, error: err.message });
    }
  }

  await browser.close();

  const totalViolations = results.reduce((sum, r) => sum + (r.violationCount || 0), 0);
  log(`Axe complete: ${totalViolations} total violations`, 'success');

  return results;
}
