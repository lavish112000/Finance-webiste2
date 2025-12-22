'use client';

import { motion } from 'framer-motion';
import { CreditScoreVisualizer } from './credit-score-visualizer';
import { LoanComparison } from './loan-comparison';
import { AccountTypes } from './account-types';

export function BankingDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-12">
        {/* Credit Score Visualizer - Takes up 4 columns on desktop */}
        <motion.div 
          className="md:col-span-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CreditScoreVisualizer />
        </motion.div>

        {/* Account Types - Takes up 8 columns on desktop */}
        <motion.div 
          className="md:col-span-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <AccountTypes />
        </motion.div>
      </div>

      {/* Loan Comparison - Full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <LoanComparison />
      </motion.div>
    </div>
  );
}
