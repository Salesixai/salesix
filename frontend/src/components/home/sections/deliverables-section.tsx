'use client';

import { useState, useEffect, useRef, useMemo, memo } from 'react';
import { motion, AnimatePresence, useScroll, useInView } from 'motion/react';

interface DeliverableType {
  type: string;
  description: string;
  preview: React.ReactNode;
}

const deliverables: DeliverableType[] = [
  {
    type: 'Sales Development',
    description: 'Your AI-powered sales assistant that identifies prospects, qualifies leads, and follows up automatically. It analyzes buyer intent, nurtures opportunities, and ensures no lead slips through the cracks—accelerating your sales pipeline without manual effort.',
    preview: (
      <div className="w-full h-full flex items-center justify-center p-4 lg:p-6" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}>
        <img 
          src="/images/deliverable-section/sales-development.svg" 
          alt="Sales Development"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
    ),
  },
  {
    type: 'Marketing Expert',
    description: 'Automate your marketing with intelligence. This agent creates, tests, and optimizes campaigns across email, SMS, and social media—learning what works and improving with every engagement to deliver consistent ROI.',
    preview: (
      <div className="w-full h-full flex items-center justify-center p-4 lg:p-6" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}>
        <img 
          src="/images/deliverable-section/marketing-expert.svg" 
          alt="Marketing Expert"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
    ),
  },
  {
    type: 'Customer Support',
    description: 'Offer instant, human-like support across every channel. The AI voice agent resolves queries, manages escalations, and delivers personalized assistance—reducing response times and boosting customer satisfaction.',
    preview: (
      <div className="w-full h-full flex items-center justify-center p-4 lg:p-6" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}>
        <img 
          src="/images/deliverable-section/customer-support.svg" 
          alt="Customer Support"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
    ),
  },
  {
    type: 'Data Enrichment',
    description: 'Empower your CRM and sales systems with complete, accurate, and intelligent data. The Data Enrichment Agent automatically gathers, validates, and updates company and contact information—giving your teams the insights they need to engage smarter, close faster, and make every interaction count.',
    preview: (
      <div className="w-full h-full flex items-center justify-center p-4 lg:p-6" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}>
        <img 
          src="/images/deliverable-section/data-enrichment.svg" 
          alt="Data Enrichment"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
    ),
  },
  {
    type: 'Lead Generation',
    description: 'Fuel your growth pipeline. The Lead Generation Agent discovers, validates, and prioritizes prospects using AI-driven data intelligence—so your team focuses only on high-value opportunities.',
    preview: (
      <div className="w-full h-full flex items-center justify-center p-4 lg:p-6" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}>
        <img 
          src="/images/deliverable-section/lead-generation.svg" 
          alt="Lead Generation"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
    ),
  },
];

export function DeliverablesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isInView = useInView(containerRef, { margin: "-50%", once: false });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Throttled scroll handler with RAF for better performance
  useEffect(() => {
    let isUpdating = false;
    
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (isUpdating) return; // Skip if already processing
      
      isUpdating = true;
      
      // Use RAF for smooth updates
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      
      rafRef.current = requestAnimationFrame(() => {
        if (latest > 0.1 && latest < 0.9) {
          const adjustedProgress = (latest - 0.1) / 0.8;
          const index = Math.min(
            Math.floor(adjustedProgress * deliverables.length),
            deliverables.length - 1
          );
          
          // Only update if index changed
          if (index !== lastIndexRef.current) {
            lastIndexRef.current = index;
            setActiveIndex(index);
          }
        }
        isUpdating = false;
      });
    });

    return () => {
      unsubscribe();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress]);

  return (
    <section 
      ref={containerRef} 
      id="deliverables"
      className="flex flex-col items-center justify-center w-full relative"
    >
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center gap-6 py-16 md:py-20 lg:py-24 px-6">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
              Build Specialized AI Agents for Every Workflow
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium max-w-3xl text-lg">
            Salesix lets you create autonomous AI agents that automate tasks, execute goals, and deliver real business impact.
            </p>
          </div>

          {/* Sticky Content Area - Locks during scroll */}
          <div className="sticky top-20 md:top-24 lg:top-8 min-h-[calc(100vh-5rem)] md:min-h-screen flex items-center justify-center w-full bg-background border-t border-border py-8 md:py-12 lg:py-16" style={{ willChange: 'transform' }}>
            <div className="relative w-full">
              <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center" style={{ transform: 'translateZ(0)' }}>
                  {/* Left Side - Text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-start justify-center gap-2 pr-0 order-2 lg:order-1"
                  >
                    <motion.h3
                      className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-balance mb-3 md:mb-6"
                      key={`title-${activeIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-foreground block md:inline">AI Agents for </span>
                      <span className="text-primary">{deliverables[activeIndex].type}</span>
                    </motion.h3>
                    
                    <motion.p
                      className="text-muted-foreground text-balance font-medium mb-6 md:mb-8 text-sm md:text-lg leading-relaxed"
                      key={`desc-${activeIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {deliverables[activeIndex].description}
                    </motion.p>

                    <button
                      className="group inline-flex h-10 md:h-12 items-center justify-center gap-2 text-sm md:text-base font-medium tracking-wide rounded-full text-primary-foreground dark:text-black px-6 md:px-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] bg-primary dark:bg-white hover:bg-primary/90 dark:hover:bg-white/90 transition-all duration-200 w-fit mb-6 md:mb-8"
                    >
                      <span>Get Started</span>
                      <span className="inline-flex items-center justify-center size-5 md:size-6 rounded-full bg-white/20 dark:bg-black/10 group-hover:bg-white/30 dark:group-hover:bg-black/20 transition-colors duration-200">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary-foreground dark:text-black md:w-[14px] md:h-[14px]"
                        >
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        </span>
                    </button>

                    {/* Progress Indicator */}
                    <div className="flex space-x-2 md:space-x-3">
                      {deliverables.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`h-2 md:h-3 rounded-full transition-all duration-500 cursor-pointer hover:bg-primary/70 ${
                            index === activeIndex
                              ? 'w-8 md:w-10 bg-primary shadow-lg shadow-primary/25'
                              : 'w-2 md:w-3 bg-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Side - Preview */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center h-[300px] md:h-[500px] lg:h-[600px] order-1 lg:order-2"
                    style={{ transform: 'translateZ(0)', willChange: 'opacity' }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 0.3,
                          ease: 'easeInOut'
                        }}
                        className="w-full h-full"
                        style={{ transform: 'translateZ(0)' }}
                      >
                        {deliverables[activeIndex].preview}
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer sections for scroll trigger - each deliverable gets its own scroll space */}
          <div className="relative" style={{ transform: 'translateZ(0)' }}>
            {deliverables.map((_, index) => (
              <div
                key={index}
                className="h-screen opacity-0 pointer-events-none"
                style={{ contentVisibility: 'auto' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
