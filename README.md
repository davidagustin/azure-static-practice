<div align="center">

# 🖥️ TechStore - Premium Computer Hardware Store

**A modern, responsive computer hardware store built with cutting-edge web technologies**

[![Svelte](https://img.shields.io/badge/Svelte-4.2.7-FF3E00?style=for-the-badge&logo=svelte)](https://svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Azure Static Web Apps](https://img.shields.io/badge/Azure_Static_Web_Apps-Deployed-0078D4?style=for-the-badge&logo=microsoft-azure)](https://azure.microsoft.com/en-us/services/app-service/static/)

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Now-00C851?style=for-the-badge&logo=vercel)](https://ashy-sky-078d0441e.2.azurestaticapps.net)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

*A comprehensive e-commerce platform for computer hardware enthusiasts and professionals*

</div>

---

## 🚀 Live Demo

**🌐 Production URL:** [https://ashy-sky-078d0441e.2.azurestaticapps.net](https://ashy-sky-078d0441e.2.azurestaticapps.net)

Experience the full-featured computer hardware store with modern UI/UX, responsive design, and seamless shopping experience.

---

## ✨ Features

### 🛍️ **E-Commerce Excellence**
- **📦 Product Catalog** - Browse 8+ categories of computer hardware
- **🔍 Advanced Search** - Find products by name, category, or description
- **🛒 Shopping Cart** - Add, remove, and manage cart items with quantity controls
- **📱 Responsive Design** - Perfect experience across all devices
- **⭐ Product Ratings** - Customer reviews and star ratings system

### 🎨 **Modern UI/UX**
- **🎯 Clean Design** - Professional, modern interface with smooth animations
- **🌈 Custom Theme** - Beautiful color scheme with primary blue and accent orange
- **📐 Grid Layout** - Responsive product grid with hover effects
- **🎪 Interactive Elements** - Smooth transitions and micro-interactions
- **♿ Accessibility** - WCAG compliant with proper ARIA labels

### ⚡ **Performance & Quality**
- **🚀 Fast Loading** - Optimized for speed with lazy loading
- **🔒 Type Safety** - Full TypeScript implementation
- **📊 SEO Optimized** - Meta tags and structured data
- **🌍 Global CDN** - Azure Static Web Apps with worldwide distribution
- **📱 PWA Ready** - Progressive Web App capabilities

---

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Frontend Framework** | [SvelteKit](https://kit.svelte.dev/) | 2.0 | Modern web framework |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 5.0 | Type safety & development |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 3.3.5 | Utility-first CSS framework |
| **Icons** | [Lucide Svelte](https://lucide.dev/) | 0.294.0 | Beautiful icon library |
| **Deployment** | [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/) | - | Cloud hosting platform |
| **Code Quality** | ESLint + Prettier | Latest | Code formatting & linting |

---

## 📦 Product Categories

| Category | Products | Description |
|----------|----------|-------------|
| 🖥️ **Processors (CPU)** | Intel Core i9-13900K | High-performance processors for gaming and workstations |
| 🎮 **Graphics Cards (GPU)** | NVIDIA RTX 4090 | Latest GPUs for gaming and content creation |
| 💾 **Storage** | Samsung 990 PRO 2TB | Fast SSDs and reliable HDDs |
| 🧠 **Memory (RAM)** | Corsair Vengeance 32GB | DDR4/DDR5 memory kits with RGB |
| 🔌 **Motherboards** | ASUS ROG Strix Z790-E | ATX, mATX, and ITX motherboards |
| ❄️ **Cooling** | Corsair H150i Elite | Air and liquid cooling solutions |
| ⚡ **Power Supplies** | Seasonic PRIME TX-1000 | Modular and non-modular PSUs |
| 🏠 **Cases** | Lian Li O11 Dynamic EVO | PC cases and enclosures |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**
- **Git**

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

---

## 📁 Project Structure

```
azure-static-practice/
├── 📁 src/
│   ├── 📁 lib/
│   │   ├── 📁 components/     # Reusable Svelte components
│   │   │   ├── Header.svelte
│   │   │   ├── ProductCard.svelte
│   │   │   └── Cart.svelte
│   │   ├── 📁 data/          # Product data and types
│   │   │   └── products.ts
│   │   └── 📁 types/         # TypeScript type definitions
│   │       └── index.ts
│   ├── 📁 routes/            # SvelteKit pages
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   ├── +error.svelte     # 404 error page
│   │   ├── 📁 about/         # About page
│   │   │   └── +page.svelte
│   │   ├── 📁 contact/       # Contact page
│   │   │   └── +page.svelte
│   │   ├── 📁 learn/         # Learn More page
│   │   │   └── +page.svelte
│   │   ├── 📁 products/      # Products page
│   │   │   └── +page.svelte
│   │   ├── 📁 support/       # Support page
│   │   │   └── +page.svelte
│   │   ├── 📁 help/          # Help redirect page
│   │   │   └── +page.svelte
│   │   └── 📁 faq/           # FAQ redirect page
│   │       └── +page.svelte
│   └── app.css               # Global styles with Tailwind
├── 📁 public/                # Build output directory
├── 📁 static/                # Static assets
├── package.json              # Dependencies and scripts
├── svelte.config.js          # SvelteKit configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # This file
```

---

## 🎨 Components Overview

### **Header Component**
- **Navigation Menu** - Responsive navigation with mobile hamburger menu
- **Search Bar** - Real-time product search functionality
- **Shopping Cart** - Cart toggle with item count badge
- **Mobile Optimized** - Touch-friendly mobile interface

### **ProductCard Component**
- **Product Image** - High-quality product images with hover effects
- **Product Info** - Name, category, description, and specifications
- **Rating System** - Star ratings with customer reviews
- **Add to Cart** - Responsive button with quantity controls
- **Stock Status** - Real-time inventory indicators

### **Cart Component**
- **Slide-out Panel** - Modern cart interface
- **Quantity Controls** - Increase/decrease item quantities
- **Price Calculation** - Real-time total calculation
- **Checkout Flow** - Seamless checkout process

---

## 🔧 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Type check with svelte-check |
| `npm run lint` | Run ESLint and Prettier checks |
| `npm run format` | Format code with Prettier |

### Code Quality

The project maintains high code quality standards with:

- **🔍 ESLint** - Code linting and error detection
- **💅 Prettier** - Automatic code formatting
- **🔒 TypeScript** - Static type checking
- **✅ Svelte Check** - Svelte-specific validation
- **📝 Conventional Commits** - Standardized commit messages

---

## 🚀 Deployment

### Azure Static Web Apps

This project is optimized for Azure Static Web Apps deployment:

#### **Features**
- **🌍 Global CDN** - Fast loading worldwide
- **🔒 HTTPS** - Secure by default
- **🎯 Custom Domains** - Support for custom domain names
- **🔄 CI/CD** - Automatic deployment on git push
- **📊 Analytics** - Built-in performance monitoring

#### **Build Configuration**
```javascript
// svelte.config.js
adapter: adapter({
  pages: 'public',
  assets: 'public',
  fallback: 'index.html',
  precompress: false,
  strict: false
})
```

#### **Deployment Process**
1. **Push to GitHub** - Automatic trigger
2. **Build Process** - Vite builds the application
3. **Static Generation** - SvelteKit generates static files
4. **Global Distribution** - Azure CDN distributes worldwide

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

| Device | Features | Layout |
|--------|----------|--------|
| **🖥️ Desktop** | Full navigation, sidebar cart, hover effects | 4-column grid, full features |
| **📱 Mobile** | Touch-optimized, hamburger menu, swipe gestures | 1-column grid, simplified UI |
| **📱 Tablet** | Hybrid layout, touch-friendly controls | 2-column grid, adaptive design |

---

## 🎯 Future Enhancements

### **Planned Features**
- [ ] **🔐 User Authentication** - User accounts and profiles
- [ ] **⭐ Product Reviews** - Customer review system
- [ ] **❤️ Wishlist** - Save favorite products
- [ ] **🔍 Advanced Filters** - Price range, brand, specifications
- [ ] **💳 Payment Integration** - Stripe/PayPal checkout
- [ ] **📦 Order Tracking** - Real-time order status
- [ ] **👨‍💼 Admin Dashboard** - Product management
- [ ] **📊 Analytics** - Sales and user analytics
- [ ] **🎓 Interactive Tutorials** - Video guides and walkthroughs
- [ ] **🔧 PC Builder Tool** - Interactive system builder
- [ ] **📱 Mobile App** - Native mobile application
- [ ] **🌍 Multi-language** - Internationalization support

### **Technical Improvements**
- [ ] **⚡ Performance** - Image optimization and lazy loading
- [ ] **🔒 Security** - Enhanced security measures
- [ ] **📱 PWA** - Progressive Web App features
- [ ] **🌍 i18n** - Internationalization support
- [ ] **🧪 Testing** - Unit and integration tests
- [ ] **📊 SEO Enhancement** - Advanced meta tags and structured data
- [ ] **🔍 Search Optimization** - Full-text search with filters
- [ ] **📈 Performance Monitoring** - Real-time performance metrics

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**
- Follow the existing code style
- Add TypeScript types for new features
- Include proper error handling
- Write meaningful commit messages
- Test on multiple devices and browsers

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

### **Getting Help**
- **🐛 Bug Reports** - [Create an issue](https://github.com/davidagustin/azure-static-practice/issues)
- **💡 Feature Requests** - [Submit a feature request](https://github.com/davidagustin/azure-static-practice/issues)
- **❓ Questions** - [Open a discussion](https://github.com/davidagustin/azure-static-practice/discussions)

### **Contact Information**
- **GitHub**: [@davidagustin](https://github.com/davidagustin)
- **Project**: [TechStore Repository](https://github.com/davidagustin/azure-static-practice)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

**🔄 Stay updated with the latest features and improvements**

---

*Built with ❤️ using SvelteKit, TypeScript, and Tailwind CSS*

</div> 