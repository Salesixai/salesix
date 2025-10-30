'use client';

import { SectionHeader } from '@/components/home/section-header';
import { 
  Monitor, 
  Landmark, 
  ShoppingCart, 
  Shield, 
  HeartPulse, 
  GraduationCap, 
  Phone, 
  Building2 
} from 'lucide-react';

// Simple Agent Card Component
const AgentCard = ({ agent }: { agent: any }) => {
  const IconComponent = agent.icon;
  
  return (
    <div className="flex flex-col justify-between p-6 border-r border-b border-border min-h-[280px] group transition-colors duration-300 hover:bg-accent/5">
      {/* Icon */}
      <div className="flex items-center justify-center size-12 bg-secondary/10 rounded-xl mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
        <div className="text-secondary">
          <IconComponent className="size-6" />
        </div>
      </div>
      
      {/* Content */}
      <div className="space-y-3 flex-1">
        {/* Name */}
        <h3 className="text-xl font-semibold tracking-tight">
          {agent.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {agent.desc}
        </p>
      </div>
    </div>
  );
};

// Agent Grid Component
const AgentGrid = () => {
  const agents = [
    { 
      name: 'IT Industry', 
      icon: Monitor, 
      desc: 'Empower IT operations with AI agents that automate monitoring, support, and communication—enhancing productivity and minimizing manual intervention.',
    },
    { 
      name: 'Banking', 
      icon: Landmark, 
      desc: 'Revolutionize customer interactions and compliance processes with secure AI agents that handle inquiries, verifications, and personalized financial support.',
    },
    { 
      name: 'E-Commerce', 
      icon: ShoppingCart, 
      desc: 'Drive conversions and retention with AI agents that manage customer queries, track orders, and deliver a seamless shopping experience at every touchpoint.',
    },
    { 
      name: 'Insurance', 
      icon: Shield, 
      desc: 'Simplify claims, policy renewals, and customer engagement with AI agents that provide instant responses and automate routine processes with accuracy.',
    },
    { 
      name: 'Healthcare', 
      icon: HeartPulse, 
      desc: 'Enable smarter patient interactions and appointment management with AI agents that streamline communication while maintaining data security and compliance.',
    },
    { 
      name: 'Education', 
      icon: GraduationCap, 
      desc: 'Automate student onboarding, scheduling, and engagement with AI agents that support educators, manage queries, and enhance learning experiences.',
    },
    { 
      name: 'Call Center', 
      icon: Phone, 
      desc: 'Transform your contact center with AI voice agents that handle inbound and outbound calls autonomously—improving efficiency, accuracy, and scalability.',
    },
    { 
      name: 'B2B Services', 
      icon: Building2, 
      desc: 'Accelerate deal cycles and client relationships with AI agents that qualify leads, follow up intelligently, and keep business pipelines running 24/7.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-border">
      {agents.map((agent) => (
        <AgentCard key={agent.name} agent={agent} />
      ))}
    </div>
  );
};

export function AgentShowcaseSection() {
  return (
    <section
      id="agent-showcase"
      className="flex flex-col items-center justify-center w-full relative"
    >
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Build Your AI Team
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
            Unite automation and intelligence with AI agents tailored for every industry.
            </p>
          </SectionHeader>

          <AgentGrid />
        </div>
      </div>
    </section>
  );
}