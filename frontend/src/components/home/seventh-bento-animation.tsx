/* eslint-disable @next/next/no-img-element */
'use client';

import { AnimatePresence, motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Target, DollarSign, BarChart3, Sparkles } from 'lucide-react';

export function SeventhBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowReport(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShowReport(false);
    }
  }, [isInView]);

  const metrics = [
    {
      id: 1,
      label: 'Leads Generated',
      value: '156',
      change: '+24%',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 2,
      label: 'Conversion Rate',
      value: '68%',
      change: '+12%',
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 3,
      label: 'Revenue Impact',
      value: '$48.2K',
      change: '+31%',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 4,
      label: 'Efficiency Gain',
      value: '89%',
      change: '+18%',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-orange-500/20'
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full h-full p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5 pointer-events-none" />
      
      <div className="max-w-md mx-auto w-full space-y-4 relative z-10">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between p-4 bg-background border border-border rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center border border-border rounded-full size-10 flex-shrink-0 shadow-md">
              <img 
                src="/logo-icon.svg" 
                alt="Salesix Icon" 
                className="size-5"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Campaign Report</h3>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </div>
          </div>
          
          <motion.div
            className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <BarChart3 className="size-3 text-green-600" />
            <span className="text-xs font-medium text-green-600">Complete</span>
          </motion.div>
        </motion.div>

        {/* Metrics Grid */}
        <AnimatePresence mode="wait">
          {showReport && (
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.id}
                  className={`p-4 rounded-xl border ${metric.borderColor} ${metric.bgColor} shadow-sm`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <metric.icon className={`size-5 ${metric.color}`} />
                    <motion.div
                      className="flex items-center gap-1 px-2 py-0.5 bg-green-500/20 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <TrendingUp className="size-3 text-green-600" />
                      <span className="text-[10px] font-semibold text-green-600">
                        {metric.change}
                      </span>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <p className="text-2xl font-bold mb-1">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Performance Bar */}
        <AnimatePresence mode="wait">
          {showReport && (
            <motion.div
              className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-border rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold">Overall Performance</p>
                <motion.p 
                  className="text-xl font-bold text-green-600"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: 'spring' }}
                >
                  A+
                </motion.p>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                  initial={{ width: '0%' }}
                  animate={{ width: '94%' }}
                  transition={{ delay: 1.1, duration: 1, ease: 'easeOut' }}
                />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Campaign exceeded expectations by 94%
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Celebration particles */}
      {showReport && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute size-1.5 rounded-full"
              style={{
                left: `${10 + i * 8}%`,
                top: `${15 + (i % 4) * 20}%`,
                background: i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#3b82f6' : '#a855f7',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2.5,
                delay: 1 + i * 0.1,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

