export interface Project {
  id: string
  name: string
  tagline: string
  status: 'Live' | 'Building'
  link?: string
}

export const projects: Project[] = [
  {
    id: 'abab-news',
    name: 'ABAB News',
    tagline: 'A financial and cognitive infrastructure for information discovery and long-term insight.',
    status: 'Live',
    link: 'https://www.ababnews.com',
  },
  {
    id: 'abab-link',
    name: 'ABAB Link',
    tagline: 'An infrastructure layer for organizing and connecting financial links and identities.',
    status: 'Live',
    link: 'https://www.abablink.com',
  },
  {
    id: 'abab-cam',
    name: 'ABAB Cam',
    tagline: 'An infrastructure for accessing and verifying real-world camera feeds.',
    status: 'Live',
    link: 'https://www.ababcam.com',
  },
  {
    id: 'abab-word',
    name: 'ABAB Word',
    tagline: 'An infrastructure for building and managing personal knowledge through structured learning.',
    status: 'Building',
    link: 'https://www.ababword.com',
  },
  {
    id: 'abab-ok',
    name: 'ABAB OK',
    tagline: 'A proprietary vertical AI model developed for legal and professional use cases.',
    status: 'Building',
    link: 'https://www.ababok.com',
  },
  {
    id: 'abab-mail',
    name: 'ABAB Mail',
    tagline: 'A native email infrastructure designed for identity, communication, and long-term use.',
    status: 'Building',
    link: 'https://www.ababmail.com',
  },
]
