# Brand Logos Directory

This directory contains all the brand logo files used throughout the website.

## Required Logo Files

Please add the following logo files to this directory:

### Brand Logos (SVG format preferred, PNG acceptable)
- `netflix.svg` - Netflix logo
- `ubisoft.svg` - Ubisoft logo  
- `revolut.svg` - Revolut logo
- `hostinger.svg` - Hostinger logo
- `sandboxvr.svg` - SandboxVR logo
- `spotify.svg` - Spotify logo
- `adobe.svg` - Adobe logo
- `figma.svg` - Figma logo

## File Specifications

### Preferred Format: SVG
- **Why SVG**: Scalable, crisp at any size, smaller file size
- **Requirements**: 
  - Transparent background
  - Single color or brand colors
  - Optimized for web
  - File size: Under 50KB

### Alternative Format: PNG
- **Requirements**:
  - High resolution (minimum 200x100px)
  - Transparent background
  - File size: Under 100KB
  - Format: PNG-24 with transparency

## File Naming Convention

- Use lowercase brand names
- Use hyphens for multi-word brands (e.g., `sandbox-vr.svg`)
- Keep file extensions consistent (.svg or .png)

## Usage in Code

These logos are referenced in the constants file at `/lib/constants.ts` and used in:
- Homepage brand showcase section
- Testimonials section
- Case studies section
- Work page

## Adding New Brands

1. Add the logo file to this directory
2. Update the `BRANDS` array in `/lib/constants.ts`
3. Update the `TESTIMONIALS` array if needed
4. Update the `CASE_STUDIES` array if needed

## Current Status

- [ ] Netflix logo
- [ ] Ubisoft logo
- [ ] Revolut logo
- [ ] Hostinger logo
- [ ] SandboxVR logo
- [ ] Spotify logo
- [ ] Adobe logo
- [ ] Figma logo
