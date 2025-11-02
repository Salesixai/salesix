import { siteConfig } from '@/lib/home';
import Link from 'next/link';
import { Rocket, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/home/section-header';

export function CTASection() {
  const { ctaSection } = siteConfig;

  const features = [
    {
      icon: <Rocket className="size-6" />,
      title: 'Launch in Minutes',
      description: 'Create your AI agent instantly',
    },
    {
      icon: <TrendingUp className="size-6" />,
      title: '10x Productivity',
      description: 'Automate 90% of repetitive tasks',
    },
    {
      icon: <Sparkles className="size-6" />,
      title: 'Always Learning',
      description: 'AI agents learn from every interaction.',
    },
  ];

  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center w-full relative"
    >
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          {/* Header Section */}
          <SectionHeader>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/5 mb-2">
              <Sparkles className="size-4 text-secondary" />
              <span className="text-sm font-medium">Ready to Automate</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Ready to Transform Your Business with Salesix?
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Join forward-thinking companies deploying autonomous AI agents. Be among the first to experience the future of business automation.
            </p>
          </SectionHeader>

          {/* Content Section */}
          <div className="border-t border-border">
            {/* CTA Button Area */}
            <div className="border-b border-border p-8 md:p-10 flex flex-col items-center gap-4">
              <Link
                href={ctaSection.button.href}
                className="group inline-flex h-12 items-center justify-center gap-2 text-base font-medium tracking-tight rounded-full text-primary-foreground dark:text-black px-8 bg-primary dark:bg-white hover:bg-primary/90 dark:hover:bg-white/90 transition-all duration-200"
              >
                <span>{ctaSection.button.text}</span>
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              
              {/* Subtext */}
              {ctaSection.subtext && (
                <p className="text-sm text-muted-foreground font-medium">{ctaSection.subtext}</p>
              )}
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4 p-8 md:p-10 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-full before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] hover:bg-secondary/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-center size-14 rounded-full border border-border bg-secondary/5">
                    <div className="text-secondary">{feature.icon}</div>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="font-semibold text-lg tracking-tight">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
