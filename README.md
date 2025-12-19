# 🏦 Finance & Economy Blogging Platform

A **world-class finance and economy blogging platform** built with the latest web technologies. Trustworthy, authoritative, data-backed content for Indian and global audiences.

## ✨ Features

### 🎯 Content Categories

- **Economy** - GDP, inflation, fiscal policy, monetary policy
- **Personal Finance** - Budgeting, savings, investments, retirement planning
- **Investing** - Stocks, mutual funds, ETFs, portfolio management
- **Banking** - Accounts, loans, credit cards, digital banking
- **Stock Market** - Trading, technical analysis, market trends
- **FinTech** - Digital payments, cryptocurrency, blockchain
- **Tax Planning** - Income tax, deductions, tax-saving investments
- **Global Finance** - International markets, forex, Fed policy

### 🚀 Technical Highlights

- ⚡ Built with **Next.js 15** (App Router, Turbopack)
- 🎨 **Tailwind CSS 4** with custom design system
- 📝 **MDX** content system with advanced features
- 🌙 Dark mode support with next-themes
- 📱 Fully responsive & mobile-first
- ♿ WCAG AAA accessibility standards
- 🔍 SEO-optimized with dynamic sitemap & robots.txt
- 📊 Interactive market ticker with real-time data
- 🎭 Smooth animations with Framer Motion
- 📖 Auto-generated table of contents
- 🔗 Social sharing buttons
- ⚡ Code syntax highlighting
- 📈 Reading time estimation
- 🏦 **NEW:** Comprehensive market snapshot widget
- 📋 **NEW:** Comparison tables for financial data
- 💡 **NEW:** Interactive glossary tooltips
- 📐 **NEW:** Structured data (JSON-LD) for SEO
- 🎯 **NEW:** Enhanced article templates

### 📄 Pages & Utilities

- **Homepage** - Hero, featured articles, market widget, category showcase
- **Category Pages** - Dynamic routing for all 8 categories
- **Article Pages** - Full MDX support with TOC, share buttons, related articles
- **About Page** - Mission, values, coverage areas
- **Newsletter Page** - Subscription form with interests
- **Glossary Page** - 80+ financial terms with definitions
- **Sitemap** - Dynamically generated XML sitemap
- **Robots.txt** - SEO crawler directives

## 🛠️ Tech Stack

### Core

- **Next.js 15** - React framework with App Router
- **TypeScript 5** - Type safety and better DX
- **Tailwind CSS 4** - Utility-first CSS with @theme syntax
- **Turbopack** - Ultra-fast bundler

### Content & Markdown

- **next-mdx-remote** - MDX rendering
- **gray-matter** - Frontmatter parsing
- **remark-gfm** - GitHub Flavored Markdown
- **rehype-slug** - Heading IDs for TOC
- **rehype-autolink-headings** - Auto-linked headings
- **rehype-pretty-code** - Code syntax highlighting
- **reading-time** - Reading time calculation

### UI & Animation

- **framer-motion** - Smooth animations
- **lucide-react** - Beautiful icons
- **next-themes** - Dark mode support

### Fonts

- **Inter** - Body text (Google Fonts)
- **JetBrains Mono** - Code snippets (Google Fonts)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd Finance-webiste2

# Install dependencies
npm install
```

### Development Commands

```bash
# Run development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Finance-webiste2/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles & design system
│   │   ├── [category]/         # Dynamic category pages
│   │   ├── about/              # About page
│   │   ├── newsletter/         # Newsletter subscription
│   │   ├── glossary/           # Financial glossary
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   └── robots.ts           # SEO robots.txt
│   ├── components/             # React components
│   │   ├── layout/             # Header, Footer, MarketTicker
│   │   ├── ui/                 # Reusable UI components
│   │   └── providers/          # Theme provider
│   ├── lib/                    # Utility functions
│   │   ├── utils.ts            # Helper functions
│   │   ├── constants.ts        # Site config, categories, data
│   │   └── content.ts          # MDX content utilities
│   └── types/                  # TypeScript type definitions
├── content/                    # MDX articles
│   ├── economy/
│   ├── personal-finance/
│   ├── investing/
│   ├── banking/
│   ├── stock-market/
│   ├── fintech/
│   ├── tax-planning/
│   └── global-finance/
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 📝 Content Management

### Adding New Articles

1. Create a new `.mdx` file in the appropriate category folder:

```bash
content/[category]/your-article-slug.mdx
```

2. Add frontmatter at the top of the file:

