# Quick Setup Guide

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: `http://localhost:3003`

## 📁 Project Structure Overview

```
src/
├── components/          # Reusable UI components
│   └── Navbar.jsx      # Navigation component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About page
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app component
├── index.css           # Global styles (Tailwind)
└── main.jsx            # App entry point
```

## 🎨 Key Features

### Routing
- React Router for navigation
- Active link highlighting
- Smooth page transitions

### Animations
- Framer Motion for smooth animations
- Hover effects on interactive elements
- Staggered animations for better UX

### Styling
- Tailwind CSS for utility-first styling
- Responsive design (mobile-first)
- Professional color scheme

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3003) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📱 Pages

1. **Home** (`/`) - Welcome and company overview
2. **About** (`/about`) - Mission, vision, and team
3. **Contact** (`/contact`) - Contact form and information

## 🎭 Animation Examples

### Page Transitions
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Hover Effects
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

### Staggered Animations
```jsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
```

## 🎨 Tailwind Classes Used

### Layout
- `container mx-auto` - Centered container
- `grid md:grid-cols-2` - Responsive grid
- `flex items-center` - Flexbox alignment

### Spacing
- `p-6` - Padding
- `mb-8` - Margin bottom
- `space-y-4` - Vertical spacing

### Colors
- `bg-blue-600` - Primary blue
- `text-gray-800` - Dark text
- `text-gray-600` - Secondary text

### Responsive
- `md:` prefix for medium screens and up
- `lg:` prefix for large screens and up

## 🔍 Troubleshooting

### Port Issues
If port 3003 is busy:
```bash
# Find process using port
lsof -i :3003

# Kill process
kill -9 <PID>
```

### Build Issues
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.js` content paths
- Verify PostCSS configuration

## 📚 Next Steps

1. **Customize Content**: Update text and images in components
2. **Add Pages**: Create new routes in `App.jsx`
3. **Enhance Animations**: Add more Framer Motion effects
4. **Deploy**: Build and deploy to your hosting platform

## 🆘 Need Help?

- Check the main `README.md` for detailed documentation
- Review `PACKAGE_SCRIPTS.md` for script explanations
- Contact: info@vetkinglifescience.com 