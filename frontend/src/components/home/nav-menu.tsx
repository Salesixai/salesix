'use client';

import { siteConfig } from '@/lib/home';
import { motion } from 'motion/react';
import React, { useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  getActiveMenuSection,
  SCROLL_OFFSET,
  MANUAL_SCROLL_TIMEOUT,
  getManualScrolling,
  setManualScrolling,
} from '@/lib/navigation-config';

/**
 * Desktop Navigation Menu Component
 * 
 * Displays the main navigation menu with smooth scrolling and animated indicator.
 * Uses centralized configuration from /lib/navigation-config.ts to ensure
 * consistency with mobile navigation.
 * 
 * Features:
 * - Animated indicator that follows the active menu item
 * - Smooth scroll to sections with offset
 * - Automatic active state detection based on scroll position
 * - Support for multi-section menu items
 */

interface NavItem {
  name: string;
  href: string;
}

interface NavMenuProps {
  links?: typeof siteConfig.nav.links;
}

export function NavMenu({ links }: NavMenuProps = {}) {
  const navs: NavItem[] = links || siteConfig.nav.links;
  const ref = useRef<HTMLUListElement>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    // Initialize with appropriate nav item based on current path
    let targetHref = '#hero'; // default
    if (pathname === '/enterprise') {
      targetHref = '/enterprise';
    }

    const targetItem = ref.current?.querySelector(
      `[href="${targetHref}"]`,
    )?.parentElement;
    if (targetItem) {
      const rect = targetItem.getBoundingClientRect();
      setLeft(targetItem.offsetLeft);
      setWidth(rect.width);
      setIsReady(true);
    }
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      // Skip scroll handling during manual click scrolling or if not on homepage
      if (getManualScrolling() || pathname !== '/') return;

      // Get the active menu section based on scroll position
      const activeMenuSection = getActiveMenuSection(SCROLL_OFFSET);

      // Update active section and nav indicator
      setActiveSection(activeMenuSection);
      const navItem = ref.current?.querySelector(
        `[href="#${activeMenuSection}"]`,
      )?.parentElement;
      if (navItem) {
        const rect = navItem.getBoundingClientRect();
        setLeft(navItem.offsetLeft);
        setWidth(rect.width);
      }
    };

    // Handle non-homepage routes
    if (pathname !== '/') {
      const currentPageItem = navs.find(item => item.href === pathname);
      if (currentPageItem) {
        const navItem = ref.current?.querySelector(
          `[href="${currentPageItem.href}"]`,
        )?.parentElement;
        if (navItem) {
          const rect = navItem.getBoundingClientRect();
          setLeft(navItem.offsetLeft);
          setWidth(rect.width);
        }
      }
      return;
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    // If it's an external link (not starting with #), let it navigate normally
    if (!item.href.startsWith('#')) {
      return;
    }

    e.preventDefault();

    const targetId = item.href.substring(1);

    // If we're not on the homepage, redirect to homepage with the section
    if (pathname !== '/') {
      router.push(`/${item.href}`);
      return;
    }

    const element = document.getElementById(targetId);

    if (element) {
      // Set shared manual scroll flag
      setManualScrolling(true);

      // Immediately update nav state
      setActiveSection(targetId);
      const navItem = e.currentTarget.parentElement;
      if (navItem) {
        const rect = navItem.getBoundingClientRect();
        setLeft(navItem.offsetLeft);
        setWidth(rect.width);
      }

      // Calculate exact scroll position
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET;

      // Smooth scroll to exact position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Reset manual scroll flag after animation completes
      setTimeout(() => {
        setManualScrolling(false);
      }, MANUAL_SCROLL_TIMEOUT);
    }
  };

  return (
    <div className="w-full hidden md:block">
      <ul
        className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center"
        ref={ref}
      >
        {navs.map((item) => (
          <li
            key={item.name}
            className={`z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${(item.href.startsWith('#') && pathname === '/' && activeSection === item.href.substring(1)) || (item.href === pathname)
                ? 'text-primary'
                : 'text-primary/60 hover:text-primary'
              } tracking-tight`}
          >
            <a href={item.href} onClick={(e) => handleClick(e, item)}>
              {item.name}
            </a>
          </li>
        ))}
        {isReady && (
          <motion.li
            animate={{ left, width }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="absolute inset-0 my-1.5 rounded-full bg-accent/60 border border-border"
          />
        )}
      </ul>
    </div>
  );
}
