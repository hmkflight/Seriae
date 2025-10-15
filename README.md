# SERIAE - Luxury Auction Marketplace

A fully functional luxury auction marketplace mock featuring authenticated luxury handbags and timepieces. Built with vanilla HTML, CSS, and JavaScript with no backend dependencies.

## 🎯 Features

- **Auction System**: Real-time countdown timers, bidding functionality with localStorage persistence
- **Watchlist**: Save favorite items across sessions
- **Seller Portal**: Product registration, exhibition management, consignment tracking, analytics
- **Account Management**: Profile, settings, addresses, payment methods
- **Search**: Unified fuzzy search across products and articles
- **Bilingual**: Full English/Japanese translation support
- **Responsive**: Mobile-first design with accessibility features

## 📁 Project Structure

```
/
├── index.html                      # Homepage with luxury bag showcase
├── collections/                    # Product collections (handbags, timepieces)
├── auctions/                       # Live auctions and bidding history
├── watchlist/                      # Saved items
├── purchases/                      # Purchase history
├── item/                           # Individual product detail pages
├── seller/                         # Seller portal (register, products, analytics)
├── account/                        # User account management
├── support/                        # Contact and help center
├── legal/                          # Privacy policy, terms of use
├── search/                         # Unified search interface
├── data/                           # JSON data files
│   ├── items.json                  # Product catalog (10 luxury items)
│   ├── auctions.json               # Auction bids and history
│   ├── user.json                   # User profile and preferences
│   ├── exhibitions.json            # Exhibition listings
│   ├── consignments.json           # Consignment tracking
│   └── posts.json                  # News and articles
├── assets/
│   ├── css/
│   │   └── styles.css              # Luxury dark theme styles
│   ├── js/
│   │   ├── main.js                 # Application bootstrap
│   │   ├── data.js                 # Data fetching & localStorage store
│   │   ├── ui.js                   # Modals, toasts, lightbox, tabs
│   │   ├── render.js               # Templating helpers
│   │   ├── forms.js                # Form validation & mock submission
│   │   ├── search.js               # Fuzzy search across content
│   │   └── translations.js         # EN/JA i18n system
│   └── img/
│       ├── hero/                   # Hero background images
│       └── brands/                 # Product images by brand
│           ├── lv/
│           ├── chanel/
│           ├── hermes/
│           ├── rolex/
│           ├── gucci/
│           └── prada/
└── scripts/                        # Image optimization helpers

## 🗂️ Data Architecture

All data is stored in JSON files under `/data/` and extended with localStorage for user interactions:

### localStorage Namespaces

- `SERIAE_WATCH`: Watchlist (item IDs)
- `SERIAE_BIDS`: User bids with timestamps
- `SERIAE_LEADS`: Contact form submissions and interest inquiries
- `SERIAE_SUBMISSIONS`: Seller product submissions
- `SERIAE_STORE`: General key-value store for user preferences
- `seriae-language`: Current language (en/ja)

### Data Files

- **items.json**: 10 luxury items (6 handbags, 2 timepieces) with full metadata
- **auctions.json**: Active bids, bidding history, purchase records
- **user.json**: Profile, addresses, bank accounts, notification preferences
- **exhibitions.json**: Upcoming and past exhibitions
- **consignments.json**: Seller consignment tracking with statuses
- **posts.json**: 6 news articles and guides

## 🎨 Design System

**Theme**: Rolex-inspired luxury dark aesthetic
- Background: Deep blacks (#0a0a0a, #000000)
- Accents: Champagne gold (#d4af37)
- Text: Ivory (#f8f6f0) with muted tones for hierarchy
- Typography: Playfair Display (headings), Inter (body)

**Components**:
- Luxury cards with gold borders and hover elevations
- Floating dropdown menus with blur effects
- Sidebar navigation with left-border accent highlights
- Modal overlays with focus trapping
- Toast notifications with smooth animations

## 🚀 Development

### Local Server

```bash
# Start local development server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Mock Forms

All forms use simulated network latency (600-900ms) and save to localStorage:

```javascript
// Submit with validation
Forms.setup('#contact-form', {
    storageKey: 'SERIAE_LEADS',
    successMessage: 'Message sent successfully',
    onSuccess: (data) => console.log('Submitted:', data)
});
```

### Adding New Items

Edit `/data/items.json`:

