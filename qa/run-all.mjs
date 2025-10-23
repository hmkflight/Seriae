import { log } from './util.mjs';
import { discoverRoutes } from './discover.mjs';
import { captureScreenshots } from './snap.mjs';
import { runAxe } from './axe.mjs';
import { runLighthouse } from './lh.mjs';
import { checkLinks } from './links.mjs';
import { generateReport } from './report.mjs';
import { autofix } from './autofix.mjs';

async function main() {
  console.log('\\n🔍 SERIAE QA Suite\\n');
  
  try {
    // 1. Discover routes
    const routes = await discoverRoutes();
    
    // 2. Screenshots & diagnostics
    await captureScreenshots(routes);
    
    // 3. Accessibility audit
    await runAxe(routes);
    
    // 4. Lighthouse (sample)
    await runLighthouse(routes);
    
    // 5. Link checking
    await checkLinks(routes);
    
    // 6. Generate report
    await generateReport();
    
    // 7. Auto-fix
    const fixes = await autofix();
    
    console.log('\\n✅ QA Suite Complete!');
    console.log('📊 Report: qa/report/index.html');
    console.log(`🔧 Auto-fixed: ${fixes.filesFixed} files\\n`);
    
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

main();
