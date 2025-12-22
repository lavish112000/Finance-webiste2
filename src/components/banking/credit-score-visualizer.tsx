'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SCORE_RANGES = [
  { min: 300, max: 549, label: 'Poor', color: 'text-red-500', bg: 'bg-red-500' },
  { min: 550, max: 649, label: 'Average', color: 'text-orange-500', bg: 'bg-orange-500' },
  { min: 650, max: 749, label: 'Good', color: 'text-yellow-500', bg: 'bg-yellow-500' },
  { min: 750, max: 799, label: 'Excellent', color: 'text-lime-500', bg: 'bg-lime-500' },
  { min: 800, max: 900, label: 'Exceptional', color: 'text-green-500', bg: 'bg-green-500' },
];

export function CreditScoreVisualizer() {
  const [score, setScore] = useState(750);

  const getScoreCategory = (s: number) => {
    return SCORE_RANGES.find(r => s >= r.min && s <= r.max) || SCORE_RANGES[0];
  };

  const category = getScoreCategory(score);
  const percentage = ((score - 300) / (900 - 300)) * 100;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Credit Score Simulator
          <Info className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
        <CardDescription>
          Visualize how different scores impact your creditworthiness
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-8">
          <div className="relative w-64 h-32 overflow-hidden mb-8">
            {/* Gauge Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-t-full" />
            
            {/* Gauge Fill */}
            <motion.div 
              className={`absolute top-0 left-0 w-full h-full ${category.bg} origin-bottom rounded-t-full`}
              initial={{ rotate: -180 }}
              animate={{ rotate: -180 + (percentage * 1.8) }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            />
            
            {/* Inner Circle to make it an arc */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-white rounded-t-full flex items-end justify-center pb-2">
              <div className="text-center">
                <span className={`text-4xl font-bold ${category.color}`}>
                  {score}
                </span>
                <p className="text-sm text-muted-foreground font-medium">
                  {category.label}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Score Range</span>
                <span className="font-medium">300 - 900</span>
              </div>
              <label htmlFor="score-slider" className="sr-only">Credit Score Slider</label>
              <input
                id="score-slider"
                type="range"
                min="300"
                max="900"
                value={score}
                onChange={(e) => setScore(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-finance-primary-500"
              />
            </div>

            <div className="grid grid-cols-5 gap-1 text-[10px] text-center text-muted-foreground">
              {SCORE_RANGES.map((range) => (
                <div key={range.label} className="flex flex-col items-center">
                  <div className={`w-full h-1 mb-1 ${range.bg} opacity-50`} />
                  <span>{range.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
