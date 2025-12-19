'use client';

import { AlertTriangle, Info, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const typeStyles = {
  info: {
    container: 'bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
    title: 'text-blue-900 dark:text-blue-200',
    content: 'text-blue-800 dark:text-blue-300',
  },
  warning: {
    container: 'bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800',
    icon: 'text-amber-600 dark:text-amber-400',
    title: 'text-amber-900 dark:text-amber-200',
    content: 'text-amber-800 dark:text-amber-300',
  },
  success: {
    container: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800',
    icon: 'text-emerald-600 dark:text-emerald-400',
    title: 'text-emerald-900 dark:text-emerald-200',
    content: 'text-emerald-800 dark:text-emerald-300',
  },
  error: {
    container: 'bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800',
    icon: 'text-red-600 dark:text-red-400',
    title: 'text-red-900 dark:text-red-200',
    content: 'text-red-800 dark:text-red-300',
  },
};

const icons = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertCircle,
};

export function Callout({ type = 'info', title, children, className }: CalloutProps) {
  const styles = typeStyles[type];
  const Icon = icons[type];

  return (
    <div
      className={cn(
        'flex gap-4 p-4 rounded-lg border my-6',
        styles.container,
        className
      )}
    >
      <div className={cn('shrink-0 mt-0.5', styles.icon)}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        {title && (
          <p className={cn('font-semibold mb-1', styles.title)}>{title}</p>
        )}
        <div className={cn('text-sm', styles.content)}>{children}</div>
      </div>
    </div>
  );
}

export function DisclaimerCallout({ className }: { className?: string }) {
  return (
    <Callout type="warning" title="Financial Disclaimer" className={className}>
      <p>
        The information provided in this article is for educational and informational purposes only.
        It should not be considered as financial, investment, tax, or legal advice. Always consult
        with qualified professionals before making any financial decisions.
      </p>
    </Callout>
  );
}

export function KeyTakeaways({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-primary/5 border border-primary/20 rounded-xl p-6 my-8',
        className
      )}
    >
      <h4 className="flex items-center gap-2 font-bold text-lg text-foreground mb-4">
        <CheckCircle className="w-5 h-5 text-primary" />
        Key Takeaways
      </h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
