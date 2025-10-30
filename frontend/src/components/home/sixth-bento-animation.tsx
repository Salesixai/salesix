/* eslint-disable @next/next/no-img-element */
'use client';

import { AnimatePresence, motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Clock, Zap, Mail, Phone, Briefcase, Calendar } from 'lucide-react';

export function SixthBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [activeTaskIndex, setActiveTaskIndex] = useState(-1);

  const tasks = [
    { 
      id: 1, 
      title: 'Contacting leads via email',
      icon: Mail,
      progress: 100,
      status: 'completed'
    },
    { 
      id: 2, 
      title: 'Scheduling follow-up calls',
      icon: Phone,
      progress: 100,
      status: 'completed'
    },
    { 
      id: 3, 
      title: 'Updating CRM records',
      icon: Briefcase,
      progress: 75,
      status: 'in-progress'
    },
    { 
      id: 4, 
      title: 'Sending meeting invites',
      icon: Calendar,
      progress: 0,
      status: 'pending'
    },
  ];

  useEffect(() => {
    if (!isInView) {
      setActiveTaskIndex(-1);
      return;
    }

    // Sequence through tasks
    const timers = [
      setTimeout(() => setActiveTaskIndex(0), 500),
      setTimeout(() => setActiveTaskIndex(1), 1500),
      setTimeout(() => setActiveTaskIndex(2), 2500),
      setTimeout(() => setActiveTaskIndex(3), 3500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full h-full p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5 pointer-events-none" />
      
      <div className="max-w-md mx-auto w-full space-y-4 relative z-10">
        {/* Header Section */}
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
              <h3 className="text-sm font-semibold">Salesix Agent</h3>
              <div className="flex items-center gap-1.5">
                <motion.div 
                  className="size-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-xs text-muted-foreground">Executing autonomously</p>
              </div>
            </div>
          </div>
          
          <motion.div
            className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Zap className="size-3 text-green-600" />
            <span className="text-xs font-medium text-green-600">Active</span>
          </motion.div>
        </motion.div>

        {/* Tasks List */}
        <div className="space-y-2">
          {tasks.map((task, index) => {
            const isActive = index <= activeTaskIndex;
            const isCompleted = task.status === 'completed' && isActive;
            const isInProgress = task.status === 'in-progress' && isActive;
            
            return (
              <motion.div
                key={task.id}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isActive 
                    ? 'bg-background border-border shadow-md' 
                    : 'bg-muted/30 border-border/50'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.4, 
                  x: 0,
                  scale: isActive ? 1 : 0.98
                }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.15
                }}
              >
                <div className="flex items-center gap-3">
                  {/* Task Icon */}
                  <motion.div
                    className={`flex items-center justify-center size-10 rounded-lg border transition-colors ${
                      isCompleted 
                        ? 'bg-green-500/10 border-green-500/20' 
                        : isInProgress
                        ? 'bg-green-500/10 border-green-500/20'
                        : 'bg-muted border-border/50'
                    }`}
                    animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <task.icon className={`size-5 ${
                      isCompleted || isInProgress
                        ? 'text-green-600'
                        : 'text-muted-foreground'
                    }`} />
                  </motion.div>

                  {/* Task Details */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className={`text-sm font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {task.title}
                      </p>
                      
                      {/* Status Icon */}
                      <AnimatePresence mode="wait">
                        {isCompleted && (
                          <motion.div
                            key="completed"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                          >
                            <CheckCircle2 className="size-4 text-green-600" />
                          </motion.div>
                        )}
                        {isInProgress && (
                          <motion.div
                            key="in-progress"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, rotate: 360 }}
                            exit={{ opacity: 0 }}
                            transition={{ 
                              rotate: { duration: 2, repeat: Infinity, ease: 'linear' }
                            }}
                          >
                            <Clock className="size-4 text-green-600" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Progress Bar */}
                    {isActive && (
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            isCompleted 
                              ? 'bg-green-500' 
                              : isInProgress
                              ? 'bg-green-500'
                              : 'bg-muted-foreground'
                          }`}
                          initial={{ width: '0%' }}
                          animate={{ width: `${task.progress}%` }}
                          transition={{ 
                            duration: 1,
                            delay: index * 0.15 + 0.2,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Stats */}
        <motion.div
          className="flex items-center justify-between p-4 bg-accent/50 border border-border rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground">
              {tasks.filter(t => t.status === 'completed').length} completed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground">
              {tasks.filter(t => t.status === 'in-progress').length} in progress
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-muted-foreground/50" />
            <span className="text-xs text-muted-foreground">
              {tasks.filter(t => t.status === 'pending').length} pending
            </span>
          </div>
        </motion.div>
      </div>

      {/* Success particles */}
      {activeTaskIndex >= 1 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute size-1 rounded-full bg-green-500"
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
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

