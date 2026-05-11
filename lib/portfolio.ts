export interface Project {
  id: string
  name: string
  category: string
  tagline: string
  audience: string
  status: 'Live' | 'Building'
  link?: string
}

export const projects: Project[] = [
  {
    id: 'abab-news',
    name: 'ABAB News',
    category: 'Information intelligence',
    tagline: 'Financial and cognitive infrastructure for information discovery and long-term insight.',
    audience: 'For readers, builders, and market observers who need durable signal.',
    status: 'Live',
    link: 'https://www.ababnews.com',
  },
  {
    id: 'abab-link',
    name: 'ABAB Link',
    category: 'Financial identity',
    tagline: 'An infrastructure layer for organizing and connecting financial links and identities.',
    audience: 'For teams building cleaner financial navigation and trusted link graphs.',
    status: 'Live',
    link: 'https://www.abablink.com',
  },
  {
    id: 'abab-cam',
    name: 'ABAB Cam',
    category: 'Real-world data',
    tagline: 'Infrastructure for accessing and verifying real-world camera feeds.',
    audience: 'For use cases that depend on verifiable, location-aware visual context.',
    status: 'Live',
    link: 'https://www.ababcam.com',
  },
  {
    id: 'abab-word',
    name: 'ABAB Word',
    category: 'Knowledge systems',
    tagline: 'Infrastructure for building and managing personal knowledge through structured learning.',
    audience: 'For individuals and teams turning learning into long-term memory.',
    status: 'Building',
    link: 'https://www.ababword.com',
  },
  {
    id: 'abab-ok',
    name: 'ABAB OK',
    category: 'Professional AI',
    tagline: 'A proprietary vertical AI model developed for legal and professional use cases.',
    audience: 'For professional workflows that require domain-specific reasoning and reliability.',
    status: 'Building',
    link: 'https://www.ababok.com',
  },
  {
    id: 'abab-mail',
    name: 'ABAB Mail',
    category: 'Communication infrastructure',
    tagline: 'Native email infrastructure designed for identity, communication, and long-term use.',
    audience: 'For durable communication, account identity, and owned digital presence.',
    status: 'Building',
    link: 'https://www.ababmail.com',
  },
]
