# Brand Logo Setup Guide

## 📁 **Where to Add Logo Files**

Add your brand logo files to this directory:
```
public/images/brands/
```

## 📋 **Required Logo Files**

You need to add these logo files:

1. **netflix.svg** - Netflix logo
2. **ubisoft.svg** - Ubisoft logo  
3. **revolut.svg** - Revolut logo
4. **hostinger.svg** - Hostinger logo
5. **sandboxvr.svg** - SandboxVR logo
6. **spotify.svg** - Spotify logo
7. **adobe.svg** - Adobe logo
8. **figma.svg** - Figma logo

## 🎨 **Logo Specifications**

### **Preferred Format: SVG**
- **Why**: Scalable, crisp at any size, smaller file size
- **Requirements**: 
  - Transparent background
  - Single color (white) or brand colors
  - Optimized for web
  - File size: Under 50KB

### **Alternative Format: PNG**
- **Requirements**:
  - High resolution (minimum 200x100px)
  - Transparent background
  - File size: Under 100KB
  - Format: PNG-24 with transparency

## 🔧 **How It Works**

1. **Constants File**: All brand data is managed in `/lib/constants.ts`
2. **Automatic Fallback**: If a logo fails to load, it shows a gradient placeholder
3. **Easy Updates**: Just replace the logo file to update the brand image
4. **Consistent Styling**: All logos are automatically styled with white color and hover effects

## 📝 **File Naming**

- Use lowercase brand names
- Use hyphens for multi-word brands (e.g., `sandbox-vr.svg`)
- Keep file extensions consistent (.svg or .png)

## ✅ **Current Status**

- [ ] Netflix logo (`netflix.svg`)
- [ ] Ubisoft logo (`ubisoft.svg`)
- [ ] Revolut logo (`revolut.svg`)
- [ ] Hostinger logo (`hostinger.svg`)
- [ ] SandboxVR logo (`sandboxvr.svg`)
- [ ] Spotify logo (`spotify.svg`)
- [ ] Adobe logo (`adobe.svg`)
- [ ] Figma logo (`figma.svg`)

## 🚀 **After Adding Logos**

1. Add the logo files to `public/images/brands/`
2. The website will automatically use the new logos
3. If a logo is missing, it will show a gradient placeholder
4. Test the website to ensure all logos display correctly

## 💡 **Tips**

- **SVG logos work best** - they're scalable and look crisp at any size
- **White logos preferred** - they work well with the current design
- **Keep file sizes small** - under 50KB for optimal loading
- **Test on different devices** - ensure logos look good on mobile and desktop

---

*Once you add the logo files, the website will automatically display them in the brand showcase section with beautiful hover effects and animations.*
