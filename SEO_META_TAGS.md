# SEO Meta Tags Guide for SERIAE

## Template for All Pages

Add these meta tags to the `<head>` section of each page:

```html
<!-- Primary Meta Tags -->
<meta name="title" content="[Page Title] | SERIAE">
<meta name="description" content="[Page-specific description 150-160 characters]">
<meta name="keywords" content="luxury resale, authenticated handbags, luxury timepieces, consignment, [page-specific keywords]">
<meta name="author" content="SERIAE">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://seriae.com/[page-path]">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://seriae.com/[page-path]">
<meta property="og:title" content="[Page Title] | SERIAE">
<meta property="og:description" content="[Same as description]">
<meta property="og:image" content="https://seriae.com/assets/img/og-image.jpg">
<meta property="og:site_name" content="SERIAE">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://seriae.com/[page-path]">
<meta property="twitter:title" content="[Page Title] | SERIAE">
<meta property="twitter:description" content="[Same as description]">
<meta property="twitter:image" content="https://seriae.com/assets/img/twitter-card.jpg">
```

## Page-Specific Examples

### Homepage (index.html)
```html
<meta name="title" content="SERIAE - Luxury Resale Marketplace | Authenticated Handbags & Timepieces">
<meta name="description" content="Discover authenticated pre-owned luxury handbags and timepieces from Louis Vuitton, Chanel, Hermès, Rolex. Buy, sell, and consign with SERIAE's curated marketplace.">
<meta name="keywords" content="luxury resale, authenticated handbags, Chanel bags, Hermès Birkin, Rolex watches, Louis Vuitton, luxury consignment">
```

### Collections Page
```html
<meta name="title" content="Luxury Collections - Handbags & Timepieces | SERIAE">
<meta name="description" content="Browse our curated collection of authenticated luxury handbags and timepieces. Louis Vuitton, Chanel, Hermès, Rolex, Gucci, Prada - all verified by our experts.">
```

### Item Detail Pages
```html
<meta name="title" content="[Brand] [Model] - [Condition] | SERIAE">
<meta name="description" content="Authenticated [Brand] [Model] from [Year]. [Condition] condition. [Price]. 100% verified by SERIAE luxury specialists.">
<meta property="og:type" content="product">
<meta property="product:price:amount" content="[price]">
<meta property="product:price:currency" content="USD">
```

### Seller Registration
```html
<meta name="title" content="Consign Your Luxury Items | SERIAE">
<meta name="description" content="Sell your luxury handbags and timepieces through SERIAE's expert consignment service. 15% commission, free authentication, reach exclusive buyers worldwide.">
```

## Structured Data (JSON-LD)

Add to pages for rich search results:

### Organization (All Pages)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SERIAE",
  "description": "Curated luxury resale marketplace",
  "url": "https://seriae.com",
  "logo": "https://seriae.com/assets/img/logo.png",
  "foundingDate": "1987",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "UK"
  }
}
</script>
```

### Product (Item Detail Pages)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Brand] [Model]",
  "image": "[item.cover]",
  "description": "[item.description]",
  "brand": {
    "@type": "Brand",
    "name": "[item.brand]"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://seriae.com/item/[slug]",
    "priceCurrency": "USD",
    "price": "[item.price]",
    "itemCondition": "https://schema.org/UsedCondition",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

## Implementation Priority

1. ✅ Homepage - Most important for SEO
2. ✅ Collections page - High traffic
3. ✅ Item detail pages - Product SEO
4. ✅ Seller registration - Conversion page
5. ⏳ All other pages - Lower priority

## Tools for Testing

- Google Search Console: https://search.google.com/search-console
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Schema.org Validator: https://validator.schema.org/
