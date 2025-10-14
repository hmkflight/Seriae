#!/usr/bin/env node
// GENERATE_ITEM_PAGES.js - Generate individual item detail pages from items.json

const fs = require('fs');
const path = require('path');

// Read items.json
const itemsPath = path.join(__dirname, '../data/items.json');
const itemsData = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));
const items = itemsData.items;

// Read the template (use the existing LV Neverfull page as template)
const templatePath = path.join(__dirname, '../item/louis-vuitton-neverfull-mm-damier-ebene.html');
const template = fs.readFileSync(templatePath, 'utf8');

console.log(`🔨 Generating ${items.length} item detail pages...`);

items.forEach(item => {
    const outputPath = path.join(__dirname, `../item/${item.slug}.html`);

    // Check if file already exists (don't overwrite the template)
    if (fs.existsSync(outputPath)) {
        console.log(`  ⏭️  Skipping ${item.slug}.html (already exists)`);
        return;
    }

    // Write the template (all items use the same dynamic template)
    fs.writeFileSync(outputPath, template);
    console.log(`  ✅ Created ${item.slug}.html`);
});

console.log('');
console.log('✨ Item pages generated successfully!');
console.log('');
console.log('📝 Note: All item pages use the same dynamic template.');
console.log('   Page content is loaded from data/items.json based on URL slug.');
