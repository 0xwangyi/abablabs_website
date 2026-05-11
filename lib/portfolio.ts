export interface Project {
  id: string
  name: string
  category: string
  tagline: string
  operatingLine: string
  status: 'Operating'
  signals: string[]
  ctaLabel: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 'abab-news',
    name: 'ABAB News',
    category: 'Information platform',
    tagline:
      'A publicly operating information platform focused on financial markets, AI, and long-term signal discovery.',
    operatingLine:
      'Updated continuously through editorial and structured information workflows.',
    status: 'Operating',
    signals: ['Public Platform', 'Weekly Updated'],
    link: 'https://www.ababnews.com',
    ctaLabel: 'Visit Platform',
  },
  {
    id: 'abab-ok',
    name: 'ABAB OK',
    category: 'AI infrastructure',
    tagline:
      'An AI infrastructure platform for legal, financial, and professional workflow systems.',
    operatingLine:
      'Built around structured knowledge systems, document intelligence, and workflow reasoning.',
    status: 'Operating',
    signals: ['Active Product', 'Public Beta'],
    link: 'https://www.ababok.com',
    ctaLabel: 'Visit Platform',
  },
  {
    id: 'abab-time',
    name: 'ABAB Time',
    category: 'Relationship intelligence',
    tagline:
      'An AI-powered relationship intelligence product for professionals who manage long-term client, partner, and investor relationships.',
    operatingLine:
      'Built around relationship memory, follow-up workflows, contact timelines, and personal network visibility.',
    status: 'Operating',
    signals: ['Public Platform', 'App Store Product'],
    link: 'https://www.ababtime.com/',
    ctaLabel: 'Visit Platform',
  },
  {
    id: 'abab-word',
    name: 'ABAB Word',
    category: 'Knowledge systems',
    tagline:
      'An operating learning and vocabulary system designed around long-term memory retention.',
    operatingLine:
      'Built around structured review workflows, vocabulary practice, and knowledge retention.',
    status: 'Operating',
    signals: ['Active Product', 'Knowledge System'],
    link: 'https://www.ababword.com',
    ctaLabel: 'Visit Platform',
  },
]
