import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 lg:mb-16',
        centered && 'text-center',
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            'inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4',
            light
              ? 'bg-white/10 text-white'
              : 'bg-slate-100 text-black'
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'heading-2',
          light ? 'text-white' : 'text-black'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-3xl text-lg leading-relaxed',
            centered && 'mx-auto',
            light ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
