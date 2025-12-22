'use client';

import { Check, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LOAN_TYPES = [
  {
    name: 'Personal Loan',
    interestRate: '10.5% - 24%',
    tenure: '1 - 5 Years',
    processingFee: '1% - 3%',
    collateral: false,
    bestFor: 'Emergencies, Travel, Wedding',
  },
  {
    name: 'Home Loan',
    interestRate: '8.5% - 10%',
    tenure: '15 - 30 Years',
    processingFee: '0.5% - 1%',
    collateral: true,
    bestFor: 'Buying/Constructing House',
  },
  {
    name: 'Car Loan',
    interestRate: '8.75% - 12%',
    tenure: '3 - 7 Years',
    processingFee: '0.5% - 2%',
    collateral: true,
    bestFor: 'Purchasing Vehicle',
  },
  {
    name: 'Education Loan',
    interestRate: '9% - 14%',
    tenure: '5 - 15 Years',
    processingFee: 'Nil - 1%',
    collateral: 'Depends on amount',
    bestFor: 'Higher Studies',
  },
];

export function LoanComparison() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Loan Comparison</CardTitle>
        <CardDescription>
          Compare interest rates and features of different loan types
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
              <tr>
                <th className="px-4 py-3 rounded-tl-lg">Feature</th>
                {LOAN_TYPES.map((loan) => (
                  <th key={loan.name} className="px-4 py-3 font-semibold text-finance-navy-900">
                    {loan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-medium text-muted-foreground">Interest Rate</td>
                {LOAN_TYPES.map((loan) => (
                  <td key={loan.name} className="px-4 py-3 font-medium text-finance-primary-600">
                    {loan.interestRate}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-muted-foreground">Tenure</td>
                {LOAN_TYPES.map((loan) => (
                  <td key={loan.name} className="px-4 py-3">
                    {loan.tenure}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-muted-foreground">Processing Fee</td>
                {LOAN_TYPES.map((loan) => (
                  <td key={loan.name} className="px-4 py-3">
                    {loan.processingFee}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-muted-foreground">Collateral</td>
                {LOAN_TYPES.map((loan) => (
                  <td key={loan.name} className="px-4 py-3">
                    {typeof loan.collateral === 'boolean' ? (
                      loan.collateral ? (
                        <div className="flex items-center gap-1 text-amber-600">
                          <Check className="w-4 h-4" /> Required
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-green-600">
                          <X className="w-4 h-4" /> Not Required
                        </div>
                      )
                    ) : (
                      <span className="text-muted-foreground">{loan.collateral}</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-muted-foreground rounded-bl-lg">Best For</td>
                {LOAN_TYPES.map((loan) => (
                  <td key={loan.name} className="px-4 py-3 text-xs text-muted-foreground">
                    {loan.bestFor}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
