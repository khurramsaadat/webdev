# Agency Website

A modern, responsive website for a digital agency built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern and responsive design
- Smooth animations with Framer Motion
- TypeScript for type safety
- Tailwind CSS for styling
- Next.js for optimal performance
- Optimized image loading with next/image
- Responsive images with automatic sizing
- Custom PexelsImage component for consistent image handling
- Performance optimized with proper image compression

## Getting Started

## Image Optimization

The project uses a custom `PexelsImage` component that handles:

- Automatic image sizing based on usage context
- Proper aspect ratio maintenance
- Responsive image loading
- Image compression and optimization
- Priority loading for above-the-fold content

Image variants available:
- `hero`: Full-width hero images (16:9 aspect ratio)
- `card`: Card-style images (4:3 aspect ratio)
- `grid2`: Two-column grid images
- `grid4`: Four-column grid images

## Project Structure

```
agency/
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── portfolio/       # Portfolio page
│   ├── services/        # Services page
│   └── layout.tsx       # Root layout
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── PexelsImage.tsx # Optimized image component
│   └── Testimonials.tsx # Testimonials component
├── public/             # Static assets
├── styles/             # Global styles
└── package.json        # Project dependencies
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [Pexels](https://www.pexels.com/) - High-quality stock images

## Performance Optimizations

- Optimized image loading with next/image
- Proper image sizing and compression
- Priority loading for above-the-fold content
- Responsive image handling
- Layout shift prevention
- Efficient lazy loading for off-screen content
