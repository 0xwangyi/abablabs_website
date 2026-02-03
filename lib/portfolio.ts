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
    link: 'https://www.ababnews.com',
  },
  {
    id: 'abab-link',
    name: 'ABAB Link',
    tagline: 'Identity and reputation layer for products.',
    status: 'Live',
    link: 'https://www.abablink.com',
  },
  {
    id: 'abab-cam',
    name: 'ABAB Cam',
    tagline: 'Visual content creation and curation tools.',
    status: 'Live',
    link: 'https://www.ababcam.com',
  },
  {
    id: 'abab-word',
    name: 'ABAB Word',
    tagline: 'Collaborative writing tool for distributed teams.',
    status: 'Building',
    link: 'https://www.ababword.com',
  },
  {
    id: 'abab-ok',
    name: 'ABAB OK',
    tagline: 'Streamlined task and workflow management.',
    status: 'Building',
    link: 'https://www.ababok.com',
  },
  {
    id: 'abab-mail',
    name: 'ABAB Mail',
    tagline: 'Modern email for teams and individuals.',
    status: 'Building',
    link: 'https://www.ababmail.com',
  },
]
