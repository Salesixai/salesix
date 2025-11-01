'use client';

import { FlickeringGrid } from '@/components/home/ui/flickering-grid';
import { useMediaQuery } from '@/hooks/use-media-query';
import { siteConfig } from '@/lib/home';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { KortixLogo } from '@/components/sidebar/kortix-logo';

export function FooterSection() {
  const tablet = useMediaQuery('(max-width: 1024px)');
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mount, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = !mounted
    ? '/salesix-logo-black.png'
    : resolvedTheme === 'dark'
      ? '/salesix-logo-white.png'
      : '/salesix-logo-black.png';

  return (
    <footer id="footer" className="w-full pb-0 px-6">
      <div className="w-full mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-16">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src={logoSrc}
                alt="Salesix Logo"
                width={160}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              {siteConfig.hero.description}
            </p>
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Salesix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="block w-full h-48 md:h-64 relative mt-10 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 ">
          <FlickeringGrid
            text={tablet ? 'Salesix' : 'Salesix AI Agents'}
            fontSize={tablet ? 60 : 90}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="#22c55e"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
}
