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
  devops: '#81c784',        // light green
  cybersecurity: '#66bb6a', // medium green
  sysadmin: '#4caf50',      // deep green
  windows: '#a5d6a7',       // pale green
  linux: '#388e3c',         // vibrant green
  lab: '#2e7d32',           // dark green
  Design: '#8bc34a',        // pastel green
  Tutorial: '#689f38',      // strong green
  Personal: '#1b5e20',      // very deep green
  // Add more as needed
};
