#!/bin/bash
# CREATE_PLACEHOLDERS.sh - Generate SVG placeholder images until real images are added
set -e

echo "🖼️  Creating placeholder SVG images..."

# Function to create a luxury-styled placeholder SVG
create_placeholder() {
    local brand=$1
    local product=$2
    local filepath=$3

    cat > "$filepath" << 'EOF'
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="luxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#luxGrad)"/>
  <text x="400" y="380" font-family="serif" font-size="36" fill="#d4af37" text-anchor="middle" font-weight="300">
EOF
    echo "    $brand" >> "$filepath"
    cat >> "$filepath" << 'EOF'
  </text>
  <text x="400" y="440" font-family="sans-serif" font-size="20" fill="#f8f6f0" text-anchor="middle" opacity="0.7">
EOF
    echo "    $product" >> "$filepath"
    cat >> "$filepath" << 'EOF'
  </text>
  <rect x="20" y="20" width="760" height="760" fill="none" stroke="#d4af37" stroke-width="2" opacity="0.3"/>
</svg>
EOF
}

# Louis Vuitton
echo "  → Louis Vuitton..."
create_placeholder "LOUIS VUITTON" "Neverfull MM" "assets/img/brands/lv/lv-neverfull-mm-ebene-01.svg"
create_placeholder "LOUIS VUITTON" "Neverfull MM" "assets/img/brands/lv/lv-neverfull-mm-ebene-02.svg"
create_placeholder "LOUIS VUITTON" "Speedy 30" "assets/img/brands/lv/lv-speedy-30-monogram-01.svg"
create_placeholder "LOUIS VUITTON" "Speedy 30" "assets/img/brands/lv/lv-speedy-30-monogram-02.svg"

# Chanel
echo "  → Chanel..."
create_placeholder "CHANEL" "Classic Flap Medium" "assets/img/brands/chanel/chanel-classic-flap-medium-01.svg"
create_placeholder "CHANEL" "Classic Flap Medium" "assets/img/brands/chanel/chanel-classic-flap-medium-02.svg"
create_placeholder "CHANEL" "Boy Bag Medium" "assets/img/brands/chanel/chanel-boy-medium-navy-01.svg"
create_placeholder "CHANEL" "Boy Bag Medium" "assets/img/brands/chanel/chanel-boy-medium-navy-02.svg"

# Hermès
echo "  → Hermès..."
create_placeholder "HERMÈS" "Birkin 35" "assets/img/brands/hermes/hermes-birkin-35-togo-01.svg"
create_placeholder "HERMÈS" "Birkin 35" "assets/img/brands/hermes/hermes-birkin-35-togo-02.svg"
create_placeholder "HERMÈS" "Kelly 28" "assets/img/brands/hermes/hermes-kelly-28-gold-01.svg"
create_placeholder "HERMÈS" "Kelly 28" "assets/img/brands/hermes/hermes-kelly-28-gold-02.svg"

# Rolex
echo "  → Rolex..."
create_placeholder "ROLEX" "GMT-Master II" "assets/img/brands/rolex/rolex-gmt-master-ii-pepsi-01.svg"
create_placeholder "ROLEX" "GMT-Master II" "assets/img/brands/rolex/rolex-gmt-master-ii-pepsi-02.svg"
create_placeholder "ROLEX" "Submariner Date" "assets/img/brands/rolex/rolex-submariner-date-01.svg"
create_placeholder "ROLEX" "Submariner Date" "assets/img/brands/rolex/rolex-submariner-date-02.svg"

# Gucci
echo "  → Gucci..."
create_placeholder "GUCCI" "GG Marmont Small" "assets/img/brands/gucci/gucci-gg-marmont-small-01.svg"
create_placeholder "GUCCI" "GG Marmont Small" "assets/img/brands/gucci/gucci-gg-marmont-small-02.svg"

# Prada
echo "  → Prada..."
create_placeholder "PRADA" "Re-Edition 2005" "assets/img/brands/prada/prada-reedition-2005-01.svg"
create_placeholder "PRADA" "Re-Edition 2005" "assets/img/brands/prada/prada-reedition-2005-02.svg"

# Hero images
echo "  → Hero images..."
create_placeholder "GUCCI" "GG Marmont Hero" "assets/img/hero/gucci-marmont-hero.svg"
create_placeholder "PRADA" "Re-Edition Hero" "assets/img/hero/prada-reedition-hero.svg"
create_placeholder "LOUIS VUITTON" "Capucines Hero" "assets/img/hero/lv-capucines-hero.svg"

echo ""
echo "✅ Placeholder images created!"
echo "📝 Replace these with actual product images from brand catalogs"
echo "   Run: bash scripts/fetch_images.sh (after adding real URLs)"
echo "   Then: bash scripts/optimize_all.sh"
