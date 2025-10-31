'use client';

import { ModalProviders } from '@/providers/modal-providers';
import { BackgroundAALChecker } from '@/components/auth/background-aal-checker';
import { HeroSection as NewHeroSection } from '@/components/home/sections/landing/hero-section';
import { ThemeToggle } from '@/components/home/theme-toggle';
// import { PricingSection } from '@/components/home/sections/pricing-section';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FlickeringGrid } from '@/components/home/ui/flickering-grid';
import { useMediaQuery } from '@/hooks/use-media-query';
  
export default function LandingPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const tablet = useMediaQuery('(max-width: 1024px)');
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = !mounted
    ? '/salesix-logo-black.png'
    : resolvedTheme === 'dark'
      ? '/salesix-logo-white.png'
      : '/salesix-logo-black.png';

  return (
    <>
      <ModalProviders />
      <BackgroundAALChecker>
        <div className="w-full relative min-h-screen flex flex-col">
          {/* Simple Header - Logo and CTA only */}
          <header
            className={cn(
              'sticky z-50 flex justify-center transition-all duration-300',
              hasScrolled ? 'top-6 mx-4 md:mx-6' : 'top-4 mx-4 md:mx-6',
            )}
          >
            <div
              className={cn(
                'w-full max-w-7xl mx-auto rounded-2xl transition-all duration-300',
                hasScrolled
                  ? 'border border-border backdrop-blur-lg bg-background/75 shadow-sm'
                  : 'shadow-none',
              )}
            >
              <div className="flex h-[56px] items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/get-started" className="flex items-center gap-3">
                  <Image
                    src={logoSrc}
                    alt="Salesix Logo"
                    width={120}
                    height={30}
                    className="h-6 w-auto object-contain"
                    priority
                  />
                </Link>

                {/* Right side - CTA and Theme Toggle */}
                <div className="flex items-center gap-3">
                  <Link
                    href="/auth"
                    className="bg-primary h-9 flex items-center justify-center text-sm font-medium tracking-wide rounded-full text-primary-foreground px-6 hover:bg-primary/90 transition-all duration-200 shadow-sm"
                  >
                    Get Started Free
                  </Link>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 w-full">
            <NewHeroSection />
            {/* <PricingSection showInfo={true} /> */}
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
          </main>
        </div>
      </BackgroundAALChecker>
    </>
  );
}
