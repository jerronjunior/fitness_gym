# Fitness Sports Center Website

A modern fitness gym website built with Next.js and TypeScript. This project includes a complete landing page with sections for hero content, services, trainers, contact form, and footer.

## Overview

This website is designed for a gym or sports center and includes:

- Branded hero and navigation sections
- Service cards with custom images
- Trainer cards with individual trainer photos
- Contact form with email handoff
- Responsive layout for desktop and mobile

## Tech Stack

- Next.js 16 (Pages Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Project Structure

```
src/
	components/
		AboutSection.tsx
		ContactSection.tsx
		Footer.tsx
		HeroSection.tsx
		Navbar.tsx
		ServicesSection.tsx
		TrainersSection.tsx
	pages/
		_app.tsx
		_document.tsx
		index.tsx
		api/
			hello.ts
public/
	assets/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 3. Build for production

```bash
npm run build
```

### 4. Start production server

```bash
npm run start
```

## Available Scripts

- npm run dev: Start local development server
- npm run build: Create production build
- npm run start: Run production build
- npm run lint: Run ESLint checks

## Contact Form Behavior

The contact form is currently configured to open the visitor's email app and prefill an email to:

- jerronjunior01@gmail.com

Submission includes name, email, and message content in the drafted email.

## Asset Management

All media is served from:

- public/assets

When adding new images, prefer clean filenames (lowercase, hyphen-separated) to avoid URL issues.

## Troubleshooting

### Localhost not opening

If you see connection refused or lock errors:

```bash
taskkill /F /IM node.exe
npm run dev
```

Then reopen http://localhost:3000.

### Port already in use

Next.js may automatically switch ports (for example 3001). Check terminal output for the active URL.

## Deployment

You can deploy this app on platforms that support Next.js, such as:

- Vercel
- Netlify
- Azure Static Web Apps

For best results, deploy from the main branch and use npm run build as the build command.

## License

This project is for educational and business showcase use. Add a formal license file if you plan to distribute publicly.
