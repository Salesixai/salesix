/* eslint-disable @next/next/no-img-element */
'use client';

import { AnimatePresence, motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Sparkles, Target, Users, BarChart3, Lightbulb, Clock } from 'lucide-react';

export function FifthBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [stage, setStage] = useState(0); // 0: input, 1: analyzing, 2: planning

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isInView) {
      // Progress through stages
      const timers = [
        setTimeout(() => setStage(1), 800),   // Start analyzing
        setTimeout(() => setStage(2), 2200),  // Start planning
      ];
      
      return () => timers.forEach(clearTimeout);
    } else {
      setStage(0);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView]);

  const strategySteps = [
    { id: 1, text: 'Identify target audience', icon: Users },
    { id: 2, text: 'Determine optimal channels', icon: BarChart3 },
    { id: 3, text: 'Create personalized approach', icon: Lightbulb },
    { id: 4, text: 'Set engagement timeline', icon: Clock },
  ];

  return (
    <div
      ref={ref}
      className="w-full h-full p-4 flex flex-col items-center justify-center gap-5 relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5 pointer-events-none" />
      
      <div className="max-w-md mx-auto w-full flex flex-col gap-4 relative z-10">
        {/* User Input */}
        <motion.div
          className="flex items-end justify-end gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="max-w-[280px] bg-secondary text-white p-4 rounded-2xl shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <p className="text-sm">
              Generate 100 qualified leads for our SaaS product targeting enterprise companies in the healthcare sector
            </p>
          </motion.div>
          <div className="flex items-center bg-background rounded-full w-fit border border-border flex-shrink-0">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Avatar"
              className="size-8 rounded-full flex-shrink-0"
            />
          </div>
        </motion.div>

        {/* AI Understanding Phase */}
        <AnimatePresence mode="wait">
          {stage >= 1 && (
            <motion.div
              key="understanding"
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center border border-border rounded-full size-10 flex-shrink-0 shadow-lg">
                <img 
                  src="/logo-icon.svg" 
                  alt="Salesix Icon" 
                  className="size-5"
                />
              </div>
              
              <motion.div
                className="bg-background border border-border p-4 rounded-2xl shadow-lg flex-1"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="size-4 text-secondary animate-pulse" />
                  <p className="text-sm font-semibold text-secondary">Understanding Request...</p>
                </div>
                
                <div className="space-y-2">
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="size-1.5 rounded-full bg-green-500" />
                    <p className="text-xs text-muted-foreground">Goal: Lead Generation</p>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="size-1.5 rounded-full bg-green-500" />
                    <p className="text-xs text-muted-foreground">Target: Healthcare Enterprise</p>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="size-1.5 rounded-full bg-green-500" />
                    <p className="text-xs text-muted-foreground">Volume: 100 qualified leads</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Strategy Planning Phase */}
        <AnimatePresence mode="wait">
          {stage >= 2 && (
            <motion.div
              key="planning"
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center border border-border rounded-full size-10 flex-shrink-0 shadow-lg">
                <img 
                  src="/logo-icon.svg" 
                  alt="Salesix Icon" 
                  className="size-5"
                />
              </div>
              
              <motion.div
                className="bg-background border border-border p-4 rounded-2xl shadow-lg flex-1"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="size-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-sm font-semibold text-primary">Planning Strategy...</p>
                </div>
                
                <div className="space-y-2">
                  {strategySteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      className="flex items-center gap-2 p-2 rounded-lg bg-accent/50 border border-border/50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.15 }}
                    >
                      <step.icon className="size-4 text-green-600" />
                      <p className="text-xs font-medium flex-1">{step.text}</p>
                      <motion.div
                        className="size-4 rounded-full border-2 border-green-500 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.15 }}
                      >
                        <motion.div
                          className="size-2 rounded-full bg-green-500"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.15 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className="mt-3 pt-3 border-t border-border/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="text-xs text-center text-muted-foreground font-medium">
                    Strategy ready to execute 🚀
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated particles */}
      {stage >= 1 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute size-1 rounded-full bg-secondary/30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

