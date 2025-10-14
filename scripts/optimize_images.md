# Image Optimization Guide

This guide explains how to optimize product and hero images for the SERIAE luxury website using ImageMagick and cwebp.

## Prerequisites

Install required tools:

```bash
# macOS
brew install imagemagick webp

# Ubuntu/Debian
sudo apt-get install imagemagick webp

# Windows (via Chocolatey)
choco install imagemagick webp
```

## Optimization Workflow

### 1. Download Original Images

Run the fetch script after adding actual brand catalog URLs:

```bash
bash scripts/fetch_images.sh
```

### 2. Convert to WebP

WebP provides superior compression with excellent quality. Use quality 82 for optimal balance:

```bash
# Single file
cwebp -q 82 input.jpg -o output.webp

# Batch convert all JPG files in a directory
for file in assets/img/brands/lv/*.jpg; do
    cwebp -q 82 "$file" -o "${file%.jpg}.webp"
done

# Batch convert with progress indicator
find assets/img/brands -name "*.jpg" -exec sh -c '
    for img; do
        echo "Processing: $img"
        cwebp -q 82 "$img" -o "${img%.jpg}.webp"
    done
' sh {} +
```

### 3. Generate Responsive Sizes (Optional)

For hero images and large product shots, create multiple sizes for responsive loading:

```bash
# Generate 1600px, 1200px, and 800px versions
magick input.jpg -resize 1600x -quality 82 output-1600.jpg
magick input.jpg -resize 1200x -quality 82 output-1200.jpg
magick input.jpg -resize 800x -quality 82 output-800.jpg

# Then convert each to WebP
cwebp -q 82 output-1600.jpg -o output-1600.webp
cwebp -q 82 output-1200.jpg -o output-1200.webp
cwebp -q 82 output-800.jpg -o output-800.webp
```

### 4. Verify Compression

Check file sizes before and after:

```bash
# Show file sizes
ls -lh assets/img/brands/lv/

# Compare original vs WebP
du -h assets/img/brands/lv/*.jpg
du -h assets/img/brands/lv/*.webp
```

Expected compression: WebP files should be 25-35% smaller than high-quality JPEGs.

## Image Specifications

### Product Images

- **Format**: WebP primary, JPEG fallback
- **Dimensions**: 800x800px minimum (square crop)
- **Quality**: 82 (WebP), 85 (JPEG)
- **File size target**: < 100KB per image
- **Naming convention**: `brand-product-model-##.webp`

Example:
```
lv-neverfull-mm-ebene-01.webp
lv-neverfull-mm-ebene-02.webp
chanel-classic-flap-medium-01.webp
```

### Hero Background Images

- **Format**: WebP primary, JPEG fallback
- **Dimensions**: 1920x1080px minimum (landscape)
- **Quality**: 82 (WebP), 85 (JPEG)
- **File size target**: < 200KB
- **Responsive sizes**: 1600px, 1200px, 800px for mobile

Example:
```
gucci-marmont-hero.webp
gucci-marmont-hero-1600.webp
gucci-marmont-hero-1200.webp
```

### News/Article Images

- **Format**: WebP primary, JPEG fallback
- **Dimensions**: 1200x675px (16:9 aspect ratio)
- **Quality**: 80 (WebP), 82 (JPEG)
- **File size target**: < 150KB

## HTML Picture Element

Use `<picture>` for WebP with JPEG fallback:

```html
<picture>
    <source srcset="/assets/img/brands/lv/lv-neverfull-mm-ebene-01.webp" type="image/webp">
    <img src="/assets/img/brands/lv/lv-neverfull-mm-ebene-01.jpg"
         alt="Louis Vuitton Neverfull MM Damier Ebene"
         width="800"
         height="800"
         loading="lazy">
</picture>
```

For responsive hero images:

```html
<picture>
    <source srcset="/assets/img/hero/gucci-marmont-hero-800.webp 800w,
                    /assets/img/hero/gucci-marmont-hero-1200.webp 1200w,
                    /assets/img/hero/gucci-marmont-hero-1600.webp 1600w"
            type="image/webp">
    <source srcset="/assets/img/hero/gucci-marmont-hero-800.jpg 800w,
                    /assets/img/hero/gucci-marmont-hero-1200.jpg 1200w,
                    /assets/img/hero/gucci-marmont-hero-1600.jpg 1600w">
    <img src="/assets/img/hero/gucci-marmont-hero-1600.jpg"
         alt="Gucci GG Marmont Small Shoulder Bag"
         width="1920"
         height="1080"
         class="hero-bg">
</picture>
```

## Batch Optimization Script

Create `scripts/optimize_all.sh`:

```bash
#!/bin/bash
set -e

echo "🎨 Optimizing all images for SERIAE..."

# Convert all JPG to WebP
find assets/img -name "*.jpg" | while read img; do
    webp_path="${img%.jpg}.webp"
    if [ ! -f "$webp_path" ] || [ "$img" -nt "$webp_path" ]; then
        echo "→ Converting: $img"
        cwebp -q 82 "$img" -o "$webp_path"
    fi
done

# Convert all PNG to WebP (if any)
find assets/img -name "*.png" | while read img; do
    webp_path="${img%.png}.webp"
    if [ ! -f "$webp_path" ] || [ "$img" -nt "$webp_path" ]; then
        echo "→ Converting: $img"
        cwebp -q 82 "$img" -o "$webp_path"
    fi
done

echo "✅ Optimization complete!"
echo ""
echo "📊 Size comparison:"
du -sh assets/img
```

## Testing Performance

After optimization, test with:

```bash
# Check all images load correctly
open http://localhost:8000

# Verify WebP is served (check Network tab in DevTools)
# Verify lazy loading works (scroll through collections)
# Verify responsive images load correct sizes
```

## Image Licensing

⚠️ **IMPORTANT**: All brand catalog images are for demonstration purposes only.

- Louis Vuitton images © LVMH
- Chanel images © Chanel S.A.
- Hermès images © Hermès International
- Rolex images © Rolex SA
- Gucci images © Gucci (part of Kering)
- Prada images © Prada S.p.A.

For production use, you must:
1. Obtain proper licensing from brand owners
2. Use authorized retailer product images
3. Use stock photography with commercial licenses
4. Commission original product photography

## Resources

- [WebP Documentation](https://developers.google.com/speed/webp)
- [ImageMagick Resize Guide](https://imagemagick.org/Usage/resize/)
- [Responsive Images Guide](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images)