```json
{
  "id": "unique-id",
  "slug": "url-friendly-slug",
  "title": "Product Title",
  "brand": "Brand Name",
  "model": "Model Name",
  "year": 2024,
  "condition": "Excellent",
  "price": 5000,
  "category": "handbags" | "timepieces",
  "status": "auction" | "available" | "appointment",
  "endsAtISO": "2024-12-31T23:59:59Z",
  "cover": "/assets/img/brands/brand/image.webp",
  "images": [...],
  "tags": [...],
  "description": "...",
  "metrics": { "views": 0, "watchers": 0 }
}
```

## 🖼️ Images

**Image Sourcing (Demo Only)**:
All product images are sourced from official brand catalogs and press materials for demonstration purposes only. Images are saved locally and optimized for web performance.

### Image Optimization

```bash
# Convert to WebP
cwebp -q 82 input.jpg -o output.webp

# Generate responsive sizes
magick input.jpg -resize 1600x -quality 82 output-1600.jpg
magick input.jpg -resize 1200x -quality 82 output-1200.jpg
magick input.jpg -resize 800x -quality 82 output-800.jpg
```

### Hero Background

The homepage 3D background uses a real branded luxury bag image while preserving the parallax/tilt interaction. To swap:

1. Save new image to `/assets/img/hero/`
2. Update hero CSS background or `<picture>` element
3. 3D effect JavaScript remains unchanged

**Current hero options**:
- Gucci GG Marmont Small
- Prada Re-Edition 2005
- Louis Vuitton Capucines MM

## 🌐 Internationalization

Toggle between English and Japanese using the language selector in the top navigation. Translations are stored in `/assets/js/translations.js`:

```javascript
// Access translation
Translation.t('key.name')

// Switch language
Translation.switchLanguage('ja')
```

Language preference persists across sessions in localStorage.

## ♿ Accessibility

- Skip-to-content link for keyboard users
- `aria-current` on active navigation
- Focus trapping in modals and lightbox
- Keyboard navigation (↑/↓/Enter/Esc) for search, gallery, accordion
- `aria-live` regions for dynamic updates
- Proper heading hierarchy and semantic HTML

## 📊 Performance

- Lazy loading on all images with `loading="lazy"`
- Width/height attributes to prevent CLS
- In-memory caching for JSON data
- Debounced search (300ms)
- Optimized images (WebP + JPEG fallback)

## 🔒 Data Privacy

All data is stored locally in the browser. No server communication. Clear all data:

```javascript
DataService.clearAllData();
```

## 📝 Phase Status

### ✅ Phase 1: Architecture & Data Layer (Complete)
- File structure and routing architecture
- Core JavaScript modules (data, ui, render, forms, search)
- Comprehensive JSON data files
- localStorage integration
- Design system preservation

### ✅ Phase 2: Image Infrastructure (Complete)
- ✅ Part A: Image optimization workflow setup
  - Created fetch_images.sh template for brand catalog downloads
  - Created optimize_images.md documentation
  - Created optimize_all.sh batch conversion script
  - Generated SVG placeholder images for all products
  - Updated items.json with correct image paths
- 🔄 Part B: Real product images (Optional - for production)
  - Add actual brand catalog image URLs
  - Download and optimize product images
  - Replace homepage hero with real luxury bag image
  - Update WebP references

### ✅ Phase 3: Buyer Flow Pages (Complete)
- Collections page with filtering (category, status) and sorting
- Active auctions page with live bidding modal
- Watchlist page with localStorage persistence
- Purchase history page with delivery tracking
- 10 individual item detail pages with:
  - Multi-image gallery with lightbox
  - Dynamic tabbed interface (description, details, authenticity)
  - Auction bidding, express interest, or appointment request
  - Real-time countdown timers
  - Watchlist integration
- Updated homepage navigation and product links

### ✅ Phase 4: Seller Flow Pages (Complete)
- Product registration form with multi-step validation
- Products management dashboard with status filtering
- Exhibitions listing (upcoming/ongoing/past)
- Consignment status tracking with visual timeline
- Sales analytics dashboard with:
  - Key performance metrics (sales, conversion, avg days to sell)
  - Performance by category charts
  - Top performing items leaderboard
  - Recent sales table with commission breakdown
- All seller navigation links functional

### 📋 Upcoming Phases:
- Phase 5: Account, support, legal, search pages
- Phase 6: SEO, accessibility polish, 404 page

## 📄 License

This is a demonstration project. All brand names, product images, and trademarks are property of their respective owners and are used here for demonstration purposes only.

---

**Built with**: Vanilla JavaScript, HTML5, CSS3
**Design**: Luxury dark theme inspired by Rolex, Louis Vuitton, Porsche
**Version**: Phase 1 - Architecture & Data Layer
