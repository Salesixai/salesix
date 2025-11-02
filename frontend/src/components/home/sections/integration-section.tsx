'use client';

import { SectionHeader } from '@/components/home/section-header';
import { Marquee } from '@/components/home/ui/marquee';
import { 
  SiGmail, 
  SiWhatsapp, 
  SiLinkedin, 
  SiMedium, 
  SiSlack, 
  SiHubspot, 
  SiSalesforce, 
  SiDiscord, 
  SiX, 
  SiGoogledrive, 
  SiGooglecalendar, 
  SiNotion, 
  SiGooglesheets, 
  SiCalendly, 
  SiGooglemeet, 
  SiGoogle 
} from 'react-icons/si';
import type { IconType } from 'react-icons';

// Integration card component
interface IntegrationCardProps {
  name: string;
  icon: IconType;
  color: string;
  connected?: boolean;
}

function IntegrationCard({ name, icon: Icon, color, connected = false }: IntegrationCardProps) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 min-w-[180px] group cursor-pointer">
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-background/50 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-12 h-12" style={{ color }} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-sm font-semibold text-foreground">{name}</h3>
        <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
          {connected ? 'Connected ✓' : 'Connect +'}
        </button>
      </div>
    </div>
  );
}

// Integration items data
const integrations = [
  { name: 'Gmail', icon: SiGmail, color: '#EA4335' },
  // { name: 'Outlook', icon: SiMicrosoftoutlook, color: '#0078D4' },
  { name: 'WhatsApp', icon: SiWhatsapp, color: '#25D366' },
  { name: 'LinkedIn', icon: SiLinkedin, color: '#0A66C2' },
  { name: 'Medium', icon: SiMedium, color: '#000000' },
  { name: 'Slack', icon: SiSlack, color: '#4A154B' },
  { name: 'HubSpot', icon: SiHubspot, color: '#FF7A59' },
  { name: 'Salesforce', icon: SiSalesforce, color: '#00A1E0' },
  { name: 'Discord', icon: SiDiscord, color: '#5865F2' },
  { name: 'Twitter', icon: SiX, color: '#000000' },
  { name: 'Google Drive', icon: SiGoogledrive, color: '#4285F4' },
  { name: 'Google Calendar', icon: SiGooglecalendar, color: '#4285F4' },
  { name: 'Notion', icon: SiNotion, color: '#000000' },
  { name: 'Google Sheets', icon: SiGooglesheets, color: '#0F9D58' },
  { name: 'Calendly', icon: SiCalendly, color: '#006BFF' },
  { name: 'Google Meet', icon: SiGooglemeet, color: '#00897B' },
  { name: 'Google', icon: SiGoogle, color: '#4285F4' },
];

export function IntegrationSection() {
  return (
    <section
      id="integrations"
      className="flex flex-col items-center justify-center gap-12 w-full relative px-6 py-20 overflow-hidden"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          Connect Your Favorite Tools
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          Integrate with Gmail, Slack, HubSpot, and 100+ other tools to automate your sales, marketing, and operations workflows.
        </p>
      </SectionHeader>

      <div className="relative w-full">
        {/* First row - scrolling right */}
        <Marquee className="py-4 [--duration:40s]" pauseOnHover>
          {integrations.slice(0, 9).map((integration, idx) => (
            <IntegrationCard
              key={`row1-${idx}`}
              name={integration.name}
              icon={integration.icon}
              color={integration.color}
            />
          ))}
        </Marquee>

        {/* Second row - scrolling left */}
        <Marquee className="py-4 [--duration:45s]" reverse pauseOnHover>
          {integrations.slice(9).map((integration, idx) => (
            <IntegrationCard
              key={`row2-${idx}`}
              name={integration.name}
              icon={integration.icon}
              color={integration.color}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

