#!/bin/bash
# FETCH_IMAGES.sh - Script to download official brand catalog images
# NOTE: These URLs are placeholders. Replace with actual brand catalog URLs.
# Images are for DEMO PURPOSES ONLY.

set -e

echo "🖼️  Fetching luxury brand product images..."
echo "⚠️  Ensure you have permission to use these images for demonstration."
echo ""

# Create directories
mkdir -p assets/img/brands/{lv,chanel,hermes,rolex,gucci,prada}
mkdir -p assets/img/hero
mkdir -p assets/img/news

# ========================================
# LOUIS VUITTON
# ========================================
echo "📦 Louis Vuitton..."

# Neverfull MM Damier Ebene
# curl -L "https://us.louisvuitton.com/images/is/image/lv/neverfull-mm-damier-ebene-01" \
#   -o assets/img/brands/lv/lv-neverfull-mm-ebene-01.jpg

# Speedy 30 Monogram
# curl -L "https://us.louisvuitton.com/images/is/image/lv/speedy-30-monogram-01" \
#   -o assets/img/brands/lv/lv-speedy-30-monogram-01.jpg

echo "  → Using placeholder images for Louis Vuitton products"
echo "  → Replace with official LV catalog images"

# ========================================
# CHANEL
# ========================================
echo "📦 Chanel..."

# Classic Flap Medium
# curl -L "https://www.chanel.com/images/classic-flap-medium-black-01.jpg" \
#   -o assets/img/brands/chanel/chanel-classic-flap-medium-01.jpg

# Boy Bag Medium
# curl -L "https://www.chanel.com/images/boy-bag-medium-navy-01.jpg" \
#   -o assets/img/brands/chanel/chanel-boy-medium-navy-01.jpg

echo "  → Using placeholder images for Chanel products"
echo "  → Replace with official Chanel catalog images"

# ========================================
# HERMÈS
# ========================================
echo "📦 Hermès..."

# Birkin 35 Togo
# curl -L "https://www.hermes.com/images/birkin-35-togo-black-01.jpg" \
#   -o assets/img/brands/hermes/hermes-birkin-35-togo-01.jpg

# Kelly 28 Epsom
# curl -L "https://www.hermes.com/images/kelly-28-epsom-gold-01.jpg" \
#   -o assets/img/brands/hermes/hermes-kelly-28-gold-01.jpg

echo "  → Using placeholder images for Hermès products"
echo "  → Replace with official Hermès catalog images"

# ========================================
# ROLEX
# ========================================
echo "📦 Rolex..."

# GMT-Master II Pepsi
# curl -L "https://www.rolex.com/content/dam/rolex/watches/gmt-master-ii-126710blro.jpg" \
#   -o assets/img/brands/rolex/rolex-gmt-master-ii-pepsi-01.jpg

# Submariner Date
# curl -L "https://www.rolex.com/content/dam/rolex/watches/submariner-date-126610ln.jpg" \
#   -o assets/img/brands/rolex/rolex-submariner-date-01.jpg

echo "  → Using placeholder images for Rolex products"
echo "  → Replace with official Rolex catalog images"

# ========================================
# GUCCI
# ========================================
echo "📦 Gucci..."

# GG Marmont Small
# curl -L "https://media.gucci.com/images/gg-marmont-small-matelasse-01.jpg" \
#   -o assets/img/brands/gucci/gucci-gg-marmont-small-01.jpg

echo "  → Using placeholder images for Gucci products"
echo "  → Replace with official Gucci catalog images"

# ========================================
# PRADA
# ========================================
echo "📦 Prada..."

# Re-Edition 2005
# curl -L "https://www.prada.com/content/dam/pradanux/reedition-2005-nylon-01.jpg" \
#   -o assets/img/brands/prada/prada-reedition-2005-01.jpg

echo "  → Using placeholder images for Prada products"
echo "  → Replace with official Prada catalog images"

# ========================================
# HERO IMAGES
# ========================================
echo "📦 Hero Background Images..."

# Gucci GG Marmont (Hero Option 1)
# curl -L "https://media.gucci.com/images/gg-marmont-small-hero-angle.jpg" \
#   -o assets/img/hero/gucci-marmont-hero.jpg

# Prada Re-Edition 2005 (Hero Option 2)
# curl -L "https://www.prada.com/content/dam/pradanux/reedition-2005-hero.jpg" \
#   -o assets/img/hero/prada-reedition-hero.jpg

# Louis Vuitton Capucines (Hero Option 3)
# curl -L "https://us.louisvuitton.com/images/capucines-mm-hero.jpg" \
#   -o assets/img/hero/lv-capucines-hero.jpg

echo "  → Using placeholder for hero background"
echo "  → Choose: Gucci Marmont, Prada Re-Edition, or LV Capucines"

# ========================================
# NEWS/ARTICLE IMAGES
# ========================================
echo "📦 News & Article Images..."

echo "  → Using placeholder images for news articles"

echo ""
echo "✅ Image fetch script complete!"
echo ""
echo "📝 NEXT STEPS:"
echo "1. Replace placeholder curl URLs with actual brand catalog image URLs"
echo "2. Uncomment the curl commands once URLs are verified"
echo "3. Run: bash scripts/fetch_images.sh"
echo "4. Run: bash scripts/optimize_images.sh (to convert to WebP)"
echo ""
echo "⚠️  IMPORTANT: These images are for demonstration only."
echo "   Ensure you have proper licensing for production use."
