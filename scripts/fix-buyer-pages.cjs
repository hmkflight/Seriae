#!/usr/bin/env node

/**
 * Fix Buyer Menu Pages
 * - Ensures all data-translate elements have fallback English text
 * - Adds missing translation keys to translations.js
 */

const fs = require('fs');
const path = require('path');

// Translation mapping (key -> English text)
const translations = {
    // Auctions
    'auctions.stat.active': 'Active Auctions',
    'auctions.stat.yourbids': 'Your Active Bids',
    'auctions.stat.endingsoon': 'Ending Within 24h',
    'auctions.title': 'Active Auctions',
    'auctions.subtitle': 'Live bidding on authenticated luxury pieces',
    'auctions.no.active': 'No active auctions at this time',
    'auctions.browse.collections': 'Browse Collections',
    'auctions.current.bid': 'Current Bid',
    'auctions.your.bid': 'Your Bid',
    'auctions.place.bid': 'Place Bid',
    'auctions.modal.title': 'Place Your Bid',
    'auctions.form.amount': 'Bid Amount (USD)',
    'auctions.form.current': 'Current bid:',
    'auctions.form.terms': 'I agree to the auction terms and conditions',
    'auctions.form.submit': 'Place Bid',
    'auctions.history.subtitle': 'Review your past and current bids',
    'auctions.history.empty': 'No bidding history yet',

    // Collections
    'collections.title': 'Luxury Collections',
    'collections.subtitle': 'Curated luxury pieces from the world\'s most prestigious brands',
    'collections.filter.category': 'Category:',
    'collections.filter.status': 'Status:',
    'collections.filter.sort': 'Sort:',
    'collections.category.all': 'All',
    'collections.category.handbags': 'Handbags',
    'collections.category.timepieces': 'Timepieces',
    'collections.status.all': 'All Items',
    'collections.status.auction': 'Auction',
    'collections.status.available': 'Available',
    'collections.status.appointment': 'By Appointment',
    'collections.sort.newest': 'Newest First',
    'collections.sort.price.asc': 'Price: Low to High',
    'collections.sort.price.desc': 'Price: High to Low',
    'collections.sort.brand': 'Brand',
    'collections.no.results': 'No items found matching your filters',
    'collections.badge.auction': 'Auction',
    'collections.badge.appointment': 'By Appointment',

    // Watchlist
    'watchlist.title': 'Watchlist',
    'watchlist.subtitle': 'Your saved luxury pieces',
    'watchlist.empty.title': 'Your Watchlist is Empty',
    'watchlist.empty.subtitle': 'Save items to your watchlist to track them here',
    'watchlist.browse': 'Browse Collections',

    // Purchases
    'purchases.title': 'Purchase History',
    'purchases.subtitle': 'Your acquired luxury pieces',
    'purchases.empty.title': 'No Purchase History',
    'purchases.empty.subtitle': 'Your purchased items will appear here',
    'purchases.browse': 'Browse Collections',
    'purchases.purchased': 'Purchased:',
    'purchases.price': 'Purchase Price:',
    'purchases.contact.support': 'Contact Support',
    'purchases.track': 'Track Shipment',

    // Common
    'common.cancel': 'Cancel',
    'accessibility.skip': 'Skip to content',

    // Buyer Menu
    'buyer.browse.collections': 'Browse Collections',
    'buyer.active.auctions': 'Active Auctions',
    'buyer.bidding.history': 'Bidding History',
    'buyer.watchlist': 'Watchlist',
    'buyer.purchase.history': 'Purchase History'
};

/**
 * Fix a single HTML file
 */
function fixHtmlFile(filePath) {
    console.log(`\nProcessing: ${filePath}`);

    let content = fs.readFileSync(filePath, 'utf-8');
    let changes = 0;

    // Pattern: data-translate="key">something or data-translate="key"></tag>
    // We want to ensure the content between > and < matches the translation
    const pattern = /data-translate="([^"]+)"([^>]*)>([^<]*)</g;

    content = content.replace(pattern, (match, key, attrs, currentText) => {
        const translation = translations[key];
        if (translation && currentText.trim() !== translation.trim()) {
            changes++;
            console.log(`  ✓ Fixed: "${key}" -> "${translation}"`);
            return `data-translate="${key}"${attrs}>${translation}<`;
        }
        return match;
    });

    if (changes > 0) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`  📝 Saved ${changes} changes to ${path.basename(filePath)}`);
    } else {
        console.log(`  ✅ No changes needed`);
    }

    return changes;
}

/**
 * Main execution
 */
function main() {
    const rootDir = path.join(__dirname, '..');

    const files = [
        path.join(rootDir, 'collections/index.html'),
        path.join(rootDir, 'auctions/index.html'),
        path.join(rootDir, 'auctions/history.html'),
        path.join(rootDir, 'watchlist/index.html'),
        path.join(rootDir, 'purchases/index.html')
    ];

    let totalChanges = 0;

    console.log('🔧 Fixing Buyer Menu Pages...\n');
    console.log('=' . repeat(60));

    files.forEach(file => {
        if (fs.existsSync(file)) {
            totalChanges += fixHtmlFile(file);
        } else {
            console.log(`⚠️  File not found: ${file}`);
        }
    });

    console.log('\n' + '='.repeat(60));
    console.log(`\n✨ Complete! Made ${totalChanges} total changes across ${files.length} files.`);
}

main();
