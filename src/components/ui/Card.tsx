import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'bordered' | 'elevated';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

// Samsung-style cards: large radius, soft grey fill, no hard borders.
const variantStyles = {
  default: 'bg-slate-100',
  dark: 'bg-charcoal-800 text-white',
  bordered: 'bg-white border border-slate-200',
  elevated: 'bg-white shadow-md',
};

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  className,
  variant = 'default',
  hover = true,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl transition-all duration-300',
        variantStyles[variant],
        paddingStyles[padding],
        hover && variant === 'default' && 'hover:shadow-lg',
        hover && variant === 'elevated' && 'hover:shadow-xl',
        hover && variant === 'bordered' && 'hover:border-black',
        className
      )}
    >
      {children}
    </div>
  );
}
