'use client';

import { SectionHeader } from '@/components/home/section-header';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Bot,
  Target,
  Database,
  UserPlus,
  Mail,
  MessageSquare,
  Phone,
  Workflow
} from 'lucide-react';

const capabilities = [
  {
    title: 'AI Sales Agents',
    description: 'Automate lead qualification, follow-ups, and deal closing with intelligent sales agents that learn from every interaction.',
    icon: <Bot className="size-6" />,
  },
  {
    title: 'Marketing Automation',
    description: 'Deploy AI agents that create, optimize, and execute marketing campaigns across multiple channels automatically.',
    icon: <Target className="size-6" />,
  },
  {
    title: 'Data Enrichment',
    description: 'Transform raw data into actionable insights with AI agents that analyze trends, predict outcomes, and recommend strategies.',
    icon: <Database className="size-6" />,
  },
  {
    title: 'Lead Generation',
    description: 'Find and connect with the right customers using AI-curated data to personalize campaigns, target better, and boost engagement effortlessly.',
    icon: <UserPlus className="size-6" />,
  },
  {
    title: 'Email Marketing AI',
    description: 'Personalize email campaigns at scale with AI that crafts compelling content and optimizes send times for maximum engagement.',
    icon: <Mail className="size-6" />,
  },
  {
    title: 'SMS Marketing',
    description: 'Reach customers instantly with AI-powered SMS campaigns that deliver the right message at the perfect moment.',
    icon: <MessageSquare className="size-6" />,
  },
  {
    title: 'Voice Agents',
    description: 'Handle customer calls 24/7 with natural-sounding AI voice agents that provide support, qualify leads, and book appointments.',
    icon: <Phone className="size-6" />,
  },
  {
    title: 'Manage Your Workflows',
    description: 'Set up automated processes for lead generation, customer follow-ups, content creation, and daily business operations.',
    icon: <Workflow className="size-6" />,
  },

];

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="capabilities"
      className="flex flex-col items-center justify-center w-full relative"
      ref={ref}
    >
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Your Business, Powered by Salesix
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              A unified network of AI agents designed to automate, connect, and elevate every aspect of your operations.
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="relative p-6 border-border group hover:bg-accent/5 transition-colors duration-300 [&:not(:nth-child(4n))]:border-r [&:not(:nth-last-child(-n+4))]:border-b"
              >
                {/* Icon */}
                <div className="flex items-center justify-center size-12 bg-secondary/10 rounded-xl mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <div className="text-secondary">
                    {capability.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
