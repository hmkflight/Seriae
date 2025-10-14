#!/bin/bash
# OPTIMIZE_ALL.sh - Batch convert all images to WebP format
set -e

echo "🎨 Optimizing all images for SERIAE..."
echo ""

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ Error: cwebp is not installed"
    echo "Install with: brew install webp (macOS) or sudo apt-get install webp (Linux)"
    exit 1
fi

total=0
converted=0
skipped=0

# Convert all JPG to WebP
echo "📸 Processing JPG files..."
while IFS= read -r img; do
    ((total++))
    webp_path="${img%.jpg}.webp"

    if [ ! -f "$webp_path" ] || [ "$img" -nt "$webp_path" ]; then
        echo "  → Converting: $(basename "$img")"
        cwebp -q 82 "$img" -o "$webp_path" -quiet
        ((converted++))
    else
        ((skipped++))
    fi
done < <(find assets/img -name "*.jpg" -type f)

# Convert all PNG to WebP
echo ""
echo "📸 Processing PNG files..."
while IFS= read -r img; do
    ((total++))
    webp_path="${img%.png}.webp"

    if [ ! -f "$webp_path" ] || [ "$img" -nt "$webp_path" ]; then
        echo "  → Converting: $(basename "$img")"
        cwebp -q 82 "$img" -o "$webp_path" -quiet
        ((converted++))
    else
        ((skipped++))
    fi
done < <(find assets/img -name "*.png" -type f)

echo ""
echo "✅ Optimization complete!"
echo ""
echo "📊 Summary:"
echo "   Total images processed: $total"
echo "   Newly converted: $converted"
echo "   Already optimized (skipped): $skipped"
echo ""
echo "💾 Total size:"
du -sh assets/img

echo ""
echo "🚀 Next steps:"
echo "1. Verify images load correctly: open http://localhost:8000"
echo "2. Check WebP is served in DevTools Network tab"
echo "3. Test lazy loading by scrolling through collections"
