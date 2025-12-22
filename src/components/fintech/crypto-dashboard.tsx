'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Bitcoin } from 'lucide-react';

const CRYPTO_DATA = [
  { name: 'Bitcoin', symbol: 'BTC', price: '$98,450', change: '+2.4%', isPositive: true },
  { name: 'Ethereum', symbol: 'ETH', price: '$3,890', change: '-1.2%', isPositive: false },
  { name: 'Solana', symbol: 'SOL', price: '$145', change: '+5.6%', isPositive: true },
  { name: 'Cardano', symbol: 'ADA', price: '$0.45', change: '-0.8%', isPositive: false },
];

export function CryptoDashboard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bitcoin className="h-5 w-5 text-orange-500" />
          Crypto Market Pulse
        </CardTitle>
        <CardDescription>Live snapshot of top cryptocurrencies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {CRYPTO_DATA.map((coin) => (
            <div key={coin.symbol} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center font-bold text-xs border">
                  {coin.symbol[0]}
                </div>
                <div>
                  <p className="font-medium">{coin.name}</p>
                  <p className="text-xs text-muted-foreground">{coin.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">{coin.price}</p>
                <p className={`text-xs flex items-center justify-end gap-1 ${coin.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {coin.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
