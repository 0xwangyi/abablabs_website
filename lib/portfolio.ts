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
    category: 'Information platform',
    tagline:
      'A publicly operating information platform focused on financial markets, AI, and long-term signal discovery.',
    operatingLine:
      'Updated continuously through editorial and structured information workflows.',
    status: 'Operating',
    availability: 'Web platform',
    productType: 'Information',
    link: 'https://www.ababnews.com',
    ctaLabel: 'Visit product',
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
    availability: 'Web platform',
    productType: 'AI infrastructure',
    link: 'https://www.ababok.com',
    ctaLabel: 'Visit product',
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
    availability: 'Web platform',
    productType: 'Relationship intelligence',
    link: 'https://www.ababtime.com/',
    ctaLabel: 'Visit product',
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
    availability: 'Web platform',
    productType: 'Knowledge system',
    link: 'https://www.ababword.com',
    ctaLabel: 'Visit product',
  },
]
