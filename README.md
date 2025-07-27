# TechStore - Computer Hardware Store

A modern, responsive computer hardware store built with SvelteKit, TypeScript, and Tailwind CSS, deployed on Azure Static Web Apps.

## 🌐 Live Demo

**Production URL:** [https://ashy-sky-078d0441e.2.azurestaticapps.net](https://ashy-sky-078d0441e.2.azurestaticapps.net)

## ✨ Features

- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **TypeScript**: Full type safety and better development experience
- **Product Catalog**: Browse computer hardware components by category
- **Shopping Cart**: Add, remove, and manage cart items
- **Search & Filter**: Find products quickly with search and category filters
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Performance**: Optimized for fast loading and smooth interactions
- **Azure Deployment**: Automatically deployed to Azure Static Web Apps

## 🛠️ Tech Stack

- **Frontend**: SvelteKit 2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide Svelte
- **Deployment**: Azure Static Web Apps
- **Code Quality**: ESLint, Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/davidagustin/azure-static-practice.git
   cd azure-static-practice
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `public/` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   ├── data/          # Product data and types
│   └── types/         # TypeScript type definitions
├── routes/            # SvelteKit pages
└── app.css           # Global styles with Tailwind
```

## 🎨 Components

- **Header**: Navigation, search, and cart toggle
- **ProductCard**: Individual product display with add to cart
- **Cart**: Shopping cart sidebar with quantity management
- **Product Grid**: Responsive product listing with filters

## 🛍️ Product Categories

- **Processors (CPU)**: Intel and AMD processors
- **Graphics Cards (GPU)**: NVIDIA and AMD graphics cards
- **Storage**: SSDs and HDDs
- **Memory (RAM)**: DDR4 and DDR5 memory kits
- **Motherboards**: ATX, mATX, and ITX motherboards
- **Cooling**: Air and liquid cooling solutions
- **Power Supplies**: Modular and non-modular PSUs
- **Cases**: PC cases and enclosures

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with svelte-check
- `npm run lint` - Run ESLint and Prettier checks
- `npm run format` - Format code with Prettier

### Code Quality

The project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Svelte Check** for Svelte-specific validation

## 🚀 Deployment

This project is configured for Azure Static Web Apps deployment:

1. **Build Output**: Files are built to the `public/` directory
2. **Static Adapter**: Uses `@sveltejs/adapter-static` for static site generation
3. **Azure Integration**: Automatically deploys from GitHub repository

### Azure Static Web Apps Features

- **Global CDN**: Fast loading worldwide
- **HTTPS**: Secure by default
- **Custom Domains**: Support for custom domain names
- **CI/CD**: Automatic deployment on git push

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar cart
- **Tablet**: Adapted layout with mobile-friendly navigation
- **Mobile**: Touch-optimized interface with hamburger menu

## 🎯 Future Enhancements

- [ ] User authentication and accounts
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced filtering options
- [ ] Payment integration
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Real-time inventory updates

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue on GitHub or contact the development team. 