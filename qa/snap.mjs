import { chromium } from '@playwright/test';
import { log, ensureDir, writeJSON, routeToFilename } from './util.mjs';
import fs from 'fs-extra';

const VIEWPORTS = [
  { name: 'mobile-sm', width: 375, height: 812 },
  { name: 'mobile-lg', width: 414, height: 896 },
  { name: 'tablet-sm', width: 768, height: 1024 },
  { name: 'tablet-lg', width: 820, height: 1180 },
  { name: 'desktop-sm', width: 1280, height: 800 },
  { name: 'desktop-lg', width: 1440, height: 900 }
];

const BASE_URL = 'https://seriae.hudsonmyung.me';

export async function captureScreenshots(routes) {
  log(`Taking screenshots for ${routes.length} routes...`, 'info');

  const browser = await chromium.launch();
  const results = [];

  for (const route of routes.slice(0, 10)) { // Limit for demo
    const routeName = routeToFilename(route);
    const routeDir = `qa/artifacts/screenshots/${routeName}`;
    await ensureDir(routeDir);

    const logs = [];
    const errors = [];
    const broken = [];
    let hasOverflow = false;

    // Test with desktop viewport only for speed
    const vp = { name: 'desktop', width: 1440, height: 900 };

    try {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height }
      });
      const page = await context.newPage();

      page.on('console', msg => logs.push(`[console] ${msg.text()}`));
      page.on('pageerror', err => errors.push(err.message));
      page.on('response', response => {
        if (response.status() === 404) {
          broken.push({ url: response.url(), status: 404 });
        }
      });

      const url = BASE_URL + route;
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1000);

      const overflow = await page.evaluate(() => {
        return document.scrollingElement.scrollWidth > window.innerWidth;
      });
      hasOverflow = overflow;

      const filename = `${routeDir}/${vp.width}x${vp.height}.png`;
      await page.screenshot({ path: filename, fullPage: true });

      await context.close();
    } catch (err) {
      errors.push(err.message);
    }

    if (logs.length) {
      await fs.writeFile(`qa/artifacts/logs/${routeName}.log`, logs.join('\\n'));
    }
    if (broken.length) {
      await writeJSON(`qa/artifacts/broken/${routeName}.json`, broken);
    }

    results.push({ route, hasOverflow, errorCount: errors.length, brokenCount: broken.length });
  }

  await browser.close();
  await writeJSON('qa/artifacts/screenshots-summary.json', results);

  log(`Screenshots complete for ${results.length} routes`, 'success');
  return results;
}
