'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Wallet,
  PieChart,
  BarChart3,
  Building2,
  Briefcase,
  Cpu,
  Globe,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Category } from '@/types';

const iconMap = {
  TrendingUp,
  Wallet,
  PieChart,
  BarChart3,
  Building2,
  Briefcase,
  Cpu,
  Globe,
};

const colorMap = {
  emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
  blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
  violet: 'from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700',
  orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
  slate: 'from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700',
  amber: 'from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700',
  cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
  rose: 'from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700',
};

interface CategoryCardProps {
  category: Category;
  articleCount?: number;
  index?: number;
}

export function CategoryCard({ category, articleCount = 0, index = 0 }: CategoryCardProps) {
  const Icon = iconMap[category.icon as keyof typeof iconMap] || TrendingUp;
  const colorClass = colorMap[category.color as keyof typeof colorMap] || colorMap.emerald;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/${category.slug}`}
        className={cn(
          'block p-6 rounded-xl bg-gradient-to-br text-white transition-all duration-300 card-hover group',
          colorClass
        )}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6" />
          </div>
          {articleCount > 0 && (
            <span className="px-2 py-1 text-xs font-medium bg-white/20 rounded-full backdrop-blur-sm">
              {articleCount} articles
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold mb-2">{category.name}</h3>
        <p className="text-sm text-white/80 line-clamp-2">{category.description}</p>
      </Link>
    </motion.div>
  );
}

export function CategoryBadge({
  name,
  slug,
  color = 'emerald',
  size = 'sm',
}: {
  name: string;
  slug: string;
  color?: string;
  size?: 'sm' | 'md';
}) {
  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <Link
      href={`/${slug}`}
      className={cn(
        'inline-flex items-center font-medium rounded-full transition-colors',
        sizeClasses[size],
        `bg-${color}-100 text-${color}-700 hover:bg-${color}-200 dark:bg-${color}-900/30 dark:text-${color}-400`
      )}
    >
      {name}
    </Link>
  );
}
