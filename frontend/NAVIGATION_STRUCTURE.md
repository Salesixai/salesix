# Navigation Structure

This document describes the navigation menu structure and section mapping for the Salesix homepage.

## Menu Structure

The navigation is organized into 5 main menu items, each linking to multiple related sections on the page:

### 1. Home Menu
- **Link**: `#hero`
- **Sections**: 
  - HeroSection (`#hero`)

### 2. Features Menu
- **Link**: `#capabilities`
- **Sections**:
  - CapabilitiesSection (`#capabilities`)
  - DeliverablesSection (`#deliverables`)

### 3. Process Menu
- **Link**: `#features`
- **Sections**:
  - FeatureSection (`#features`)
  - BentoSection (`#process`)

### 4. Solutions Menu
- **Link**: `#agent-showcase`
- **Sections**:
  - AgentShowcaseSection (`#agent-showcase`)
  - OpenSourceSection (`#open-source`)

### 5. Pricing Menu
- **Link**: `#pricing`
- **Sections**:
  - PricingSection (`#pricing`)
  - CTASection (`#cta`)
  - FooterSection (`#footer`)

## Implementation Details

### Section Mapping

The navigation system uses a centralized section map to associate menu items with multiple sections. This configuration is stored in a shared file to ensure consistency and maintainability:

```typescript
// /frontend/src/lib/navigation-config.ts
export const SECTION_MAP: Record<string, string[]> = {
  'hero': ['hero'],
  'capabilities': ['capabilities', 'deliverables'],
  'features': ['features', 'process'],
  'agent-showcase': ['agent-showcase', 'open-source'],
  'pricing': ['pricing', 'cta', 'footer'],
};
```

### Active State Detection

The system uses helper functions from `navigation-config.ts` to detect active sections:

1. **`findClosestSection()`** - Intelligently finds the active section
2. **`getMenuSectionForPageSection()`** - Maps a page section to its menu item
3. **`getActiveMenuSection()`** - Combines the above to return the active menu item

**Smart Detection Logic:**

The system uses a simple, reliable approach that works perfectly with sticky sections:

**Sequential Section Detection:**
- Processes all sections in DOM order (top to bottom)
- Finds the **last section** whose top has passed the scroll detection point (100px from viewport top)
- Ensures the section's bottom is still visible on screen

**Why This Works:**

For sticky sections like `deliverables` with long scroll areas:
- While scrolling through `deliverables` (even at spacer divs), the next section (`features`) hasn't started yet
- The `deliverables` section remains active because it's the last section that has "started"
- Only when you actually scroll past the top of `features` does it become active

This approach ensures:
- ✅ Long sticky sections maintain correct menu highlighting throughout their entire scroll area
- ✅ Clean transitions only when the next section actually begins
- ✅ Works reliably regardless of section height or scroll complexity
- ✅ Simple, predictable behavior that matches user expectations

### Click Behavior

When users click a menu item:
- The page smoothly scrolls to the first section of that menu group
- The navigation indicator animates to highlight the clicked menu item
- The mobile drawer closes automatically (on mobile devices)

## Architecture

### Centralized Configuration

All navigation-related constants and logic are centralized in:

**`/frontend/src/lib/navigation-config.ts`**
- `SECTION_MAP` - Maps menu items to their sections
- `SCROLL_OFFSET` - Scroll detection threshold (100px)
- `MANUAL_SCROLL_TIMEOUT` - Smooth scroll duration (500ms)
- Helper functions for section detection

This approach:
- ✅ Eliminates code duplication
- ✅ Ensures consistency across desktop and mobile
- ✅ Makes updates easier (single source of truth)
- ✅ Reduces risk of bugs from mismatched configurations

## Files Modified

1. **`/frontend/src/lib/navigation-config.ts`** ⭐ NEW
   - Centralized navigation configuration and helper functions
   - Single source of truth for section mapping
   - Reusable utility functions for scroll detection

2. **`/frontend/src/lib/home.tsx`**
   - Updated `siteConfig.nav.links` with new menu structure

3. **`/frontend/src/components/home/nav-menu.tsx`**
   - Imports shared configuration from `navigation-config.ts`
   - Uses `getActiveMenuSection()` for scroll detection
   - Uses constants for scroll offset and timeouts

4. **`/frontend/src/components/home/sections/navbar.tsx`**
   - Imports shared configuration from `navigation-config.ts`
   - Uses `getActiveMenuSection()` for mobile drawer consistency
   - Synchronized with desktop navigation logic

## Adding New Sections

To add a new section to an existing menu item:

1. Add the section component to the home page (`/frontend/src/app/(home)/page.tsx`)
2. Ensure the section has a unique `id` attribute
3. Update **only** the `SECTION_MAP` in `/frontend/src/lib/navigation-config.ts`

Example:
```typescript
// /frontend/src/lib/navigation-config.ts
export const SECTION_MAP: Record<string, string[]> = {
  'capabilities': ['capabilities', 'deliverables', 'new-feature'],
  // ... other mappings
};
```

✅ **That's it!** Both desktop and mobile navigation will automatically use the updated configuration.

### Adding a New Menu Item

To add a completely new menu item:

1. Update `siteConfig.nav.links` in `/frontend/src/lib/home.tsx`:
```typescript
nav: {
  links: [
    // ... existing items
    { id: 7, name: 'New Menu', href: '#new-section' },
  ],
}
```

2. Add the mapping in `/frontend/src/lib/navigation-config.ts`:
```typescript
export const SECTION_MAP: Record<string, string[]> = {
  // ... existing mappings
  'new-section': ['new-section', 'related-section'],
};
```

3. Create the section components with matching IDs

## Testing

Test the navigation by:
1. Clicking each menu item and verifying it scrolls to the correct section
2. Scrolling through the page and verifying the active menu item updates correctly
3. Testing on mobile devices to ensure the drawer works properly
4. Testing page refresh at different scroll positions

