import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

export function log(msg, type = 'info') {
  const prefix = {
    info: chalk.blue('ℹ'),
    success: chalk.green('✓'),
    warn: chalk.yellow('⚠'),
    error: chalk.red('✗')
  }[type] || chalk.blue('ℹ');
  console.log(`${prefix} ${msg}`);
}

export async function ensureDir(dir) {
  await fs.ensureDir(dir);
}

export async function writeJSON(filePath, data) {
  await fs.ensureDir(path.dirname(filePath));
  await fs.writeJSON(filePath, data, { spaces: 2 });
}

export async function readJSON(filePath) {
  try {
    return await fs.readJSON(filePath);
  } catch {
    return null;
  }
}

export async function loadHTML(filePath) {
  return await fs.readFile(filePath, 'utf-8');
}

export async function saveHTML(filePath, html) {
  await fs.writeFile(filePath, html, 'utf-8');
}

export function unique(arr) {
  return [...new Set(arr)];
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function normalizeRoute(href, baseUrl = '') {
  if (!href) return null;
  
  // Skip external, mailto, tel, javascript, hash-only
  if (href.startsWith('http') && !href.includes('seriae')) return null;
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return null;
  if (href === '#' || href.startsWith('#')) return null;
  
  // Remove baseUrl prefix if present
  let clean = href.replace(baseUrl, '').replace('https://seriae.hudsonmyung.me', '');
  
  // Normalize to start with /
  if (!clean.startsWith('/')) clean = '/' + clean;
  
  // Remove trailing slash for consistency (except root)
  if (clean !== '/' && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }
  
  // Remove query params and hash for routing
  clean = clean.split('?')[0].split('#')[0];
  
  return clean || '/';
}

export function routeToFilename(route) {
  return route === '/' ? 'index' : route.replace(/\//g, '_').replace(/\.html$/, '');
}
