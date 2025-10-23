import { globby } from 'globby';
import { load } from 'cheerio';
import { log, normalizeRoute, unique, writeJSON, loadHTML } from './util.mjs';

const SEED_ROUTES = [
  '/',
  '/collections/',
  '/auctions/',
  '/auctions/history.html',
  '/watchlist/',
  '/purchases/',
  '/seller/register.html',
  '/seller/products.html',
  '/seller/exhibitions.html',
  '/seller/consignment.html',
  '/seller/analytics.html',
  '/account/profile.html',
  '/account/settings.html',
  '/account/addresses.html',
  '/account/payment.html',
  '/support/contact.html',
  '/support/index.html',
  '/legal/privacy.html',
  '/legal/terms.html',
  '/404.html'
];

export async function discoverRoutes() {
  log('Discovering routes from HTML files...', 'info');

  const htmlFiles = await globby('**/*.html', {
    ignore: ['node_modules/**', 'qa/**'],
    cwd: process.cwd()
  });

  const routes = new Set(SEED_ROUTES);

  for (const file of htmlFiles) {
    try {
      const html = await loadHTML(file);
      const $ = load(html);

      $('a[href]').each((_, el) => {
        const href = $(el).attr('href');
        const normalized = normalizeRoute(href);
        if (normalized) routes.add(normalized);
      });

      // Add the file itself as a route
      const fileRoute = '/' + file.replace(/index\.html$/, '');
      routes.add(normalizeRoute(fileRoute));

    } catch (err) {
      // Skip files that can't be read
    }
  }

  // Add item detail pages
  const itemPages = await globby('item/*.html', { cwd: process.cwd() });
  itemPages.forEach(page => routes.add('/' + page));

  const routesList = unique(Array.from(routes).filter(Boolean));

  await writeJSON('qa/artifacts/routes.json', routesList);

  log(`Discovered ${routesList.length} routes`, 'success');
  return routesList;
}
