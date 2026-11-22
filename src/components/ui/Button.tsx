'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

/*
 * Samsung-style pill buttons.
 * On light sections: solid black / outlined black.
 * Inside any ancestor with the `on-dark` class: inverted to white.
 */
const variants = {
  primary:
    'bg-black text-white hover:bg-neutral-700 [.on-dark_&]:bg-white [.on-dark_&]:text-black [.on-dark_&]:hover:bg-neutral-200',
  secondary:
    'bg-slate-100 text-black hover:bg-slate-200 [.on-dark_&]:bg-white/10 [.on-dark_&]:text-white [.on-dark_&]:border [.on-dark_&]:border-white/30 [.on-dark_&]:hover:bg-white/20',
  outline:
    'border border-black text-black hover:bg-black hover:text-white [.on-dark_&]:border-white [.on-dark_&]:text-white [.on-dark_&]:hover:bg-white [.on-dark_&]:hover:text-black',
  ghost:
    'text-black hover:bg-slate-100 [.on-dark_&]:text-white [.on-dark_&]:hover:bg-white/10',
  dark:
    'bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm',
};

const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-3.5 text-base',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className,
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
