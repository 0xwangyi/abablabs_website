export interface PublicRecord {
  label: string
  href?: string
}

export interface Project {
  id: string
  name: string
  category: string
  tagline: string
  operatingLine: string
  status: 'Operating'
  domain: string
  availability: string
  productType: string
  signals: string[]
  publicRecords: PublicRecord[]
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
    domain: 'ababnews.com',
    availability: 'Public web platform and iOS app',
    productType: 'Information platform',
    signals: ['Public Platform', 'iOS App'],
    publicRecords: [
      { label: 'Website', href: 'https://www.ababnews.com' },
      { label: 'iOS App Store', href: 'https://apps.apple.com/us/app/abab-news/id6759241442' },
      { label: 'Public domain' },
    ],
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
    domain: 'ababok.com',
    availability: 'Public beta web platform and iOS app',
    productType: 'AI infrastructure',
    signals: ['Public Beta', 'iOS App'],
    publicRecords: [
      { label: 'Website', href: 'https://www.ababok.com' },
      { label: 'iOS App Store', href: 'https://apps.apple.com/us/app/abab-ok/id6763947672' },
      { label: 'Public beta' },
    ],
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
    domain: 'ababtime.com',
    availability: 'Public web platform and iOS app',
    productType: 'Relationship intelligence',
    signals: ['Public Platform', 'iOS App'],
    publicRecords: [
      { label: 'Website', href: 'https://www.ababtime.com/' },
      { label: 'iOS App Store', href: 'https://apps.apple.com/us/app/abab-time/id6760642690' },
      { label: 'Public domain' },
    ],
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
    domain: 'ababword.com',
    availability: 'Public web platform and iOS app',
    productType: 'Knowledge system',
    signals: ['Active Product', 'iOS App'],
    publicRecords: [
      { label: 'Website', href: 'https://www.ababword.com' },
      { label: 'iOS App Store', href: 'https://apps.apple.com/us/app/abab-word/id6760215327' },
      { label: 'Public domain' },
    ],
    link: 'https://www.ababword.com',
    ctaLabel: 'Visit Platform',
  },
]
