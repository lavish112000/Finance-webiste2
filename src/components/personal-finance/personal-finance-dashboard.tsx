'use client';

import { motion } from 'framer-motion';
import { Wallet, Shield, TrendingUp, PiggyBank, Calculator, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const tools = [
  {
    title: 'SIP Calculator',
    description: 'Plan your wealth creation journey',
    icon: TrendingUp,
    href: '/tools/sip-calculator',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
  {
    title: 'EMI Calculator',
    description: 'Calculate loan repayments',
    icon: Calculator,
    href: '/tools/emi-calculator',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    title: 'Budget Planner',
    description: 'Track income and expenses',
    icon: Wallet,
    href: '/personal-finance/budgeting-methods',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    title: 'Emergency Fund',
    description: 'Calculate safety net',
    icon: Shield,
    href: '/personal-finance/emergency-fund-guide',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
];

export function PersonalFinanceDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      {/* Quick Tools Grid */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link 
              href={tool.href}
              className="flex items-start p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all group h-full"
            >
              <div className={`p-3 rounded-lg ${tool.bg} ${tool.color} mr-4`}>
                <tool.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {tool.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Tip Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-linear-to-br from-finance-navy-800 to-finance-navy-900 rounded-xl p-6 text-white border border-finance-navy-700"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/10 rounded-lg">
            <PiggyBank className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="font-semibold text-lg">Pro Tip of the Day</h3>
        </div>
        <p className="text-finance-navy-100 mb-4">
          "The 50/30/20 rule is a great starting point: 50% for needs, 30% for wants, and 20% for savings and debt repayment."
        </p>
        <Link 
          href="/personal-finance/budgeting-methods"
          className="text-sm font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
        >
          Learn more about budgeting <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}
