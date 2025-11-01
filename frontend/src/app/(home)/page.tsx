'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { HeroSection } from '@/components/home/sections/hero-section';
import { ModalProviders } from '@/providers/modal-providers';
import { BackgroundAALChecker } from '@/components/auth/background-aal-checker';
import { CompanyShowcase } from '@/components/home/sections/company-showcase';
import { CapabilitiesSection } from '@/components/home/sections/capabilities-section';
import { isLocalMode, isStagingMode } from '@/lib/config';
import { HeroSection as NewHeroSection } from '@/components/home/sections/new/hero-section';
import { AIWorkerSection } from '@/components/home/sections/new/ai-workers';
import { SlidesSection } from '@/components/home/sections/new/slides-section';
import { PersonalizationSection } from '@/components/home/sections/new/personalization-section';
import { WordmarkFooter } from '@/components/home/sections/new/wordmark-footer';
import { FAQSection } from '@/components/home/sections/faq-section';

// Loading placeholder component
const SectionLoader = ({ height = 'h-96' }: { height?: string }) => (
  <div className={`${height} w-full animate-pulse bg-muted/20`} />
);

// Lazy load below-the-fold sections for better initial load performance
const FeatureSection = dynamic(() => import('@/components/home/sections/feature-section').then(mod => ({ default: mod.FeatureSection })), {
  ssr: false,
});

const BentoSection = dynamic(() => import('@/components/home/sections/bento-section').then(mod => ({ default: mod.BentoSection })), {
  ssr: false,
});

const DeliverablesSection = dynamic(() => import('@/components/home/sections/deliverables-section').then(mod => ({ default: mod.DeliverablesSection })), {
  ssr: false,
});

const AgentShowcaseSection = dynamic(() => import('@/components/home/sections/agent-showcase-section').then(mod => ({ default: mod.AgentShowcaseSection })), {
  ssr: false,
});

const OpenSourceSection = dynamic(() => import('@/components/home/sections/open-source-section').then(mod => ({ default: mod.OpenSourceSection })), {
  ssr: false,
});

const PricingSection = dynamic(() => import('@/components/home/sections/pricing-section').then(mod => ({ default: mod.PricingSection })), {
  ssr: false,
});

const CTASection = dynamic(() => import('@/components/home/sections/cta-section').then(mod => ({ default: mod.CTASection })), {
  ssr: false,
});

const FooterSection = dynamic(() => import('@/components/home/sections/footer-section').then(mod => ({ default: mod.FooterSection })), {
  ssr: false,
});

export default function Home() {

  return (
    <>
      <ModalProviders />
      <BackgroundAALChecker>
        <main className="flex flex-col items-center justify-center min-h-screen w-full">
          <div className="w-full divide-y divide-border">
            {/* Above the fold - Load immediately */}
            <HeroSection />
            {/* <CompanyShowcase /> */}
            <CapabilitiesSection />
            
            <Suspense fallback={<SectionLoader />}>
              <DeliverablesSection />
            </Suspense>
            
            {/* Below the fold - Lazy loaded with Suspense */}
            <Suspense fallback={<SectionLoader />}>
              <FeatureSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <BentoSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <AgentShowcaseSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <OpenSourceSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <PricingSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <CTASection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <FooterSection />
            </Suspense>
          </div>
        </main>
      </BackgroundAALChecker>
    </>
  );
}
