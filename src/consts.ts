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
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/marinkres',
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/marinkresic',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:marindev27@gmail.com',
    label: 'Email',
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
