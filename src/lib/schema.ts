const BASE = 'https://edenbusinessconcepts.com'

export const organizationGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: `${BASE}/`,
      name: 'Eden Business Concepts',
      publisher: { '@id': `${BASE}/#organization` },
      inLanguage: 'en-US',
    },
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${BASE}/#organization`,
      name: 'Eden Business Concepts, LLC',
      alternateName: 'Eden Business Concepts',
      url: `${BASE}/`,
      logo: `${BASE}/icon-180.png`,
      foundingDate: '1991',
      description:
        'Eden Business Concepts helps owners of closely held and family businesses scale their companies, form their leaders, and transform conflict — pairing operational rigor with human depth.',
      email: 'john@edenbusinessconcepts.com',
      telephone: '+1-847-204-6570',
      sameAs: ['https://www.linkedin.com/company/eden-business-concepts-llc/'],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Indiana' },
        { '@type': 'AdministrativeArea', name: 'Illinois' },
        { '@type': 'Country', name: 'United States' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lafayette',
        addressRegion: 'IN',
        addressCountry: 'US',
      },
      founder: [{ '@id': `${BASE}/#john-erickson` }, { '@id': `${BASE}/#dennis-humphrey` }],
      knowsAbout: [
        'Business scaling',
        'Leadership development',
        'EOS / Traction',
        'Predictable Success',
        'Succession planning',
        'Conflict transformation',
        'Family and closely held businesses',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Comprehensive Business Scaling', url: `${BASE}/scaling`, description: 'Installing the operating system a company runs on and moving it from founder-dependent to genuinely scalable.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leadership Formation', url: `${BASE}/leadership`, description: 'Developing the inner strength leadership demands in owners, successors, and teams.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strategic Advising', url: `${BASE}/advising`, description: 'A senior thinking partner for strategy, succession, org design, and hard personnel decisions.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conflict Transformation', url: `${BASE}/conflict`, description: 'Moving teams through conflict to restored, working relationships using a proven five-stage model.' } },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': `${BASE}/#john-erickson`,
      name: 'John D. Erickson',
      honorificSuffix: 'DMin',
      jobTitle: 'Co-Founder & Principal',
      worksFor: { '@id': `${BASE}/#organization` },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Purdue University' },
      sameAs: ['https://www.linkedin.com/in/john-d-erickson/'],
      knowsAbout: ['Business scaling', 'EOS / Traction', 'Predictable Success', 'Leadership development'],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', name: 'Advanced Process Consultant', recognizedBy: { '@type': 'Organization', name: 'Society of Process Consultants' } },
        { '@type': 'EducationalOccupationalCredential', name: 'Certified Conflict Mediator', recognizedBy: { '@type': 'Organization', name: 'Live at Peace' } },
      ],
    },
    {
      '@type': 'Person',
      '@id': `${BASE}/#dennis-humphrey`,
      name: 'Dennis R. Humphrey',
      honorificSuffix: 'PhD',
      jobTitle: 'Co-Founder & Principal',
      worksFor: { '@id': `${BASE}/#organization` },
      sameAs: ['https://www.linkedin.com/in/dennishumphrey/'],
      knowsAbout: ['Leadership formation', 'Conflict transformation', 'Counseling'],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', name: 'Licensed Clinical Professional Counselor (LCPC)', credentialCategory: 'license', recognizedBy: { '@type': 'Organization', name: 'State of Illinois' } },
        { '@type': 'EducationalOccupationalCredential', name: 'Licensed Clinical Professional Counselor (LCPC)', credentialCategory: 'license', recognizedBy: { '@type': 'Organization', name: 'State of Wisconsin' } },
        { '@type': 'EducationalOccupationalCredential', name: 'Certified Conflict Mediator', recognizedBy: { '@type': 'Organization', name: 'Live at Peace' } },
      ],
    },
  ],
}

const BOOKS = [
  { title: "The Leader's Motivation", url: 'https://a.co/d/04Xwfn5a', authors: ['John D. Erickson'] },
  { title: "The Leader's Foundation", url: 'https://a.co/d/01gAEQjT', authors: ['John D. Erickson'] },
  { title: "The Leader's Direction", url: 'https://a.co/d/00bO2w6y', authors: ['John D. Erickson'] },
  { title: 'Leading Through Conflict', url: 'https://a.co/d/0j5j0MQ8', authors: ['John D. Erickson', 'Dennis R. Humphrey'] },
  { title: 'Three Paths Out of Paradise', url: 'https://a.co/d/0i8YWort', authors: ['John D. Erickson'] },
  { title: 'Known and Called', url: 'https://a.co/d/059iI9JE', authors: ['John D. Erickson'] },
  { title: 'A Heart Well Kept', url: 'https://a.co/d/0c1ytRgC', authors: ['John D. Erickson'], isbn: '9798258404688' },
  { title: 'When the Word Comes Worshipping', url: 'https://a.co/d/04Fu8ley', authors: ['John D. Erickson'] },
]

export const booksSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Books by John D. Erickson and Dennis R. Humphrey',
  itemListElement: BOOKS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Book',
      name: b.title,
      author: b.authors.map((n) => ({ '@type': 'Person', name: n })),
      url: b.url,
      ...(b.isbn ? { isbn: b.isbn } : {}),
    },
  })),
}
