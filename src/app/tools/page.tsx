import { Metadata } from 'next';
import { Calculator, TrendingUp, PiggyBank, Home, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Financial Calculators & Tools | Free SIP, EMI, Retirement Planners',
  description: 'Free financial calculators for Indians: SIP calculator, EMI calculator, retirement planner, inflation calculator. Make informed investment and loan decisions with our easy-to-use tools.',
  keywords: ['sip calculator', 'emi calculator', 'retirement calculator', 'financial tools', 'investment calculator'],
};

const tools = [
  {
    title: 'SIP Calculator',
    description: 'Calculate returns on your Systematic Investment Plan (SIP) in mutual funds. See how small monthly investments grow into wealth over time.',
    icon: TrendingUp,
    href: '/tools/sip-calculator',
    color: 'from-blue-500 to-blue-600',
    features: ['Yearly breakdown', 'Power of compounding', 'Goal-based planning'],
  },
  {
    title: 'EMI Calculator',
    description: 'Calculate your monthly EMI for home loans, car loans, or personal loans. Compare different loan scenarios and plan your budget effectively.',
    icon: Home,
    href: '/tools/emi-calculator',
    color: 'from-green-500 to-green-600',
    features: ['Amortization schedule', 'Prepayment benefits', 'Interest breakdown'],
  },
  {
    title: 'Retirement Calculator',
    description: 'Plan your retirement corpus. Calculate how much you need to save monthly to achieve your retirement goals and live financially independent.',
    icon: PiggyBank,
    href: '/tools/retirement-calculator',
    color: 'from-purple-500 to-purple-600',
    features: ['Inflation adjusted', 'Withdrawal planning', 'NPS & EPF integration'],
    comingSoon: true,
  },
  {
    title: 'Inflation Calculator',
    description: 'Understand the impact of inflation on your purchasing power. See how prices change over time and plan investments accordingly.',
    icon: Calculator,
    href: '/tools/inflation-calculator',
    color: 'from-orange-500 to-orange-600',
    features: ['Historical inflation data', 'Future value calculator', 'Real vs nominal returns'],
    comingSoon: true,
  },
];

const educationTools = [
  {
    title: 'Child Education Planner',
    icon: GraduationCap,
    href: '/tools/education-planner',
    comingSoon: true,
  },
  {
    title: 'Income Tax Calculator',
    icon: Calculator,
    href: '/tools/tax-calculator',
    comingSoon: true,
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Financial Tools & Calculators
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Financial Calculators
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Make informed financial decisions with our comprehensive suite of calculators and planning tools. 
            All tools are free, easy to use, and designed specifically for Indian investors.
          </p>
        </div>

        {/* Main Calculators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.title}
                href={tool.comingSoon ? '#' : tool.href}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-all ${
                  tool.comingSoon
                    ? 'opacity-75 cursor-not-allowed'
                    : 'hover:shadow-2xl hover:-translate-y-1'
                }`}
              >
                {tool.comingSoon && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                    Coming Soon
                  </div>
                )}
                
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{tool.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {tool.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Key Features:
                  </p>
                  <ul className="space-y-1">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {!tool.comingSoon && (
                  <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Launch Calculator</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Additional Tools Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-2">More Tools Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We&apos;re building more specialized calculators to help you with every aspect of financial planning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {educationTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.title}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 opacity-60"
                >
                  <Icon className="w-8 h-8 text-gray-400 mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{tool.title}</h4>
                  <p className="text-xs text-gray-500">Coming soon...</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Use Our Calculators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Accurate & Reliable</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              All calculators use industry-standard formulas verified by financial experts. Get precise results you can trust.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Free & Private</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              No registration required. No data storage. Your financial calculations remain completely private and secure.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Mobile Optimized</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Access from any device. Our calculators work seamlessly on desktop, tablet, and mobile phones.
            </p>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4">About Our Financial Calculators</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our free financial calculators are designed to help Indian investors, homebuyers, and borrowers 
                make informed decisions. Whether you&apos;re planning to invest via SIP in mutual funds, buying a home 
                with a loan, or planning your retirement, our tools provide accurate calculations with detailed breakdowns.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Popular Calculators</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>SIP Calculator:</strong> Calculate the future value of your monthly mutual fund investments 
                  considering the power of compounding. Ideal for long-term wealth creation planning.
                </li>
                <li>
                  <strong>EMI Calculator:</strong> Determine your monthly loan repayment amount for home loans, 
                  car loans, or personal loans. Includes amortization schedule and prepayment benefits.
                </li>
                <li>
                  <strong>Retirement Calculator (Coming Soon):</strong> Plan your retirement corpus by calculating 
                  how much you need to save monthly to achieve financial independence.
                </li>
              </ul>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  💡 <strong>Tip:</strong> Bookmark this page to easily access all financial calculators whenever you need them. 
                  All tools are 100% free with no registration required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
