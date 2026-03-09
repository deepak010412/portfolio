# Deepak Varma's Cloud Engineer Portfolio

## Project Overview
Modern, animated portfolio website featuring:
- **Dark/Light Theme Toggle** - Full theme switching with persistent storage
- **Enhanced Particle Background** - 120 animated neurons/particles with neural network effect
- **Contact Form** - Functional form with PostgreSQL backend
- **Cloud Theme** - Cloud blue (#00AEEF), purple, and gradient design
- **Responsive Design** - Mobile-first with Tailwind CSS

## Current Architecture
- **Frontend**: React + Vite + Framer Motion
- **Backend**: Express.js
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS + custom glass-morphism effects
- **Animations**: @tsparticles for background, Framer Motion for UI

## Theme System
- Uses custom ThemeProvider with localStorage persistence
- Light mode: Clean whites and blues
- Dark mode: Navy backgrounds (not pure black) with vibrant accents
- Theme toggle button in navigation bar (Sun/Moon icon)

## GitHub Pages Deployment

To deploy as a static site on GitHub Pages (free hosting):

### Option 1: Client-Only (No Backend)
1. Remove backend dependency
2. Build the frontend: `npm run build`
3. Deploy the `dist/` folder to GitHub Pages
4. Use Formspree or similar for contact form handling

### Option 2: Keep Backend on Separate Server
1. Build frontend: `npm run build`
2. Deploy `dist/` to GitHub Pages
3. Host backend on free tier service (Railway, Render, etc.)
4. Update API endpoint in frontend code

### Quick Build Setup
```bash
npm run build
# This creates optimized build in dist/ folder
# Push to gh-pages branch or configure Actions
```

## File Structure
- `client/src/pages/Home.tsx` - Main page with all sections
- `client/src/components/ParticlesBackground.tsx` - Particle animation system
- `client/src/components/theme-provider.tsx` - Theme context and logic
- `client/src/index.css` - Color variables and glass-card styles
- `server/routes.ts` - API endpoints
- `shared/schema.ts` - Data models

## Features Implemented
✓ 120 animated particles with enhanced effects
✓ Light/Dark theme toggle
✓ Dark navy color scheme (not pure black)
✓ Contact form (requires backend)
✓ Responsive mobile layout
✓ Cloud blue (#00AEEF) primary color
✓ Purple accent colors
✓ Glass-morphism UI elements

## Color Palette
- **Light Mode**: White background, dark navy text, cloud blue accents
- **Dark Mode**: Dark navy background (222 47% 6%), white text, cloud blue (#196 100% 47%)
- **Accent**: Purple (#280 100% 60%)
- **Primary**: Cloud Blue (#196 100% 47%)

## Environment Variables
- `SESSION_SECRET` - Session authentication (already configured)
- `DATABASE_URL` - PostgreSQL connection (already configured)

## Next Steps for Hosting
1. For GitHub Pages: Modify to remove backend or use external API
2. Test theme toggle in both light and dark modes
3. Run `npm run build` to generate production bundle
4. Configure GitHub Actions for automatic deployment
