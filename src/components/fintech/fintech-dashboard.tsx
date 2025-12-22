'use client';

import { motion } from 'framer-motion';
import { CryptoDashboard } from './crypto-dashboard';
import { DigitalPayments } from './digital-payments';
import { FintechTrends } from './fintech-trends';

export function FintechDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-12">
        {/* Crypto Dashboard - 4 cols */}
        <motion.div 
          className="md:col-span-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CryptoDashboard />
        </motion.div>

        {/* Digital Payments - 8 cols */}
        <motion.div 
          className="md:col-span-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="h-full flex flex-col gap-6">
            <DigitalPayments />
            <FintechTrends />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
