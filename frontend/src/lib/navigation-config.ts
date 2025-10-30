/**
 * Navigation Configuration
 * Central configuration for homepage navigation and section mapping
 */

/**
 * Map menu items to their associated sections
 * Each menu item can link to multiple sections on the page
 */
export const SECTION_MAP: Record<string, string[]> = {
  'hero': ['hero'],
  'capabilities': ['capabilities', 'deliverables'],
  'features': ['features', 'process'],
  'agent-showcase': ['agent-showcase', 'open-source'],
  'pricing': ['pricing', 'cta', 'footer'],
} as const;

/**
 * Scroll offset for section detection (in pixels)
 * Used to determine when a section is considered "active"
 */
export const SCROLL_OFFSET = 100;

/**
 * Duration for manual scroll flag timeout (in milliseconds)
 * Used to prevent scroll event conflicts during smooth scrolling
 */
export const MANUAL_SCROLL_TIMEOUT = 500;

/**
 * Get the menu section key for a given page section ID
 * @param sectionId - The ID of the section (e.g., 'deliverables')
 * @returns The menu section key (e.g., 'capabilities') or the original sectionId if not found
 */
export function getMenuSectionForPageSection(sectionId: string): string {
  for (const [menuSection, sections] of Object.entries(SECTION_MAP)) {
    if (sections.includes(sectionId)) {
      return menuSection;
    }
  }
  return sectionId;
}

/**
 * Get all page section IDs from the section map in DOM order
 * @returns Array of all section IDs
 */
export function getAllSectionIds(): string[] {
  // Return in the actual DOM order as they appear on the page
  // This is important for proper scroll detection
  return ['hero', 'capabilities', 'deliverables', 'features', 'process', 'agent-showcase', 'open-source', 'pricing', 'cta', 'footer'];
}

/**
 * Find the active section based on scroll position
 * @param offset - Scroll offset for detection (default: SCROLL_OFFSET)
 * @returns The ID of the active section, or null if none found
 */
export function findClosestSection(offset: number = SCROLL_OFFSET): string | null {
  const allSections = getAllSectionIds();
  let activeSection: string | null = allSections[0]; // Default to first section
  
  // Go through sections in DOM order and find the last one whose top has passed the offset
  // This simple approach works better for sticky sections and long scroll areas
  for (const section of allSections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      
      // If this section's top is at or above the offset point, it's potentially active
      // We keep updating activeSection as we go, so we end up with the last (furthest down) section
      // that has started
      if (rect.top <= offset) {
        // Additional check: make sure the section hasn't completely scrolled past
        // (bottom is still visible)
        if (rect.bottom > 0) {
          activeSection = section;
        }
      } else {
        // Once we hit a section that hasn't started yet, we can break
        // because sections are in DOM order
        break;
      }
    }
  }

  return activeSection;
}

/**
 * Get the active menu section based on current scroll position
 * @param offset - Scroll offset for detection (default: SCROLL_OFFSET)
 * @returns The menu section key that should be active
 */
export function getActiveMenuSection(offset: number = SCROLL_OFFSET): string {
  const closestSection = findClosestSection(offset);
  if (!closestSection) {
    return 'hero'; // Default fallback
  }
  return getMenuSectionForPageSection(closestSection);
}

