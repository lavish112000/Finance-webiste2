'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const INDICES = [
  { name: 'S&P 500', country: 'USA', value: '5,234.12', change: '+0.45%', color: 'text-green-500' },
  { name: 'FTSE 100', country: 'UK', value: '7,932.50', change: '-0.12%', color: 'text-red-500' },
  { name: 'Nikkei 225', country: 'Japan', value: '39,876.40', change: '+1.20%', color: 'text-green-500' },
  { name: 'DAX', country: 'Germany', value: '18,450.80', change: '+0.15%', color: 'text-green-500' },
  { name: 'Shanghai Comp', country: 'China', value: '3,050.20', change: '-0.85%', color: 'text-red-500' },
];

export function GlobalMarkets() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-blue-500" />
          Global Market Indices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {INDICES.map((index) => (
            <div key={index.name} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
              <div>
                <p className="font-medium">{index.name}</p>
                <p className="text-xs text-muted-foreground">{index.country}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{index.value}</p>
                <p className={`text-xs ${index.color}`}>{index.change}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
