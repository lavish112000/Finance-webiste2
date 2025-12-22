'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightLeft } from 'lucide-react';

const RATES = [
  { pair: 'USD/INR', rate: '83.45', change: '+0.05' },
  { pair: 'EUR/USD', rate: '1.08', change: '-0.002' },
  { pair: 'GBP/USD', rate: '1.26', change: '+0.001' },
  { pair: 'USD/JPY', rate: '151.20', change: '+0.15' },
];

export function CurrencyExchange() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowRightLeft className="h-5 w-5 text-purple-500" />
          Forex Rates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {RATES.map((rate) => (
            <div key={rate.pair} className="p-3 bg-muted/50 rounded-lg text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">{rate.pair}</p>
              <p className="text-xl font-bold">{rate.rate}</p>
              <p className={`text-xs ${rate.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {rate.change}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
