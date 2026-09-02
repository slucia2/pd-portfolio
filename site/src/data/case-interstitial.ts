/** Problem hooks for the case-entry interstitial (MOTION_SPEC). Not metrics. */
export type CaseInterstitial = {
  slug: string;
  org: string;
  year: string;
  title: string;
  hook: string;
  role: string;
  accent: string;
};

export const caseInterstitials: CaseInterstitial[] = [
  {
    slug: 'enterprise-permissions',
    org: 'T-Mobile',
    year: '2025',
    title: 'Enterprise Permissions',
    hook: 'Access changes took days and a ticket to IT. Authors waited; admins drowned in requests.',
    role: 'End-to-end product design',
    accent: '#F5C84B',
  },
  {
    slug: 'site-architecture',
    org: 'T-Mobile',
    year: '2024',
    title: 'Platform Site Architecture',
    hook: 'A 9,000-page intranet organized like an org chart — people couldn’t find what they needed.',
    role: 'IA, research synthesis, redesign',
    accent: '#5FA8E8',
  },
  {
    slug: 'scamranger',
    org: 'RangersAI',
    year: '2026',
    title: 'ScamRanger',
    hook: 'Vulnerable users were asked to navigate dense, inconsistent fraud-protection flows.',
    role: 'Product design + accessibility',
    accent: '#9B85FF',
  },
];

export function interstitialForSlug(slug: string) {
  return caseInterstitials.find((c) => c.slug === slug);
}
