import { globby } from 'globby';
import { load } from 'cheerio';
import { log, loadHTML, saveHTML } from './util.mjs';

export async function autofix() {
  log('Applying safe auto-fixes...', 'info');
  
  const htmlFiles = await globby('**/*.html', {
    ignore: ['node_modules/**', 'qa/**'],
    cwd: process.cwd()
  });
  
  let fixed = 0;
  
  for (const file of htmlFiles) {
    try {
      const html = await loadHTML(file);
      const $ = load(html);
      let modified = false;
      
      // Fix images: add loading lazy and decoding async
      $('img').each((_, el) => {
        const $el = $(el);
        if (!$el.attr('loading')) {
          $el.attr('loading', 'lazy');
          modified = true;
        }
        if (!$el.attr('decoding')) {
          $el.attr('decoding', 'async');
          modified = true;
        }
        if (!$el.attr('alt')) {
          $el.attr('alt', '');
          modified = true;
        }
      });
      
      // Fix external links
      $('a[target="_blank"]').each((_, el) => {
        const $el = $(el);
        const rel = $el.attr('rel') || '';
        if (!rel.includes('noopener')) {
          $el.attr('rel', (rel + ' noopener noreferrer').trim());
          modified = true;
        }
      });
      
      // Ensure modals have proper ARIA
      $('.modal, [role="dialog"]').each((_, el) => {
        const $el = $(el);
        if (!$el.attr('role')) $el.attr('role', 'dialog');
        if (!$el.attr('aria-modal')) $el.attr('aria-modal', 'true');
        modified = true;
      });
      
      if (modified) {
        await saveHTML(file, $.html());
        fixed++;
      }
    } catch (err) {
      log(`Error fixing ${file}: ${err.message}`, 'warn');
    }
  }
  
  log(`Auto-fixed ${fixed} files`, 'success');
  return { filesFixed: fixed };
}
