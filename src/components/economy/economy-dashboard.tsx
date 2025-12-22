'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, DollarSign, Percent } from 'lucide-react';

const indicators = [
  {
    id: 'gdp',
    label: 'India GDP Growth',
    value: '7.2%',
    trend: 'up',
    change: '+0.4%',
    description: 'FY25 Projection (RBI)',
    icon: Activity,
    color: 'text-emerald-500',
  },
  {
    id: 'inflation',
    label: 'CPI Inflation',
    value: '5.4%',
    trend: 'down',
    change: '-0.2%',
    description: 'Retail Inflation (Nov)',
    icon: Percent,
    color: 'text-amber-500',
  },
  {
    id: 'repo',
    label: 'Repo Rate',
    value: '6.50%',
    trend: 'neutral',
    change: '0.0%',
    description: 'RBI Policy Rate',
    icon: TrendingUp,
    color: 'text-blue-500',
  },
  {
    id: 'forex',
    label: 'Forex Reserves',
    value: '$604B',
    trend: 'up',
    change: '+$2.1B',
    description: 'All-time high levels',
    icon: DollarSign,
    color: 'text-violet-500',
  },
];

export function EconomyDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Economic Indicators</h2>
        <span className="text-sm text-muted-foreground">Live Data • Updated Dec 2024</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {indicators.map((indicator, index) => (
          <motion.div
            key={indicator.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div className={`p-2 rounded-lg bg-muted ${indicator.color}`}>
                <indicator.icon className="w-5 h-5" />
              </div>
              {indicator.trend === 'up' && <TrendingUp className="w-4 h-4 text-emerald-500" />}
              {indicator.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
              {indicator.trend === 'neutral' && <Activity className="w-4 h-4 text-muted-foreground" />}
            </div>
            
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-muted-foreground">{indicator.label}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-foreground">{indicator.value}</span>
                <span className={`text-xs font-medium ${
                  indicator.change.startsWith('+') ? 'text-emerald-500' : 
                  indicator.change.startsWith('-') ? 'text-red-500' : 'text-muted-foreground'
                }`}>
                  {indicator.change}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{indicator.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
