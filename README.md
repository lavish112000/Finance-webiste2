# 🏦 FinanceHub - Modern Finance & Economy Platform

A **world-class finance and economy educational platform** built with Next.js 15. Designed to provide trustworthy, authoritative, and data-backed content for Indian and global audiences, featuring interactive dashboards, real-time market data simulations, and financial calculators.

![FinanceHub Preview](https://placehold.co/1200x630/1e293b/ffffff?text=FinanceHub+Platform)

## ✨ Key Features

### 📊 Interactive Dashboards

We have built specialized dashboards for each major financial sector to visualize complex data:

- **📈 Investing Dashboard**: Real-time stock market simulation, portfolio tracking, and sector performance heatmaps.
- **🏦 Banking Dashboard**: Interactive credit score visualizer, loan comparison tools, and account type breakdowns.
- **💳 Fintech Dashboard**: Cryptocurrency price tracking, digital payment adoption trends, and blockchain visualization.
- **🌍 Global Finance Dashboard**: Live currency exchange rates, global market indices, and economic indicators.
- **📉 Economy Dashboard**: GDP growth tracking, inflation analysis, and fiscal policy timelines.

### 🧮 Financial Tools & Calculators

Empowering users to make better financial decisions:

- **SIP Calculator**: Project mutual fund returns with adjustable monthly investment, duration, and expected return rates.
- **EMI Calculator**: Calculate monthly loan payments with detailed amortization schedules.
- **Financial Glossary**: A comprehensive dictionary of 80+ financial terms with interactive tooltips throughout articles.

### 📚 Content Management

- **MDX-Powered Articles**: Rich content with embedded components, charts, and dynamic data.
- **Smart Categorization**: 8 distinct categories including Personal Finance, Investing, Economy, and more.
- **Reading Experience**: Auto-generated table of contents, reading time estimates, and progress bars.

### 🎨 User Experience

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Dark Mode**: Seamless theme switching with `next-themes`.
- **Accessibility**: Built with WCAG AAA standards in mind using accessible UI primitives.
- **Performance**: Optimized with Next.js App Router and Turbopack for lightning-fast navigation.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Content**: [MDX](https://mdxjs.com/)
- **UI Components**: Custom built on top of Radix UI primitives

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── [category]/      # Dynamic category pages
│   ├── api/             # API routes for market data
│   ├── tools/           # Calculators and utility pages
│   ├── contact/         # Contact page
│   └── ...
├── components/          # React components
│   ├── banking/         # Banking-specific dashboards
│   ├── calculators/     # SIP and EMI calculators
│   ├── economy/         # Economic charts and widgets
│   ├── fintech/         # Crypto and payment visualizations
│   ├── investing/       # Stock market tools
│   └── ui/              # Reusable UI atoms (Cards, Buttons, etc.)
├── content/             # MDX article files organized by category
├── lib/                 # Utilities, constants, and helper functions
└── types/               # TypeScript type definitions
```

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/financehub.git
   cd financehub
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📝 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Runs the built production application.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Built with ❤️ by the FinanceHub Team*
