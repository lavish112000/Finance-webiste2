'use client';

import { motion } from 'framer-motion';

const events = [
  {
    year: '2025',
    title: 'Projected $5 Trillion Economy',
    description: 'India aims to reach the $5 trillion GDP milestone, driven by manufacturing and services.',
  },
  {
    year: '2024',
    title: 'India Inclusion in Bond Indices',
    description: 'JP Morgan includes India in its Government Bond Index-Emerging Markets (GBI-EM).',
  },
  {
    year: '2023',
    title: 'G20 Presidency Success',
    description: 'India showcased global leadership and economic resilience during its G20 presidency.',
  },
  {
    year: '2022',
    title: 'Digital Rupee (e₹) Launch',
    description: 'RBI launched the pilot for Central Bank Digital Currency (CBDC) for wholesale and retail.',
  },
  {
    year: '2017',
    title: 'GST Implementation',
    description: 'The "One Nation, One Tax" reform unified India\'s indirect taxation system.',
  },
  {
    year: '2016',
    title: 'UPI Revolution Begins',
    description: 'Launch of Unified Payments Interface (UPI) transformed the digital payment landscape.',
  },
];

export function EconomicTimeline() {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">Key Economic Milestones</h2>
      <div className="relative border-l-2 border-muted ml-3 space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8"
          >
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background" />
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
              <span className="text-xl font-bold text-primary">{event.year}</span>
              <h3 className="text-lg font-semibold">{event.title}</h3>
            </div>
            <p className="text-muted-foreground mt-1">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
