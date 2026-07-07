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

const JOHN = { '@id': `${BASE}/#john-erickson` }
const DENNIS = { '@id': `${BASE}/#dennis-humphrey` }

const BOOKS = [
  { title: "The Leader's Motivation", url: 'https://a.co/d/04Xwfn5a', authors: [JOHN], isbn: '9798250239189', datePublished: '2026-02-28' },
  { title: "The Leader's Foundation", url: 'https://a.co/d/01gAEQjT', authors: [JOHN], isbn: '9798250038140', datePublished: '2026-02-27' },
  { title: "The Leader's Direction", url: 'https://a.co/d/00bO2w6y', authors: [JOHN], isbn: '9798250116435', datePublished: '2026-02-27' },
  { title: 'Leading Through Conflict', url: 'https://a.co/d/0j5j0MQ8', authors: [JOHN, DENNIS], isbn: '9798247087939', datePublished: '2026-02-25' },
  { title: 'Three Paths Out of Paradise', url: 'https://a.co/d/0i8YWort', authors: [JOHN], isbn: '9781719480314', datePublished: '2018-06-10' },
  { title: 'Known and Called', url: 'https://a.co/d/059iI9JE', authors: [JOHN], isbn: '9798255932658', datePublished: '2026-04-11' },
  { title: 'A Heart Well Kept', url: 'https://a.co/d/0c1ytRgC', authors: [JOHN], isbn: '9798258404688', datePublished: '2026-04-22' },
  { title: 'When the Word Comes Worshiping', url: 'https://a.co/d/04Fu8ley', authors: [JOHN], isbn: '9798249749453', datePublished: '2026-02-25' },
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
      author: b.authors,
      url: b.url,
      isbn: b.isbn,
      datePublished: b.datePublished,
      bookFormat: 'https://schema.org/Paperback',
    },
  })),
}
