'use client';

import Image from 'next/image';

interface KortixLogoProps {
  size?: number;
  variant?: 'symbol' | 'logomark';
  className?: string;
}
export function KortixLogo({ size = 24 }: KortixLogoProps) {
  return (
    <Image
        src="/logo-icon.svg"
        alt="Salesix"
        width={size}
        height={size}
        className="flex-shrink-0"
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
      />
    );
  }

  // Default symbol variant behavior (unchanged)
  return (
    <Image
      src="/kortix-symbol.svg"
      alt="Kortix"
      width={size}
      height={size}
      className={cn(`${shouldInvert ? 'invert' : ''} flex-shrink-0`, className)}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    />
  );
}
