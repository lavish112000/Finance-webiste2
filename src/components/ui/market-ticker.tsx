'use client';

import { MARKET_INDICES, CURRENCY_RATES } from '@/lib/constants';
import { formatPercentage } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function MarketTicker() {
  const allData = [
    ...MARKET_INDICES.map((item) => ({
      name: item.name,
      value: item.value.toLocaleString('en-US', { minimumFractionDigits: 2 }),
      change: item.change,
      type: 'index' as const,
    })),
    ...CURRENCY_RATES.map((item) => ({
      name: item.pair,
      value: item.value.toFixed(item.value < 10 ? 3 : 2),
      change: item.change,
      type: 'currency' as const,
    })),
  ];

  // Duplicate for seamless loop
  const tickerData = [...allData, ...allData];

  return (
    <div className="bg-finance-navy-900 dark:bg-finance-navy-950 text-white py-2 overflow-hidden no-print">
      <div className="animate-ticker flex whitespace-nowrap">
        {tickerData.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-2 mx-6 text-sm"
          >
            <span className="font-medium text-gray-300">{item.name}</span>
            <span className="font-semibold">{item.value}</span>
            <span
              className={`flex items-center gap-0.5 text-xs font-medium ${
                item.change >= 0 ? 'text-finance-emerald-400' : 'text-finance-red-400'
              }`}
            >
              {item.change >= 0 ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {formatPercentage(item.change)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
