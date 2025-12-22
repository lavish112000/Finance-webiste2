'use client';

import { motion } from 'framer-motion';
import { GlobalMarkets } from './global-markets';
import { CurrencyExchange } from './currency-exchange';

export function GlobalFinanceDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlobalMarkets />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CurrencyExchange />
        </motion.div>
      </div>
    </div>
  );
}
