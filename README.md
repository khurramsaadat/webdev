# CreativeTech - Digital Solutions

A modern web agency website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- Modern and responsive design
- Optimized images with next/image
- Smooth animations with Framer Motion
- Client logo carousel
- Testimonials section
- Portfolio showcase
- Contact form
- SEO optimized
- Mobile-first approach

## 📁 Project Structure

```
web-agency/
├── app/
│   ├── about/
│   ├── contact/
│   ├── portfolio/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── OptimizedImage.tsx
│   ├── PexelsImage.tsx
│   └── Testimonials.tsx
├── public/
│   ├── images/
│   │   ├── about/
│   │   ├── clients/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── team/
│   │   └── testimonials/
│   ├── favicon-16x16.ico
│   ├── favicon-32x32.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── apple-touch-icon.png
├── styles/
│   └── globals.css
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Latest Updates

- Added client logo carousel with smooth animation
- Implemented favicon support for multiple sizes and formats
- Fixed duplicate key issue in client logos
- Added gradient animation to the CreativeTech logo
- Updated social media links in footer
- Optimized image loading and performance

## 🔧 Installation

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
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 📝 Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🌟 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
