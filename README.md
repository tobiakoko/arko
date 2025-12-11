# Arko Media Labs

A stunning, modern website for Arko Media Labs built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Dark, futuristic design with glassmorphism effects
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive layout
- 🎭 Interactive cursor effects
- 🌊 Mesh gradients and grain textures
- 💎 Custom typography with Syne and Manrope fonts
- 🎯 Scroll-triggered animations
- 🔮 Floating geometric elements

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
arko-media-labs/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles with Tailwind
│   └── vite-env.d.ts    # TypeScript definitions
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies
```

## Design Inspiration

This website is inspired by EtherSight's beautiful design aesthetic, featuring:

- Dark, immersive backgrounds
- Glassmorphism UI elements
- Sophisticated animations
- Bold typography
- Gradient accents
- Floating geometric shapes

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#0a0a0f',
    light: '#1a1a2e',
  },
  accent: {
    teal: '#00d9d9',
    coral: '#ff6b6b',
    gold: '#ffd700',
  }
}
```

### Fonts

The project uses Google Fonts:
- **Syne** - Display font
- **Manrope** - Body font

Change these in `src/index.css` and `tailwind.config.js`.

## License

MIT

## Contact

For inquiries about Arko Media Labs, visit the website or reach out through the contact section.