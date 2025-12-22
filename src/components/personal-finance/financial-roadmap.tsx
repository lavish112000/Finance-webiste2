'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Build an Emergency Fund',
    description: 'Save 6-12 months of living expenses in a liquid fund.',
    status: 'essential',
  },
  {
    id: 2,
    title: 'Get Insured',
    description: 'Secure Health Insurance and Term Life Insurance.',
    status: 'essential',
  },
  {
    id: 3,
    title: 'Clear High-Interest Debt',
    description: 'Pay off credit cards and personal loans first.',
    status: 'important',
  },
  {
    id: 4,
    title: 'Start Investing',
    description: 'Begin SIPs in index funds or mutual funds for long-term goals.',
    status: 'growth',
  },
  {
    id: 5,
    title: 'Tax Planning',
    description: 'Maximize deductions under 80C, 80D, and other sections.',
    status: 'optimization',
  },
  {
    id: 6,
    title: 'Retirement Planning',
    description: 'Invest in NPS, EPF, or PPF for a secure retirement.',
    status: 'future',
  },
];

export function FinancialRoadmap() {
  return (
    <div className="py-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-2">Your Financial Roadmap</h2>
        <p className="text-muted-foreground">A step-by-step guide to financial freedom</p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-px" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center md:justify-between ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Icon/Dot */}
              <div className="absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                <span className="text-xs font-bold text-primary">{step.id}</span>
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-[45%]">
                <div className="bg-card border border-border p-5 rounded-xl hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
