export interface CaseStudy {
  slug: string;
  no: number;
  title: string;
  /** Silkscreen ridge-strip label, e.g. "NO.1 · FLAGSHIP" */
  cartridgeLabel: string;
  /** Plex Mono meta shown on the homepage card, e.g. "T-MOBILE · 2025" */
  cardMeta: string;
  description: string;
  accent: string;
  accentDark: string;
  /** Card A tint fill: accent at 12% opacity */
  accentTint: string;
  /** Card A border: mid accent at 55% opacity */
  accentBorder: string;
  image: string;
  imageAlt: string;
  /** Optional case-page hero video. Homepage cartridge still uses `image`. */
  heroVideo?: string;
  /** CSS for the card/hero image crop */
  imageFit: 'cover' | 'contain';
  imagePosition?: string;
  /** Optional homepage-card overrides, when the thumbnail needs a different
      crop than the case-study hero (e.g. a tight cover crop reads better as a
      small card than a shrunk-to-fit contain). Falls back to imageFit/position. */
  cardFit?: 'cover' | 'contain';
  cardPosition?: string;
  /** Hide the case-page cover when the same product view appears immediately
      below as richer media. The homepage cartridge still uses the image. */
  hideCaseHero?: boolean;
}

export const cases: CaseStudy[] = [
  {
    slug: 'enterprise-permissions',
    no: 1,
    title: 'Enterprise Permissions',
    cartridgeLabel: 'NO.1 · FLAGSHIP',
    cardMeta: 'T-MOBILE · 2025',
    description: 'Access for 150K+ employees, run by content teams.',
    accent: '#F5C84B',
    accentDark: '#B8952A',
    accentTint: 'rgba(245,200,75,.12)',
    accentBorder: 'rgba(224,172,44,.55)',
    image: '/images/enterprise-permissions/ep-hero.png',
    imageAlt: 'Enterprise Permissions',
    heroVideo: '/images/enterprise-permissions/ep-hero.mp4',
    imageFit: 'contain',
    cardFit: 'cover',
    cardPosition: 'top',
  },
  {
    slug: 'myintake',
    no: 2,
    title: 'MyIntake',
    cartridgeLabel: 'NO.2 · 1ST PLACE',
    cardMeta: 'SPRINT · 2026',
    description: 'A health profile any clinic can scan. Built solo in 14 days.',
    accent: '#7CE38B',
    accentDark: '#2c7a4d',
    accentTint: 'rgba(124,227,139,.12)',
    accentBorder: 'rgba(66,180,110,.55)',
    image: '/images/landing-hero.png',
    imageAlt: 'MyIntake',
    imageFit: 'cover',
    imagePosition: 'top',
    hideCaseHero: true,
  },
  {
    slug: 'site-architecture',
    no: 3,
    title: 'Site Architecture',
    cartridgeLabel: 'NO.3 · 68% CUT',
    cardMeta: 'T-MOBILE · 2024',
    description: 'Three platforms into one structure. 9K pages to 3K.',
    accent: '#5FA8E8',
    accentDark: '#245a94',
    accentTint: 'rgba(95,168,232,.12)',
    accentBorder: 'rgba(48,118,196,.55)',
    image: '/images/desktop-dark.png',
    imageAlt: 'Site Architecture',
    imageFit: 'contain',
    cardFit: 'cover',
    cardPosition: 'top',
  },
];
