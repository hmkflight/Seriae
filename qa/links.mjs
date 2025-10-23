import { chromium } from '@playwright/test';
import { log, writeJSON } from './util.mjs';
import fs from 'fs-extra';

const BASE_URL = 'https://seriae.hudsonmyung.me';

export async function checkLinks(routes) {
  log('Checking for broken links and images...', 'info');
  const broken = [];
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  for (const route of routes.slice(0, 5)) {
    try {
      await page.goto(BASE_URL + route, { waitUntil: 'networkidle' });
      
      const links = await page.$$eval('a[href]', els => els.map(e => e.href));
      const images = await page.$$eval('img[src]', els => els.map(e => e.src));
      
      for (const url of [...links, ...images]) {
        try {
          const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 5000 });
          if (!response.ok()) {
            broken.push({ route, url, status: response.status() });
          }
        } catch {
          broken.push({ route, url, status: 'timeout' });
        }
      }
    } catch (err) {
      // Skip
    }
  }
  
  await browser.close();
  
  const csv = 'route,url,status\\n' + broken.map(b => `${b.route},"${b.url}",${b.status}`).join('\\n');
  await fs.writeFile('qa/artifacts/links/broken.csv', csv);
  
  log(`Found ${broken.length} broken links/images`, broken.length ? 'warn' : 'success');
  return broken;
}
