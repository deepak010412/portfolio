# Deepak Varma - Cloud Engineer Portfolio (Static Version)

## Project Overview
This is a 100% static, single-file HTML/CSS/JS version of Deepak Varma's portfolio. It requires no backend server and can be hosted for free on GitHub Pages or any static hosting service.

## Features
- **Single File**: Everything (HTML, CSS, JS) is contained within `index.html`.
- **Enhanced Animations**: 120 animated neurons using `tsparticles`.
- **Futuristic Dark Theme**: Dark navy background with cloud blue (#00AEEF) accents.
- **Responsive**: Fully optimized for mobile and desktop.
- **Modern Tech Stack (CDN)**:
  - **Tailwind CSS**: For utility-first styling.
  - **Lucide Icons**: For vector icons.
  - **tsParticles**: For the neural network background.
  - **Framer Motion (via CDN)**: For scroll animations.

## How to Host on GitHub Pages
1. Create a new GitHub repository on GitHub.com.
2. Upload the `index.html` file to the root of the repository.
3. Go to **Settings > Pages** in your GitHub repository.
4. Under **Build and deployment > Source**, select **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then click **Save**.
6. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/` within a few minutes.

## Contact Form
Since this is a static site, the contact form is currently a frontend-only demonstration. To make it functional on a static host like GitHub Pages, you can use a free service like **Formspree**:
1. Go to [Formspree.io](https://formspree.io/) and create a free account.
2. Create a new form and get your unique "Form ID".
3. In `index.html`, find the `<form>` tag and add `action="https://formspree.io/f/YOUR_FORM_ID"` and `method="POST"`.

## Local Development
Simply open `index.html` in any web browser. No server or installation required.
