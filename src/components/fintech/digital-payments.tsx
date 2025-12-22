'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, CreditCard, QrCode, Wallet } from 'lucide-react';

const PAYMENT_METHODS = [
  {
    name: 'UPI',
    description: 'Instant real-time bank transfers',
    icon: QrCode,
    color: 'text-green-600',
    bg: 'bg-green-100',
    stat: '10B+ Transactions/mo',
  },
  {
    name: 'Digital Wallets',
    description: 'Store money for quick payments',
    icon: Wallet,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    stat: 'Fast & Convenient',
  },
  {
    name: 'Contactless Cards',
    description: 'Tap and pay with NFC',
    icon: CreditCard,
    color: 'text-purple-600',
    bg: 'bg-purple-100',
    stat: 'Secure & Global',
  },
  {
    name: 'Mobile Banking',
    description: 'Full banking on your phone',
    icon: Smartphone,
    color: 'text-orange-600',
    bg: 'bg-orange-100',
    stat: '24/7 Access',
  },
];

export function DigitalPayments() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {PAYMENT_METHODS.map((method) => (
        <Card key={method.name} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-stretch">
              <div className={`w-24 flex items-center justify-center ${method.bg}`}>
                <method.icon className={`w-8 h-8 ${method.color}`} />
              </div>
              <div className="p-4 flex-1">
                <h3 className="font-semibold text-lg mb-1">{method.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-muted rounded-full">
                  {method.stat}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
