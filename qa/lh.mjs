import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { log, writeJSON, routeToFilename } from './util.mjs';
import fs from 'fs-extra';

const BASE_URL = 'https://seriae.hudsonmyung.me';

export async function runLighthouse(routes) {
  log('Running Lighthouse audits (limited sample)...', 'info');
  const results = [];
  
  for (const route of routes.slice(0, 3)) {
    const routeName = routeToFilename(route);
    try {
      const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
      const options = { port: chrome.port, output: ['json', 'html'] };
      const runnerResult = await lighthouse(BASE_URL + route, options);
      
      await fs.writeFile(`qa/artifacts/lh/${routeName}.html`, runnerResult.report[1]);
      await writeJSON(`qa/artifacts/lh/${routeName}.json`, runnerResult.lhr);
      
      results.push({ route, score: runnerResult.lhr.categories.performance.score });
      await chrome.kill();
    } catch (err) {
      results.push({ route, error: err.message });
    }
  }
  
  log('Lighthouse complete', 'success');
  return results;
}
