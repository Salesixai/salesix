'use client';

import Image from 'next/image';

interface KortixLogoProps {
  size?: number;
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