```yaml
---
title: "Your Article Title"
description: "Brief description for SEO"
date: "2025-01-28"
author: "Author Name"
category: "economy"
tags: ["gdp", "india", "growth"]
readTime: "8 min read"
featured: true
---
```

3. Write your content using Markdown and JSX components:

```mdx
## Introduction

Your article content here...

### Key Takeaways

<Callout type="info">
Important information or tips
</Callout>

### Data Tables

| Metric | 2023 | 2024 | Change |
|--------|------|------|--------|
| GDP    | 7.2% | 7.6% | +0.4%  |

### FAQ

<details>
<summary>What is GDP?</summary>
GDP stands for Gross Domestic Product...
</details>
```

### Available Callout Types

- `info` - Blue informational callouts
- `warning` - Yellow warning messages
- `success` - Green success messages
- `error` - Red error/alert messages

### New Advanced Components

#### Comparison Tables

```mdx
<ComparisonTable
  title="Investment Options Comparison"
  columns={[
    { key: 'feature', label: 'Feature', color: 'primary' },
    { key: 'stocks', label: 'Stocks', color: 'success' },
    { key: 'mutualFunds', label: 'Mutual Funds', color: 'info' }
  ]}
  rows={[
    { feature: 'Liquidity', stocks: true, mutualFunds: true },
    { feature: 'Min Investment', stocks: '₹1,000', mutualFunds: '₹500' },
    { feature: 'Risk Level', stocks: 'High', mutualFunds: 'Medium' }
  ]}
/>
```

Or use the preset:
```mdx
<InvestmentComparison />
```

#### Glossary Tooltips

```mdx
Learn about <GlossaryTooltip term="GDP" /> in economics.
```

Pre-defined terms include: GDP, Inflation, Equity, Bond, Dividend, P/E Ratio, Mutual Fund, SIP

#### Market Snapshots

```mdx
<GlobalMarketSnapshot />
<IndianMarketSnapshot />
<CurrencySnapshot />
```

These widgets display real-time market data with trending indicators and can be placed anywhere in your articles or pages.

## 🎨 Design System

### Color Palette

```css
/* Finance-focused colors */
--navy-900: #0A1628      /* Dark navy for headers */
--navy-800: #1B2B44      /* Rich navy backgrounds */
--emerald-500: #10B981   /* Success, positive growth */
--emerald-600: #059669   /* Interactive elements */
--gold-400: #FBBF24      /* Premium accents */
--gold-500: #F59E0B      /* Highlights */
--slate-50: #F8FAFC      /* Light backgrounds */
--slate-700: #334155     /* Body text */
```

### Typography

- **Headings**: Inter (600-800 weight)
- **Body**: Inter (400-500 weight)
- **Code**: JetBrains Mono (monospace)

### Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔍 SEO Configuration

### Sitemap

- Auto-generated at `/sitemap.xml`
- Includes all articles, categories, and static pages
- Updates dynamically based on content

### Metadata

Each page includes:

- Title and description
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs
- Keywords and author information

## 📊 Performance Optimizations

### Image Optimization

- Next.js Image component with AVIF/WebP formats
- Responsive images with multiple device sizes
- Lazy loading by default

### Caching Strategy

- Static assets: 1 year cache
- Images: 1 year cache with immutable
- API routes: No cache (dynamic content)

### Security Headers

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=()

## 🌙 Dark Mode

Toggle between light and dark themes:

- Automatic system preference detection
- Manual toggle in header
- Persistent preference (localStorage)
- Smooth color transitions

## 📦 Featured Articles

Currently includes 9+ comprehensive articles:

### Economy

- Indian Economy 2025 Outlook (2,300 words)
- Understanding Inflation (2,500 words)

### Personal Finance  

- Complete Personal Finance Planning Guide (2,500 words)

### Investing

- Mutual Funds Explained (2,400 words)
- Stock Market Basics for Beginners (2,400 words)

### Banking

- Complete Credit Score Guide (2,300 words)

### Stock Market

- Technical Analysis Basics (2,500 words)

### FinTech

- Cryptocurrency Explained (2,400 words)

### Global Finance

- US Federal Reserve Explained (2,500 words)

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

Create `.env.local` for local development:

```bash
# Optional: Add your own API keys
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Build Output

- Uses standalone output mode for optimal performance
- Static assets optimized and compressed
- Server components for faster page loads

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js 15](https://nextjs.org/)
- Styled with [Tailwind CSS 4](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📧 Contact

For questions or feedback, reach out at contact@financeinsights.in

---

**Built with ❤️ for financial literacy and empowerment**
