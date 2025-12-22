'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet, Briefcase, PiggyBank } from 'lucide-react';

const ACCOUNTS = [
  {
    title: 'Savings Account',
    icon: PiggyBank,
    rate: '3% - 4%',
    features: ['Liquid Cash', 'Debit Card', 'UPI Access'],
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    title: 'Salary Account',
    icon: Briefcase,
    rate: '3% - 4%',
    features: ['Zero Balance', 'Free Credit Card', 'Overdraft'],
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    title: 'Fixed Deposit',
    icon: Wallet,
    rate: '6.5% - 7.5%',
    features: ['Guaranteed Returns', 'Tax Saving Options', 'Loan Against FD'],
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
];

export function AccountTypes() {
  return (
    <div className="grid gap-4 md:grid-cols-3 h-full">
      {ACCOUNTS.map((account) => (
        <Card key={account.title} className="flex flex-col justify-between">
          <CardHeader className="pb-2">
            <div className={`w-10 h-10 rounded-lg ${account.bg} flex items-center justify-center mb-3`}>
              <account.icon className={`w-5 h-5 ${account.color}`} />
            </div>
            <CardTitle className="text-lg">{account.title}</CardTitle>
            <CardDescription className="font-semibold text-finance-primary-600">
              {account.rate} Interest
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {account.features.map((feature) => (
                <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${account.color.replace('text-', 'bg-')}`} />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
