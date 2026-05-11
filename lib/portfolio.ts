export interface Project {
  id: string
  name: string
  category: string
  tagline: string
  operatingLine: string
  status: 'Operating'
  availability: string
  productType: string
  ctaLabel: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 'abab-news',
    name: 'ABAB News',
    category: 'Information intelligence',
    tagline:
      'An information intelligence network for markets, AI, and long-term signal.',
    operatingLine:
      'Public information organized into durable, decision-grade systems.',
    status: 'Operating',
    availability: 'Software platform',
    productType: 'Information',
    link: 'https://www.ababnews.com',
    ctaLabel: 'Visit product',
  },
  {
    id: 'abab-ok',
    name: 'ABAB OK',
    category: 'Structured AI systems',
    tagline:
      'AI infrastructure for reasoning over legal, financial, and professional knowledge.',
    operatingLine:
      'Designed for structured documents, domain logic, and high-context work.',
    status: 'Operating',
    availability: 'Software platform',
    productType: 'AI infrastructure',
    link: 'https://www.ababok.com',
    ctaLabel: 'Visit product',
  },
  {
    id: 'abab-time',
    name: 'ABAB Time',
    category: 'Network intelligence',
    tagline:
      'A relationship memory layer for long-horizon professional networks.',
    operatingLine:
      'Maintains context across people, timelines, follow-ups, and institutional memory.',
    status: 'Operating',
    availability: 'Software platform',
    productType: 'Relationship intelligence',
    link: 'https://www.ababtime.com/',
    ctaLabel: 'Visit product',
  },
  {
    id: 'abab-word',
    name: 'ABAB Word',
    category: 'Cognitive systems',
    tagline:
      'A memory operating system for language, learning, and knowledge retention.',
    operatingLine:
      'Designed for repeat cognition, structured review, and durable recall.',
    status: 'Operating',
    availability: 'Software platform',
    productType: 'Knowledge system',
    link: 'https://www.ababword.com',
    ctaLabel: 'Visit product',
  },
]
