'use client';

import { NavMenu } from '@/components/home/nav-menu';
import { ThemeToggle } from '@/components/home/theme-toggle';
import { siteConfig } from '@/lib/home';
import { cn } from '@/lib/utils';
import { Menu, X, Github } from 'lucide-react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useAuth } from '@/components/AuthProvider';
import { useGitHubStars } from '@/hooks/use-github-stars';
import { useRouter, usePathname } from 'next/navigation';
import { getActiveMenuSection, SCROLL_OFFSET, getManualScrolling, setManualScrolling } from '@/lib/navigation-config';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 200,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1 },
  },
};

const drawerMenuContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Main Navbar Component
 * 
 * Responsive navigation bar that includes:
 * - Desktop navigation menu (NavMenu component)
 * - Mobile drawer menu
 * - Theme toggle
 * - GitHub stars display
 * - Auth/Dashboard buttons
 * 
 * The navbar uses centralized configuration from /lib/navigation-config.ts
 * to ensure consistency with the desktop menu for active state detection.
 * This prevents duplicate code and potential bugs from configuration mismatches.
 */
export function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user } = useAuth();
  // const { formattedStars, loading: starsLoading } = useGitHubStars('kortix-ai', '');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll handling during manual click scrolling or if not on homepage
      if (getManualScrolling() || pathname !== '/') return;

      // Get the active menu section based on scroll position
      const activeMenuSection = getActiveMenuSection(SCROLL_OFFSET);
      setActiveSection(activeMenuSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setHasScrolled(latest > 10);
    });
    return unsubscribe;
  }, [scrollY]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const handleOverlayClick = () => setIsDrawerOpen(false);

  const logoSrc = !mounted
    ? '/salesix-logo-black.png'
    : resolvedTheme === 'dark'
      ? '/salesix-logo-white.png'
      : '/salesix-logo-black.png';

  return (
    <header
      className={cn(
        'sticky z-50 flex justify-center transition-all duration-300',
        hasScrolled ? 'top-6 mx-4 md:mx-6' : 'top-4 mx-4 md:mx-6',
      )}
    >
      <div
        className={cn(
          'w-full mx-auto rounded-2xl transition-all duration-300',
          hasScrolled
            ? 'max-w-[1000px] border border-border backdrop-blur-lg bg-background/75'
            : 'max-w-[70rem] shadow-none',
        )}
      >
        <div className="flex h-[56px] items-center justify-between px-3 md:px-6 gap-3 md:gap-4">
            {/* Left Section - Logo */}
            <div className="flex items-center justify-start flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src={logoSrc}
                  alt="Salesix Logo"
                  width={120}
                  height={30}
                  className="h-6 w-auto object-contain"
                  priority
                /> 
              </Link>
            </div>

            {/* Center Section - Navigation Menu */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <NavMenu />
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center justify-end flex-shrink-0 gap-2">
              {/* <Link
                href="https://github.com/kortix-ai/suna"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1.5 h-7 px-2.5 text-xs font-medium rounded-full bg-transparent text-muted-foreground/60 hover:text-muted-foreground hover:bg-accent/30 transition-all duration-200"
                aria-label="GitHub Repository"
              >
                <Github className="size-3.5" />
                <span className={`text-xs font-medium transition-opacity duration-200 ${starsLoading ? 'opacity-50' : 'opacity-100'}`}>
                  {formattedStars}
                </span>
              </Link> */}
              {user ? (
                <Link
                  className="bg-secondary h-8 hidden lg:flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-fit px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12]"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  className="bg-secondary h-8 hidden lg:flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-fit px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12]"
                  href="/auth"
                >
                  Get Started
                </Link>
              )}
              <ThemeToggle />
              <button
                className="lg:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center"
                onClick={toggleDrawer}
              >
                {isDrawerOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </button>
            </div>
          </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              onClick={handleOverlayClick}
            />

            <motion.div
              className="fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-background border border-border p-4 rounded-xl shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              {/* Mobile menu content */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      src={logoSrc}
                      alt="Salesix Logo"
                      width={120}
                      height={22}
                      priority
                    />
                    <span className="font-medium text-primary text-sm">
                      / Salesix
                    </span>
                  </Link>
                  <button
                    onClick={toggleDrawer}
                    className="border border-border rounded-md p-1 cursor-pointer"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <motion.ul
                  className="flex flex-col text-sm mb-4 border border-border rounded-md"
                  variants={drawerMenuContainerVariants}
                >
                  <AnimatePresence>
                    {siteConfig.nav.links.map((item) => (
                      <motion.li
                        key={item.id}
                        className="p-2.5 border-b border-border last:border-b-0"
                        variants={drawerMenuVariants}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => {
                            // If it's an external link (not starting with #), let it navigate normally
                            if (!item.href.startsWith('#')) {
                              setIsDrawerOpen(false);
                              return;
                            }
                            
                            e.preventDefault();
                            
                            // If we're not on the homepage, redirect to homepage with the section
                            if (pathname !== '/') {
                              router.push(`/${item.href}`);
                              setIsDrawerOpen(false);
                              return;
                            }
                            
                            const targetId = item.href.substring(1);
                            const element = document.getElementById(targetId);
                            
                            if (element) {
                              // Set shared manual scroll flag to prevent scroll listener interference
                              setManualScrolling(true);
                              setActiveSection(targetId);
                              
                              // Smooth scroll to element
                              element.scrollIntoView({ behavior: 'smooth' });
                              
                              // Reset manual scroll flag after animation completes
                              setTimeout(() => {
                                setManualScrolling(false);
                              }, 1500);
                            }
                            
                            setIsDrawerOpen(false);
                          }}
                          className={`underline-offset-4 hover:text-primary/80 transition-colors ${
                            (item.href.startsWith('#') && pathname === '/' && activeSection === item.href.substring(1)) || (item.href === pathname)
                              ? 'text-primary font-medium'
                              : 'text-primary/60'
                          }`}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>

                {/* GitHub link for mobile */}
                {/* <Link
                  href="https://github.com/kortix-ai/suna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 h-7 px-2.5 text-xs font-medium rounded-full bg-transparent text-muted-foreground/60 hover:text-muted-foreground hover:bg-accent/30 transition-all duration-200"
                  aria-label="GitHub Repository"
                >
                  <Github className="size-3.5" />
                  <span className={`text-xs font-medium transition-opacity duration-200 ${starsLoading ? 'opacity-50' : 'opacity-100'}`}>
                    ⭐ {formattedStars}
                  </span>
                </Link> */}

                {/* Action buttons */}
                <div className="flex flex-col gap-2">
                  {user ? (
                    <Link
                      href="/dashboard"
                      className="bg-secondary h-8 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-full px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <Link
                      href="/auth"
                      className="bg-secondary h-8 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-full px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
                    >
                      Try free
                    </Link>
                  )}
                  <div className="flex justify-between">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  ); 
}
