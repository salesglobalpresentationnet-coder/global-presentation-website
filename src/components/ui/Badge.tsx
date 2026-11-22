import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'navy' | 'success' | 'warning' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

const variantStyles = {
  accent: 'bg-accent-50 text-accent-700',
  navy: 'bg-slate-100 text-black',
  success: 'bg-emerald-50 text-emerald-700',
  warning: 'bg-amber-50 text-amber-700',
  neutral: 'bg-slate-100 text-slate-700',
};

const sizeStyles = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
};

export default function Badge({
  children,
  variant = 'accent',
  size = 'md',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-semibold',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
