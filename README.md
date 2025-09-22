# Ekko Media Website

A modern, responsive website for Ekko Media - The go-to influencer agency for male audience engagement & activation.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by leading influencer marketing agencies
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Static Site**: Optimized for Vercel deployment with static export
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📁 Project Structure

```
EkkoMedia/
├── app/                    # Next.js 13+ app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── talent/            # Team page
│   ├── work/              # Case studies page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Footer.tsx         # Site footer
│   └── Navigation.tsx     # Site navigation
├── public/                # Static assets
│   ├── images/            # Image assets
│   └── videos/            # Video assets
└── ...config files
```

## 🖼️ Adding Images and Videos

### Images

Place all images in the `public/images/` directory:

- **Hero Video Background**: `public/videos/hero-video.mp4`
- **Team Photos**: `public/images/team-member-1.jpg`, `team-member-2.jpg`, etc.
- **Case Study Images**: `public/images/case-study-1.jpg`, `case-study-2.jpg`, etc.
- **Brand Logos**: `public/images/brand-logo-1.png`, `brand-logo-2.png`, etc.

### Recommended Image Sizes

- **Hero Video**: 1920x1080 (Full HD)
- **Team Photos**: 400x400 (Square)
- **Case Study Images**: 800x600 (4:3 ratio)
- **Brand Logos**: 200x100 (2:1 ratio)

### Video Requirements

- **Format**: MP4
- **Resolution**: 1920x1080 (Full HD)
- **Duration**: 10-30 seconds for hero video
- **File Size**: Keep under 10MB for optimal loading

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm run build
# Deploy the 'out' directory to Vercel
```

## 🎨 Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  }
}
```

### Content

- Update company information in each page component
- Modify team member details in `app/talent/page.tsx`
- Update case studies in `app/work/page.tsx`
- Customize services in `app/services/page.tsx`

### Branding

- Replace placeholder content with actual company information
- Update the logo in the navigation component
- Customize the hero video and images

## 📱 Pages

1. **Homepage** (`/`) - Hero video, services overview, case studies
2. **About** (`/about`) - Company story, timeline, values
3. **Services** (`/services`) - Detailed service offerings
4. **Talent** (`/talent`) - Team members and expertise
5. **Work** (`/work`) - Case studies and client results
6. **Contact** (`/contact`) - Contact form and company information

## 🚀 Deployment

This project is configured for static export and Vercel deployment:

1. Build the project: `npm run build`
2. Deploy the `out` directory to Vercel
3. Configure custom domain if needed

## 📞 Support

For questions or support, contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
