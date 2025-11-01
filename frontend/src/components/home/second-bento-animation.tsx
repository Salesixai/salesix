import { OrbitingCircles } from '@/components/home/ui/orbiting-circle';
import { SocialIcon } from 'react-social-icons';

export function SecondBentoAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-black p-2 rounded-full z-30 md:bottom-0 md:top-auto">
        <img 
          src="/logo-icon.svg" 
          alt="Salesix Icon" 
          className="size-10"
        />
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">
          <OrbitingCircles
            index={0}
            iconSize={60}
            radius={100}
            reverse
            speed={1}
          >
            <SocialIcon network="slack" style={{ height: 48, width: 48 }} />
            <SocialIcon network="google" style={{ height: 48, width: 48 }} />
            <SocialIcon network="linkedin" style={{ height: 48, width: 48 }} />
            <SocialIcon network="whatsapp" style={{ height: 48, width: 48 }} />
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={60} speed={0.5}>
            <SocialIcon network="telegram" style={{ height: 48, width: 48 }} />
            <SocialIcon network="medium" style={{ height: 48, width: 48 }} />
            <SocialIcon network="soundcloud" style={{ height: 48, width: 48 }} />
            <SocialIcon url="https://teams.microsoft.com" style={{ height: 48, width: 48 }} />
            <SocialIcon network="discord" style={{ height: 48, width: 48 }} />
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={60}
            radius={230}
            reverse
            speed={0.5}
          >
            <SocialIcon network="youtube" style={{ height: 48, width: 48 }} />
            <SocialIcon network="twitter" style={{ height: 48, width: 48 }} />
            <SocialIcon network="reddit" style={{ height: 48, width: 48 }} />
            <SocialIcon network="pinterest" style={{ height: 48, width: 48 }} />
            <SocialIcon network="twitch" style={{ height: 48, width: 48 }} />
            <SocialIcon network="linkedin" style={{ height: 48, width: 48 }} />
          </OrbitingCircles>

          {/* Additional outer ring for more tools */}
          <OrbitingCircles
            index={3}
            iconSize={50}
            radius={320}
            speed={0.3}
          >
            <div className="opacity-75">
              <SocialIcon network="spotify" style={{ height: 40, width: 40 }} />
            </div>
            <div className="opacity-75">
              <SocialIcon network="vimeo" style={{ height: 40, width: 40 }} />
            </div>
            <div className="opacity-75">
              <SocialIcon network="instagram" style={{ height: 40, width: 40 }} />
            </div>
            <div className="opacity-75">
              <SocialIcon network="facebook" style={{ height: 40, width: 40 }} />
            </div>
            <div className="opacity-75">
              <SocialIcon network="tumblr" style={{ height: 40, width: 40 }} />
            </div>
            <div className="opacity-75">
              <SocialIcon network="dribbble" style={{ height: 40, width: 40 }} />
            </div>
            <div className="opacity-75">
              <SocialIcon network="github" style={{ height: 40, width: 40 }} />
            </div>
            <div className="opacity-75">
              <SocialIcon network="behance" style={{ height: 40, width: 40 }} />
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}
