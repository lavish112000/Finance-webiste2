'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

interface SIPResult {
  invested: number;
  returns: number;
  total: number;
  yearlyBreakdown: Array<{
    year: number;
    invested: number;
    value: number;
  }>;
}

export function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [result, setResult] = useState<SIPResult | null>(null);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = timePeriod * 12;
    
    // Future Value of SIP formula: P × ((1 + r)^n - 1) / r) × (1 + r)
    const futureValue = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const totalInvested = monthlyInvestment * months;
    const returns = futureValue - totalInvested;

    // Calculate yearly breakdown
    const yearlyBreakdown = [];
    for (let year = 1; year <= timePeriod; year++) {
      const monthsElapsed = year * 12;
      const valueAtYear = monthlyInvestment * 
        (((Math.pow(1 + monthlyRate, monthsElapsed) - 1) / monthlyRate) * (1 + monthlyRate));
      
      yearlyBreakdown.push({
        year,
        invested: monthlyInvestment * monthsElapsed,
        value: Math.round(valueAtYear),
      });
    }

    setResult({
      invested: totalInvested,
      returns: Math.round(returns),
      total: Math.round(futureValue),
      yearlyBreakdown,
    });
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-blue-600" />
          SIP Calculator Inputs
        </h3>

        <div className="space-y-6">
          {/* Monthly Investment */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Monthly Investment (₹)
            </label>
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}              aria-label="Monthly Investment Amount"              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              aria-label="Monthly Investment Amount (numeric input)"
              className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900"
            />
          </div>

          {/* Expected Return */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Expected Annual Return (%)
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="0.5"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}              aria-label="Expected Return Percentage"              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <input
              type="number"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              step="0.5"
              aria-label="Expected Return Percentage (numeric input)"
              className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Historical equity returns: 12-15% | Debt returns: 7-9%
            </p>
          </div>

          {/* Time Period */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Investment Period (Years)
            </label>
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}              aria-label="Investment Time Period in Years"              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <input
              type="number"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              aria-label="Investment Time Period in Years (numeric input)"
              className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900"
            />
          </div>

          <button
            onClick={calculateSIP}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Calculate SIP Returns
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100">Total Invested</span>
                <DollarSign className="w-5 h-5 text-blue-100" />
              </div>
              <p className="text-3xl font-bold">₹{result.invested.toLocaleString('en-IN')}</p>
            </div>

            <div className="bg-linear-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-100">Expected Returns</span>
                <TrendingUp className="w-5 h-5 text-green-100" />
              </div>
              <p className="text-3xl font-bold">₹{result.returns.toLocaleString('en-IN')}</p>
            </div>

            <div className="bg-linear-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-100">Total Value</span>
                <TrendingUp className="w-5 h-5 text-purple-100" />
              </div>
              <p className="text-3xl font-bold">₹{result.total.toLocaleString('en-IN')}</p>
            </div>
          </div>

          {/* Yearly Breakdown */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Year-by-Year Growth</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4">Year</th>
                    <th className="text-right py-3 px-4">Amount Invested</th>
                    <th className="text-right py-3 px-4">Portfolio Value</th>
                    <th className="text-right py-3 px-4">Gains</th>
                  </tr>
                </thead>
                <tbody>
                  {result.yearlyBreakdown.map((item) => (
                    <tr key={item.year} className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="py-3 px-4 font-medium">{item.year}</td>
                      <td className="text-right py-3 px-4">₹{item.invested.toLocaleString('en-IN')}</td>
                      <td className="text-right py-3 px-4 font-semibold">₹{item.value.toLocaleString('en-IN')}</td>
                      <td className="text-right py-3 px-4 text-green-600 dark:text-green-400">
                        ₹{(item.value - item.invested).toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-linear-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 text-amber-900 dark:text-amber-100">📊 Key Insights</h3>
            <ul className="space-y-2 text-sm text-amber-900 dark:text-amber-100">
              <li>
                ✅ Your investment of <strong>₹{monthlyInvestment.toLocaleString('en-IN')}/month</strong> will grow to{' '}
                <strong>₹{result.total.toLocaleString('en-IN')}</strong> in {timePeriod} years
              </li>
              <li>
                ✅ That&apos;s a <strong>{((result.returns / result.invested) * 100).toFixed(1)}%</strong> absolute return on your investment
              </li>
              <li>
                ✅ Wealth created: <strong>₹{result.returns.toLocaleString('en-IN')}</strong> through the power of compounding
              </li>
              {timePeriod >= 10 && (
                <li>
                  ✅ SIP investments held for 10+ years have NEVER given negative returns historically (since 1995)
                </li>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Educational Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4">💡 What is SIP?</h3>
        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>Systematic Investment Plan (SIP)</strong> is a method of investing a fixed amount regularly 
            (monthly, quarterly) in mutual funds. It&apos;s like a recurring deposit but with market-linked returns.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Benefits of SIP</h4>
              <ul className="space-y-1 text-xs">
                <li>• Rupee Cost Averaging (buy more when prices low)</li>
                <li>• Power of compounding over time</li>
                <li>• Disciplined investing habit</li>
                <li>• Start with as low as ₹500/month</li>
                <li>• No need to time the market</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">📈 Expected Returns</h4>
              <ul className="space-y-1 text-xs">
                <li>• Equity funds: 12-15% (long-term)</li>
                <li>• Hybrid funds: 9-12%</li>
                <li>• Debt funds: 7-9%</li>
                <li>• Index funds: 10-13% (Nifty/Sensex)</li>
                <li>• Returns vary based on market conditions</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
            <p className="text-xs text-amber-900 dark:text-amber-100">
              ⚠️ <strong>Disclaimer:</strong> Past performance doesn&apos;t guarantee future results. 
              Returns shown are indicative based on historical averages. Actual returns may vary. 
              Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
