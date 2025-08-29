# Glomiks Company Website

A modern, responsive company website for PT. Global Mitra Karya Sejati (Glomiks) built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **TypeScript**: Fully typed for better development experience and code reliability
- **Component Architecture**: Reusable, well-structured components
- **CMS Ready**: Structured data with TypeScript interfaces for easy CMS integration
- **SEO Optimized**: Built with Next.js App Router for optimal performance
- **Form Handling**: Contact form with validation using React Hook Form

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Development**: ESLint, TypeScript compiler

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products/Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── layout/            # Layout components (Header, Footer)
│   ├── sections/          # Section components (Hero, ProductCard, etc.)
│   └── ui/                # UI components (Button, Card, etc.)
├── data/                  # Mock data for CMS-readiness
│   ├── companyData.ts     # Company information
│   ├── products.ts        # Products/services data
│   └── stats.ts           # Statistics data
├── lib/                   # Utility functions and constants
│   ├── constants.ts       # App constants
│   └── utils.ts           # Helper functions
└── types/                 # TypeScript type definitions
    └── index.ts           # Global interfaces and types
```

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Key Features

### TypeScript Integration

- Comprehensive type definitions for all components and data
- Interfaces for props, data models, and API responses
- Type-safe development experience

### CMS Readiness

- Structured mock data with TypeScript interfaces
- Easy integration with headless CMS solutions
- Type-safe data fetching patterns

### Component Architecture

- Reusable UI components (Button, Card, Container, Section)
- Specialized section components (Hero, StatsSection, ProductCard)
- Layout components for consistent structure

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Professional color scheme and typography
- Interactive elements with hover states

## Customization

### Adding New Content

1. Update mock data in `src/data/` files
2. Add corresponding TypeScript interfaces in `src/types/`
3. Create or update components as needed

### Styling

- Modify `tailwind.config.js` for design system changes
- Update global styles in `src/app/globals.css`
- Component-specific styles using Tailwind utility classes

### CMS Integration

1. Replace mock data imports with API calls
2. Use existing TypeScript interfaces for type safety
3. Update components to handle loading and error states

## Deployment

This project is ready to deploy on Vercel, Netlify, or any platform supporting Next.js applications.

For Vercel deployment:

```bash
vercel deploy
```

## License

This project is proprietary to PT. Global Mitra Karya Sejati (Glomiks).
