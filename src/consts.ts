import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '/marink.dev',
  description:
    'Marink Blog',
  href: 'https://marink.dev',

  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: '/blog',
  },
  {
    href: '/about',
    label: '/about',
  },
  {
    href: '/projects',
    label: '/projects',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/marinkres',
    label: 'GitHub',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

// Maps blog tags to Lucide icon names
export const TAG_ICON_MAP: IconMap = {
  devops: 'lucide:workflow',
  cybersecurity: 'lucide:shield',
  sysadmin: 'lucide:server',
  windows: 'lucide:windows',
  linux: 'lucide:linux',
  lab: 'lucide:flask',
  Design: 'lucide:palette',
  Tutorial: 'lucide:book-open',
  Personal: 'lucide:user',
  // Add more as needed
};

// Maps blog tags to pastel color hex codes
export const TAG_PASTEL_COLOR_MAP: IconMap = {
  devops: '#b39ddb',        // light purple
  cybersecurity: '#9575cd', // medium purple
  sysadmin: '#7e57c2',      // deep purple
  windows: '#ce93d8',       // lavender
  linux: '#ab47bc',         // vibrant purple
  lab: '#8e24aa',           // dark purple
  Design: '#ba68c8',        // pastel purple
  Tutorial: '#9c27b0',      // strong purple
  Personal: '#6a1b9a',      // very deep purple
  // Add more as needed
};
