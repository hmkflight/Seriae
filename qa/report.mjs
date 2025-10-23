import { log, readJSON } from './util.mjs';
import fs from 'fs-extra';

export async function generateReport() {
  log('Generating QA report...', 'info');
  
  const routes = await readJSON('qa/artifacts/routes.json') || [];
  const screenshots = await readJSON('qa/artifacts/screenshots-summary.json') || [];
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SERIAE QA Report</title>
  <style>
    body{font-family:system-ui;margin:2rem;background:#0a0a0a;color:#f8f6f0}
    h1{color:#d4af37}
    .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin:2rem 0}
    .stat-card{background:#1a1a1a;padding:1.5rem;border-radius:8px;border:1px solid #333}
    .stat-number{font-size:2rem;font-weight:700;color:#d4af37}
    .stat-label{font-size:0.875rem;color:#999;text-transform:uppercase}
    table{width:100%;border-collapse:collapse;margin:2rem 0}
    th,td{padding:0.75rem;text-align:left;border-bottom:1px solid #333}
    th{background:#1a1a1a;color:#d4af37}
    .badge{padding:0.25rem 0.5rem;border-radius:4px;font-size:0.75rem}
    .badge-success{background:#0f5132;color:#75b798}
    .badge-warning{background:#664d03;color:#ffda6a}
    .badge-error{background:#58151c;color:#ea868f}
    img{max-width:200px;border:1px solid #333}
  </style>
</head>
<body>
  <h1>SERIAE QA Report</h1>
  <div class="stats">
    <div class="stat-card">
      <div class="stat-number">${routes.length}</div>
      <div class="stat-label">Routes Tested</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">${screenshots.length}</div>
      <div class="stat-label">Screenshots Captured</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">${screenshots.filter(s => s.hasOverflow).length}</div>
      <div class="stat-label">Overflow Issues</div>
    </div>
  </div>
  
  <h2>Routes</h2>
  <table>
    <thead><tr><th>Route</th><th>Overflow</th><th>Errors</th><th>404s</th></tr></thead>
    <tbody>
      ${screenshots.map(s => `
        <tr>
          <td>${s.route}</td>
          <td>${s.hasOverflow ? '<span class="badge badge-warning">Yes</span>' : '<span class="badge badge-success">No</span>'}</td>
          <td>${s.errorCount || 0}</td>
          <td>${s.brokenCount || 0}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
  
  <p>Generated: ${new Date().toISOString()}</p>
</body>
</html>`;
  
  await fs.writeFile('qa/report/index.html', html);
  log('Report saved to qa/report/index.html', 'success');
}
