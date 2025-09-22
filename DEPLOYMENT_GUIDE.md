# Ekko Media Website - Vercel Deployment Guide

This guide will walk you through deploying your Ekko Media website to Vercel.

## 🚀 **Step-by-Step Deployment Process**

### **Step 1: Create GitHub Repository**

1. **Go to GitHub.com** and sign in to your account
2. **Click "New Repository"** (green button or + icon)
3. **Repository Settings:**
   - Repository name: `ekko-media-website`
   - Description: `Ekko Media - Influencer Marketing Agency Website`
   - Visibility: Public (or Private if preferred)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. **Click "Create Repository"**

### **Step 2: Connect Local Repository to GitHub**

Run these commands in your terminal (in the EkkoMedia directory):

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ekko-media-website.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### **Step 3: Deploy to Vercel**

#### **Option A: Deploy via Vercel Dashboard (Recommended)**

1. **Go to [vercel.com](https://vercel.com)** and sign in
   - Use your GitHub account for easy integration
2. **Click "New Project"**
3. **Import your repository:**
   - Select your GitHub account
   - Find and select `ekko-media-website`
   - Click "Import"
4. **Configure Project Settings:**
   - Project Name: `ekko-media-website` (or your preferred name)
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)
5. **Click "Deploy"**

#### **Option B: Deploy via Vercel CLI**

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory:**
   ```bash
   cd /Users/ericxiong/Documents/Web/EkkoMedia
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - Project name: `ekko-media-website`
   - Directory: `./`
   - Override settings? `N`

### **Step 4: Configure Environment Variables (If Needed)**

If your app uses environment variables:

1. **Go to your Vercel project dashboard**
2. **Click "Settings" tab**
3. **Click "Environment Variables"**
4. **Add any required variables:**
   - Variable Name: `NEXT_PUBLIC_API_URL`
   - Value: `https://your-api-url.com`
   - Environment: Production, Preview, Development

### **Step 5: Custom Domain Setup (Optional)**

1. **In Vercel dashboard, go to "Domains"**
2. **Add your custom domain:**
   - Enter your domain (e.g., `ekkomedia.com`)
   - Follow DNS configuration instructions
3. **Update DNS records** with your domain provider

## 🔧 **Post-Deployment Configuration**

### **Automatic Deployments**

Vercel will automatically deploy when you push to your main branch:

```bash
# Make changes to your code
git add .
git commit -m "Update website content"
git push origin main
# Vercel will automatically build and deploy
```

### **Preview Deployments**

Every pull request gets a preview deployment:

1. **Create a new branch:**
   ```bash
   git checkout -b feature/new-content
   ```

2. **Make changes and push:**
   ```bash
   git add .
   git commit -m "Add new content"
   git push origin feature/new-content
   ```

3. **Create Pull Request on GitHub**
4. **Vercel will create a preview URL** for testing

## 📁 **Project Structure Verification**

Your project should have this structure:

```
EkkoMedia/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── services/page.tsx
│   ├── talent/page.tsx
│   └── work/page.tsx
├── components/
│   ├── Footer.tsx
│   └── Navigation.tsx
├── public/
│   ├── images/
│   └── videos/
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎯 **Vercel-Specific Optimizations**

### **Next.js Configuration**

Your `next.config.js` is already optimized for Vercel:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### **Performance Optimizations**

Vercel automatically provides:
- ✅ **Edge Network** - Global CDN
- ✅ **Automatic HTTPS** - SSL certificates
- ✅ **Image Optimization** - Next.js Image component
- ✅ **Automatic Compression** - Gzip/Brotli
- ✅ **Caching** - Static asset caching

## 🔍 **Troubleshooting**

### **Common Issues:**

1. **Build Failures:**
   - Check `package.json` dependencies
   - Ensure all imports are correct
   - Verify TypeScript types

2. **Image Loading Issues:**
   - Check image paths in `public/` folder
   - Verify image formats (JPG, PNG, SVG)
   - Ensure proper Next.js Image component usage

3. **Styling Issues:**
   - Verify Tailwind CSS configuration
   - Check for missing CSS classes
   - Ensure proper responsive design

### **Debug Commands:**

```bash
# Test build locally
npm run build

# Test production build
npm start

# Check for TypeScript errors
npx tsc --noEmit

# Lint code
npm run lint
```

## 📊 **Analytics and Monitoring**

### **Vercel Analytics (Optional)**

1. **Enable in Vercel Dashboard:**
   - Go to your project
   - Click "Analytics" tab
   - Enable Web Analytics

2. **Add to your app:**
   ```bash
   npm install @vercel/analytics
   ```

3. **Add to `app/layout.tsx`:**
   ```tsx
   import { Analytics } from '@vercel/analytics/react';
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="en">
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

## 🚀 **Deployment Checklist**

Before deploying, ensure:

- [ ] All placeholder content is identified
- [ ] Images are optimized for web
- [ ] All pages load correctly
- [ ] Responsive design works on mobile
- [ ] All links and navigation work
- [ ] Contact forms are functional
- [ ] SEO meta tags are added
- [ ] Favicon is set
- [ ] Error pages are handled

## 📞 **Support**

If you encounter issues:

1. **Check Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
2. **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
3. **Vercel Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## 🎉 **Success!**

Once deployed, your website will be available at:
- **Production URL:** `https://your-project-name.vercel.app`
- **Custom Domain:** `https://yourdomain.com` (if configured)

Your Ekko Media website is now live and ready to showcase your influencer marketing services!

---

*Last updated: September 2024*
