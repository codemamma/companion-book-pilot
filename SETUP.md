# Quick Setup Guide for CARES Leadership Companion

This companion microsite is designed to be linked from your main website and features your author brand throughout.

## 🚀 Quick Start (5 minutes)

### Step 1: Update Your Information

Edit `src/data/authorConfig.js` and replace all placeholder text with your information:

- **Author name** and professional details
- **Book title**, subtitle, and summary
- **Your website URL** and LinkedIn profile
- **Testimonial/endorsement** quote
- **Key takeaways** from your book

### Step 2: Add Your Images

Place these two images in the `/public` folder:

1. **Book Cover**: `book-cover.jpg` (600x900px recommended)
2. **Author Headshot**: `author-headshot.jpg` (500x500px square recommended)

If you use different filenames, update the paths in `authorConfig.js`.

### Step 3: Test Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see your companion site.

### Step 4: Build and Deploy

```bash
npm run build
```

Upload the contents of the `/dist` folder to your web host.

## 📋 What Gets Updated Automatically

When you edit `authorConfig.js`, these elements update throughout the site:

- Header navigation (shows your name as author)
- Hero headline (uses your book title)
- Book cover displays
- Author bio section
- Testimonial section
- Footer links
- All CTAs linking back to your website

## 🎨 Customization Options

### Basic (Required)
- Author and book information in `authorConfig.js`
- Your images in `/public` folder

### Framework Content (Optional)
- Edit `src/data/caresFramework.js` to customize the 5 CARES pillars

### Advanced (Optional)
- Integrate AI for the Coach page (`src/pages/Coach.jsx`)
- Connect forms to your email service (`src/pages/Toolkit.jsx`)
- Customize colors in `tailwind.config.js`

## 🔗 Linking from Your Website

Add a prominent link from your main website to this companion:

Example CTA text:
- "Explore the Interactive Companion"
- "Apply the CARES Framework"
- "Access the Leadership Tools"

This creates a flow: **Your Website → Companion App**

The companion links back to your website throughout the navigation and footer.

## ✅ Before You Launch Checklist

- [ ] Updated `authorConfig.js` with your information
- [ ] Added book cover image to `/public`
- [ ] Added author headshot to `/public`
- [ ] Tested all navigation links
- [ ] Verified author website URL works in header
- [ ] Confirmed LinkedIn link works in footer
- [ ] Reviewed all page content for accuracy
- [ ] Built the project with `npm run build`
- [ ] Tested the built version with `npm run preview`

## 📞 Questions?

All customization points are marked with comments in the code. Look for:
- `// TODO:` for integration points
- `// Update this` for content customization
- Inline comments in `authorConfig.js`

For more details, see the full README.md file.
