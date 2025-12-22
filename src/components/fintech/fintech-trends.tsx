'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const TRENDS = [
  {
    title: 'Embedded Finance',
    desc: 'Banking services integrated into non-financial apps (e.g., BNPL in e-commerce).',
    icon: Zap,
    color: 'text-yellow-500',
  },
  {
    title: 'RegTech',
    desc: 'Technology to help companies comply with regulations efficiently.',
    icon: ShieldCheck,
    color: 'text-blue-500',
  },
  {
    title: 'DeFi',
    desc: 'Decentralized Finance removing intermediaries using blockchain.',
    icon: TrendingUp,
    color: 'text-green-500',
  },
];

export function FintechTrends() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Emerging Fintech Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {TRENDS.map((trend) => (
            <div key={trend.title} className="flex gap-4">
              <div className={`mt-1 p-2 rounded-lg bg-muted ${trend.color}`}>
                <trend.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">{trend.title}</h4>
                <p className="text-sm text-muted-foreground">{trend.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
