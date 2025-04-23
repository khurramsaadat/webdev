# CreativeTech Web Agency

A modern, responsive website for a creative technology agency built with Next.js, TypeScript, and Tailwind CSS.

## Recent Updates

- Updated client carousel with optimized logo display and consistent section width
- Modified testimonial names while preserving original content and images
- Adjusted carousel animation speeds for better mobile and desktop experience
- Enhanced logo sizing and spacing in the clients section

## Project Structure

```
web-agency/
├── .next/                 # Next.js build output
├── app/                   # Next.js 13+ app directory
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── portfolio/        # Portfolio page
│   └── page.tsx          # Home page
├── components/           # Reusable React components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── OptimizedImage.tsx
│   ├── PexelsImage.tsx
│   └── Testimonials.tsx
├── public/              # Static assets
│   ├── images/
│   │   ├── clients/    # Client logos
│   │   ├── hero/       # Hero section images
│   │   ├── projects/   # Portfolio images
│   │   └── testimonials/ # Testimonial profile images
├── scripts/            # Utility scripts
├── styles/            # Global styles
├── .gitignore
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

## Features

- Modern, responsive design
- Optimized image loading with next/image
- Smooth animations with Framer Motion
- Client logo carousel
- Testimonials section
- Portfolio showcase
- Contact form
- SEO optimized

## Tech Stack

- Next.js 13+
- TypeScript
- Tailwind CSS
- Framer Motion
- ESLint
- PostCSS

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/web-agency.git
```

2. Install dependencies:
```bash
cd web-agency
npm install
```

3. Run the development server:
```bash
npm run dev