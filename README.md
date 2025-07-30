# 🔁 AushilfApp Callback

[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?logo=nextdotjs)](https://nextjs.org/)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify)](https://www.netlify.com/)
[![Framer Motion](https://img.shields.io/badge/Animation-Framer--Motion-e535ab)](https://www.framer.com/motion/)
[![License](https://img.shields.io/github/license/Elmundo93/aushilfapp)](LICENSE)

> 🎉 **Seamless post-payment & identity verification experience for the AushilfApp**  
> _Branded. Animated. Delightful._

---

## 📖 Overview

This is a **standalone Next.js project** that serves as the bridge between **Stripe flows** (Identity verification & Checkout) and the **mobile AushilfApp**. It provides a smooth, branded transition experience after payment or identity verification.

**Live Demo:** https://callback.wir-helfen-aus.de

### ✨ Key Features

- ✅ **Smooth Visual Feedback** - Animated loading states after payment/verification
- 🔄 **Deep Link Integration** - Automatic redirection via custom deep links (e.g., `aushilfapp://onboarding`)
- 🐝 **Branded Experience** - Fully customized with AushilfApp branding and design
- 🌀 **Motion Animations** - Engaging transitions using Framer Motion
- 🧩 **Modern UI** - Built with shadcn/ui components and TailwindCSS

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | [Next.js](https://nextjs.org/) | App Router |
| **Deployment** | [Netlify](https://www.netlify.com/) | Auto-deploy |
| **Styling** | [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.dev/) | Latest |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Latest |
| **DNS** | [Ionos](https://ionos.de) → Netlify CNAME | Custom domain |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **Yarn** package manager
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/Elmundo93/aushilfapp-callback.git

# Navigate to project directory
cd aushilfapp-callback

# Install dependencies
yarn install

# Start development server
yarn dev
```

The application will be available at `http://localhost:3000`

### Development Tools

```bash
# Install Netlify CLI for preview/testing
npm install -g netlify-cli

# Build for production
yarn build

# Start production server
yarn start
```

---

## 📁 Project Structure

```
aushilfApp-callback/
├── app/                          # Next.js App Router pages
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── payment-success/         # Payment success callback
│   ├── payment-canceled/        # Payment canceled callback
│   ├── identity-success/        # Identity verification success
│   ├── identity-canceled/       # Identity verification canceled
│   └── stripePortal/           # Stripe customer portal
├── components/                   # Reusable components
│   ├── LoadingScreen.tsx       # Main loading animation
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── progress.tsx
├── lib/                         # Utility functions
│   └── utils.ts
├── public/                      # Static assets
│   └── BienenLogoNeat.png     # Brand logo
├── tailwind.config.ts          # TailwindCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

---

## 🎨 Customization

### Branding Updates

1. **Logo Replacement**
   ```bash
   # Replace the logo in public/BienenLogoNeat.png
   # Ensure it's optimized for web (PNG/SVG recommended)
   ```

2. **Color Scheme**
   ```bash
   # Update colors in tailwind.config.ts
   # Modify the theme colors to match your brand
   ```

3. **Loading Flow**
   ```bash
   # Customize loading steps in components/LoadingScreen.tsx
   # Adjust animation timing and content
   ```

### Deep Link Configuration

Update the deep link URLs in the callback pages:
- `app/payment-success/page.tsx`
- `app/identity-success/page.tsx`

Example:
```typescript
const deepLinkUrl = "aushilfapp://onboarding?status=success";
```

---

## 🌐 Deployment

### Netlify Configuration

The project is configured for automatic deployment on Netlify:

- ✅ **Auto-deploy** from `main` branch
- ✅ **Custom domain**: `callback.wir-helfen-aus.de`
- ✅ **HTTPS** enabled
- ✅ **Build command**: `yarn build`
- ✅ **Publish directory**: `.next`

### Environment Variables

Set these in your Netlify dashboard if needed:

```env
NEXT_PUBLIC_APP_URL=https://callback.wir-helfen-aus.de
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

---

## 🔧 Available Scripts

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn type-check   # Run TypeScript type checking
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

**Developed with ❤️ by** [Wir helfen aus e.V.](https://wir-helfen-aus.de)  
**Maintained by** [@Elmundo93](https://github.com/Elmundo93)

---

## 📞 Support

For questions or support, please contact:
- **Email**: support@wir-helfen-aus.de
- **GitHub Issues**: [Create an issue](https://github.com/Elmundo93/aushilfapp-callback/issues)
