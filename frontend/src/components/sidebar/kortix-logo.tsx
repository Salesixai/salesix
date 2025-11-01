'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface KortixLogoProps {
  size?: number;
  variant?: 'symbol' | 'logomark';
  className?: string;
}

export function KortixLogo({ size = 24, variant = 'symbol', className }: KortixLogoProps) {
  // Use the logo-icon.svg (Salesix logo)
  return (
    <Image
      src="/logo-icon.svg"
      alt="Salesix"
      width={size}
      height={size}
      className={cn('flex-shrink-0', className)}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    />
  );
}
