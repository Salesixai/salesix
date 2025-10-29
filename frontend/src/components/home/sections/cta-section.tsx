import { siteConfig } from '@/lib/home';
import Link from 'next/link';
import { Rocket, TrendingUp, Sparkles } from 'lucide-react';

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
      className="flex flex-col items-center justify-center w-full py-16 px-6"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-secondary/30 via-background to-accent/20 rounded-2xl p-12 md:p-16 border border-border">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/50">
            <Sparkles className="size-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Ready to Automate Smarter</span>
          </div>

          {/* Heading */}
          <div className="text-center space-y-2 max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center px-2">
              Ready to Transform Your
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-medium tracking-tightest text-secondary">
              Business with Salesix?
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto pt-4">
              Join forward-thinking companies deploying autonomous AI agents. Be among the first to experience the future of business automation.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-center size-12 rounded-full bg-secondary/10">
                  <div className="text-secondary">{feature.icon}</div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href={ctaSection.button.href}
            className="group inline-flex h-12 items-center justify-center gap-2 text-base font-medium tracking-wide rounded-full text-primary-foreground dark:text-black px-8 shadow-lg bg-primary dark:bg-white hover:bg-primary/90 dark:hover:bg-white/90 transition-all duration-200 mt-4"
          >
            <span>{ctaSection.button.text}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Subtext */}
          {ctaSection.subtext && (
            <p className="text-sm text-muted-foreground">{ctaSection.subtext}</p>
          )}
        </div>
      </div>
    </section>
  );
}
