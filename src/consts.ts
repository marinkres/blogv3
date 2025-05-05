import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '>marink.me',
  description:
    'Marink Blog',
  href: 'https://marink.me',

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
  devops: '#a3b9e6', // mint
  cybersecurity: '#a3c9a8', // pastel blue
  sysadmin: '#f9d5a2', // peach
  windows: '#c3b1e1', // lavender
  linux: '#f7b2ad', // light pink
  lab: '#ffe5b4', // light apricot
  Design: '#b5ead7', // aqua
  Tutorial: '#f7cac9', // rose
  Personal: '#b5d6ea', // sky blue
  // Add more as needed
};
