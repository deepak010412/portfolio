# Deepak Varma - Cloud Engineer Portfolio

## Project Overview
Modern, animated dark-theme portfolio with:
- **Enhanced Particle Animations** - 120 neurons creating neural network effect
- **Dark Navy Theme** - Futuristic design with cloud blue (#00AEEF) accents
- **Functional Contact Form** - PostgreSQL backend for message storage
- **Fully Responsive** - Mobile-optimized layout
- **Production Ready** - Can be deployed to GitHub Pages or any static host

## Current Architecture
- **Frontend**: React + Vite + Framer Motion
- **Backend**: Express.js
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS with custom glass-morphism
- **Animations**: @tsparticles + Framer Motion

## Features
✓ 120 animated particles with neural network connections
✓ Dark navy color scheme (not pure black - 222 47% 6%)
✓ Cloud blue primary color (#00AEEF / #196 100% 47%)
✓ Purple accents (#280 100% 60%)
✓ Functional contact form with email validation
✓ Fully responsive mobile design
✓ Production-ready build

## Deploy to GitHub Pages (Static)

To deploy as a free static website on GitHub Pages:

1. **Build the project**:
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with production files.

2. **Push to GitHub**:
   - Create a new repository on GitHub
   - Push your code
   - Enable GitHub Pages from repository settings
   - Select `dist/` folder as source (if using Actions)

3. **For the Contact Form** (choose one):
   - **Option A**: Replace with Formspree (free form backend)
   - **Option B**: Deploy backend separately to Render/Railway
   - **Option C**: Remove contact form for static-only site

## Quick Download Instructions

To download your project as a ZIP file:

1. **In Replit** - Click the three-dot menu (⋮) in the top-right corner
2. **Select "Download as ZIP"** or similar download option
3. **Extract and use** - The entire project is ready to deploy

## Project Structure
```
├── client/                 # Frontend (React)
│   └── src/
│       ├── pages/Home.tsx  # Main portfolio page
│       ├── components/
│       │   ├── ParticlesBackground.tsx  # Particle animation
│       │   └── theme-provider.tsx       # Dark theme setup
│       └── index.css       # Color variables
├── server/                 # Backend (Express)
│   ├── routes.ts          # API endpoints
│   ├── storage.ts         # Database operations
│   └── index.ts           # Server setup
├── shared/
│   ├── schema.ts          # Data models
│   └── routes.ts          # API types
└── package.json           # Dependencies
```

## Color Palette
- **Background**: Dark navy (#222 47% 6%)
- **Text**: White (#210 40% 98%)
- **Primary**: Cloud blue (#196 100% 47%)
- **Accent**: Purple (#280 100% 60%)
- **Cards**: Slightly lighter navy (#222 47% 8%)

## Environment Variables (Already Set Up)
- `SESSION_SECRET` - Authentication token
- `DATABASE_URL` - PostgreSQL connection

## What's Included
- Deepak's work experience (LDS Infotech, eClerx)
- Azure & AWS skills with certifications
- 3 real projects (Atumverse, Symbiosis, Compass Global)
- Contact form with message storage
- Smooth scroll navigation
- Glass-morphism UI effects
- Mobile-responsive design

## Next Steps
1. Download as ZIP from Replit
2. Deploy `dist/` to GitHub Pages
3. Or keep backend running for full functionality
4. Customize contact form handling as needed

---
**Built with**: React, Express, PostgreSQL, Tailwind CSS, Framer Motion
**Hosting**: Free on GitHub Pages (static) or Replit (with backend)
