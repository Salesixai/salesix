'use client';

import { useState, useEffect, useRef, useMemo, memo } from 'react';
import { motion, AnimatePresence, useScroll, useInView } from 'framer-motion';

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
          src="/images/deliverable-section/sales-development-agent.svg" 
          alt="Sales Development Agent"
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
      <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-4 lg:p-6 border border-green-200/50 dark:border-green-800/50 shadow-xl" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}>
        <div className="h-full">
          <div className="grid grid-cols-6 gap-1 h-full">
            <div className="space-y-1">
              <div className="h-6 bg-green-200 dark:bg-green-800 rounded text-xs flex items-center justify-center font-semibold">Name</div>
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-4 bg-green-100 dark:bg-green-900/50 rounded text-xs flex items-center px-1">
                  Candidate {i + 1}
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="h-6 bg-green-200 dark:bg-green-800 rounded text-xs flex items-center justify-center font-semibold">Score</div>
              {[9.2, 8.8, 8.5, 8.3, 7.9, 7.7, 7.5, 7.2, 6.9, 6.5, 6.2, 6.0].map((score, i) => (
                <div key={i} className="h-4 bg-green-100 dark:bg-green-900/50 rounded text-xs flex items-center justify-center">
                  {score}
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="h-6 bg-green-200 dark:bg-green-800 rounded text-xs flex items-center justify-center font-semibold">Experience</div>
              {['5-7y', '4-6y', '6-8y', '3-5y', '4-7y', '5-6y', '3-4y', '2-4y', '4-5y', '3-6y', '2-3y', '1-3y'].map((exp, i) => (
                <div key={i} className="h-4 bg-green-100 dark:bg-green-900/50 rounded text-xs flex items-center justify-center">
                  {exp}
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="h-6 bg-green-200 dark:bg-green-800 rounded text-xs flex items-center justify-center font-semibold">Location</div>
              {['SF', 'NYC', 'LA', 'SF', 'NYC', 'Austin', 'SF', 'Seattle', 'NYC', 'Boston', 'SF', 'LA'].map((loc, i) => (
                <div key={i} className="h-4 bg-green-100 dark:bg-green-900/50 rounded text-xs flex items-center justify-center">
                  {loc}
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="h-6 bg-green-200 dark:bg-green-800 rounded text-xs flex items-center justify-center font-semibold">Status</div>
              {['Contacted', 'Interview', 'Pending', 'Contacted', 'New', 'Interview', 'Contacted', 'New', 'Pending', 'New', 'Contacted', 'New'].map((status, i) => (
                <div key={i} className={`h-4 rounded text-xs flex items-center justify-center ${
                  status === 'Interview' ? 'bg-yellow-200 dark:bg-yellow-800' :
                  status === 'Contacted' ? 'bg-blue-200 dark:bg-blue-800' :
                  status === 'Pending' ? 'bg-orange-200 dark:bg-orange-800' :
                  'bg-gray-200 dark:bg-gray-800'
                }`}>
                  {status}
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="h-6 bg-green-200 dark:bg-green-800 rounded text-xs flex items-center justify-center font-semibold">Notes</div>
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-4 bg-green-100 dark:bg-green-900/50 rounded text-xs flex items-center px-1">
                  Notes...
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: 'Customer Support',
    description: 'Offer instant, human-like support across every channel. The AI voice agent resolves queries, manages escalations, and delivers personalized assistance—reducing response times and boosting customer satisfaction.',
    preview: (
      <div className="w-full h-full bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 rounded-2xl p-4 lg:p-6 border border-purple-200/50 dark:border-purple-800/50 shadow-xl flex items-center justify-center" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}>
        <div className="relative w-full max-w-sm h-80 bg-card rounded-xl shadow-lg border border-border p-4">
          <div className="absolute top-4 left-4 w-16 h-4 bg-purple-200 dark:bg-purple-800 rounded"></div>
          <div className="absolute top-10 left-4 w-24 h-2 bg-purple-100 dark:bg-purple-900 rounded"></div>
          
          <div className="absolute top-20 left-4 right-4 h-32 bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/50 dark:to-violet-900/50 rounded-lg border border-purple-200 dark:border-purple-800 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-300 dark:bg-purple-700 rounded-full mx-auto mb-2"></div>
              <div className="w-20 h-2 bg-purple-200 dark:bg-purple-800 rounded mx-auto"></div>
            </div>
          </div>
          
          <div className="absolute bottom-16 left-4 right-4 space-y-2">
            <div className="h-2 bg-purple-100 dark:bg-purple-900 rounded w-full"></div>
            <div className="h-2 bg-purple-100 dark:bg-purple-900 rounded w-3/4"></div>
            <div className="h-2 bg-purple-100 dark:bg-purple-900 rounded w-5/6"></div>
          </div>
          
          <div className="absolute bottom-4 right-4 w-16 h-8 bg-purple-500 dark:bg-purple-600 rounded text-white text-xs flex items-center justify-center">
            CTA
          </div>
        </div>
      </div>
    ),
  },
  {
    type: 'Data Enrichment',
    description: 'Empower your CRM and sales systems with complete, accurate, and intelligent data. The Data Enrichment Agent automatically gathers, validates, and updates company and contact information—giving your teams the insights they need to engage smarter, close faster, and make every interaction count.',
    preview: (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-4 border border-blue-200/50 dark:border-blue-800/50 shadow-xl" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}>
        <div className="space-y-4 h-full">
          <div className="h-6 bg-blue-200 dark:bg-blue-800 rounded w-2/3"></div>
          
          <div className="space-y-2">
            <div className="h-3 bg-blue-100 dark:bg-blue-900 rounded w-full"></div>
            <div className="h-3 bg-blue-100 dark:bg-blue-900 rounded w-11/12"></div>
            <div className="h-3 bg-blue-100 dark:bg-blue-900 rounded w-10/12"></div>
          </div>
          
          <div className="pt-2">
            <div className="h-4 bg-blue-200 dark:bg-blue-800 rounded w-1/2 mb-2"></div>
            <div className="space-y-2">
              <div className="h-3 bg-blue-100 dark:bg-blue-900 rounded w-full"></div>
              <div className="h-3 bg-blue-100 dark:bg-blue-900 rounded w-9/12"></div>
              <div className="h-3 bg-blue-100 dark:bg-blue-900 rounded w-10/12"></div>
              <div className="h-3 bg-blue-100 dark:bg-blue-900 rounded w-8/12"></div>
            </div>
          </div>
          
          <div className="pt-2">
            <div className="h-4 bg-blue-200 dark:bg-blue-800 rounded w-2/5 mb-2"></div>
            <div className="space-y-2">
              <div className="h-3 bg-blue-100 dark:bg-blue-900 rounded w-full"></div>
              <div className="h-3 bg-blue-100 dark:bg-blue-900 rounded w-11/12"></div>
              <div className="h-3 bg-blue-100 dark:bg-blue-900 rounded w-7/12"></div>
            </div>
          </div>
          
          <div className="bg-blue-100 dark:bg-blue-900/50 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
            <div className="h-3 bg-blue-200 dark:bg-blue-800 rounded w-1/3 mb-2"></div>
            <div className="space-y-1">
              <div className="h-2 bg-blue-150 dark:bg-blue-850 rounded w-full"></div>
              <div className="h-2 bg-blue-150 dark:bg-blue-850 rounded w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: 'Lead Generation',
    description: 'Fuel your growth pipeline. The Lead Generation Agent discovers, validates, and prioritizes prospects using AI-driven data intelligence—so your team focuses only on high-value opportunities.',
    preview: (
      <div className="w-full h-full bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-2xl p-4 lg:p-6 border border-orange-200/50 dark:border-orange-800/50 shadow-xl" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}>
        <div className="h-full flex flex-col">
          <div className="mb-4">
            <div className="h-4 bg-orange-200 dark:bg-orange-800 rounded w-1/2 mb-2"></div>
            <div className="h-2 bg-orange-100 dark:bg-orange-900 rounded w-3/4"></div>
          </div>
          
          <div className="flex-1 flex items-end justify-center space-x-2">
            {[
              { height: '60%', label: 'Q1' },
              { height: '80%', label: 'Q2' },
              { height: '100%', label: 'Q3' },
              { height: '75%', label: 'Q4' },
              { height: '90%', label: 'Q5' }
            ].map((bar, i) => (
              <div key={i} className="flex flex-col items-center">
                <div 
                  className="w-8 bg-gradient-to-t from-orange-400 to-orange-300 dark:from-orange-600 dark:to-orange-500 rounded-t"
                  style={{ height: bar.height }}
                ></div>
                <div className="text-xs mt-1 text-orange-600 dark:text-orange-400">{bar.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="bg-orange-100 dark:bg-orange-900/50 rounded p-2 text-center">
              <div className="text-lg font-bold text-orange-600 dark:text-orange-400">85%</div>
              <div className="text-xs text-orange-500 dark:text-orange-500">Growth</div>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/50 rounded p-2 text-center">
              <div className="text-lg font-bold text-orange-600 dark:text-orange-400">$2.4M</div>
              <div className="text-xs text-orange-500 dark:text-orange-500">Revenue</div>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/50 rounded p-2 text-center">
              <div className="text-lg font-bold text-orange-600 dark:text-orange-400">156</div>
              <div className="text-xs text-orange-500 dark:text-orange-500">Clients</div>
            </div>
          </div>
        </div>
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
          <div className="flex flex-col items-center justify-center gap-6 py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
              Build Specialized AI Agents for Every Workflow
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium max-w-3xl text-lg">
            From automating daily tasks to executing high-impact business operations, Salesix lets you create autonomous AI agents that adapt to your objectives and deliver measurable outcomes.
            </p>
          </div>

          {/* Sticky Content Area - Locks during scroll */}
          <div className="sticky top-0 h-screen flex items-center justify-center w-full bg-background border-t border-border" style={{ willChange: 'transform' }}>
            <div className="relative w-full">
              <div className="max-w-6xl mx-auto px-12">
                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center" style={{ transform: 'translateZ(0)' }}>
                  {/* Left Side - Text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-start justify-center gap-2 pr-0"
                  >
                    <motion.h3
                      className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-balance mb-6"
                      key={`title-${activeIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-foreground">AI Agents for </span>
                      <span className="text-primary">{deliverables[activeIndex].type}</span>
                    </motion.h3>
                    
                    <motion.p
                      className="text-muted-foreground text-balance font-medium mb-8 text-lg leading-relaxed"
                      key={`desc-${activeIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {deliverables[activeIndex].description}
                    </motion.p>

                    <button
                      className="group inline-flex h-12 items-center justify-center gap-2 text-base font-medium tracking-wide rounded-full text-primary-foreground dark:text-black px-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] bg-primary dark:bg-white hover:bg-primary/90 dark:hover:bg-white/90 transition-all duration-200 w-fit mb-8"
                    >
                      <span>Get Started</span>
                      <span className="inline-flex items-center justify-center size-6 rounded-full bg-white/20 dark:bg-black/10 group-hover:bg-white/30 dark:group-hover:bg-black/20 transition-colors duration-200">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary-foreground dark:text-black"
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
                    <div className="flex space-x-3">
                      {deliverables.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`h-3 rounded-full transition-all duration-500 cursor-pointer hover:bg-primary/70 ${
                            index === activeIndex
                              ? 'w-10 bg-primary shadow-lg shadow-primary/25'
                              : 'w-3 bg-muted-foreground/30'
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
                    className="flex flex-col items-center justify-center h-[600px]"
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
