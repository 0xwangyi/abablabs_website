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
    tagline: 'News and information platform for the next generation.',
    status: 'Live',
    link: 'https://news.abablabs.com',
  },
  {
    id: 'abab-market',
    name: 'ABAB Market',
    tagline: 'Data-driven market tools for information discovery.',
    status: 'Live',
    link: 'https://market.abablabs.com',
  },
  {
    id: 'abab-chain',
    name: 'ABAB Chain',
    tagline: 'Infrastructure for secure coordination.',
    status: 'Building',
  },
  {
    id: 'abab-word',
    name: 'ABAB Word',
    tagline: 'Collaborative writing tool for distributed teams.',
    status: 'Live',
    link: 'https://word.abablabs.com',
  },
  {
    id: 'abab-link',
    name: 'ABAB Link',
    tagline: 'Identity and reputation layer for products.',
    status: 'Building',
  },
  {
    id: 'abab-cam',
    name: 'ABAB Cam',
    tagline: 'Visual content creation and curation tools.',
    status: 'Building',
  },
]
