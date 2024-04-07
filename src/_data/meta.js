module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'MoorDirect',
  siteDescription:
    'Website to document mooring locations for Scripture Union Sailing Holidays',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: {
    name: 'Chris Witham', // i.e. Lene Saile - page / blog author's name. Must be set.
    avatar: '/favicon.png',
    email: 'hello@cehwitham.com', // i.e. hola@lenesaile.com - email of the author
    website: 'https://www.cehwitham.com' // i.e. https.://www.lenesaile.com - the personal site of the author
  },
  creator: {
    name: 'Chris', // i.e. Lene Saile - creator's (developer) name.
    email: 'hello@cehwitham.com',
    website: 'https://www.cehwitham.com',
    social: ''
  },
  themeColor: '#3498db', //  Manifest: defines the default theme color for the application
  themeBgColor: '#2980b9', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  opengraph_default: '/assets/images/template/opengraph-default.jpg', // fallback/default meta image
  opengraph_default_alt:
    '', // alt text for default meta image
  blog: {
    // RSS feed
    name: 'Moor Direct',
    description:
      'Helping Scripture Union sailing holidays find a mooring.',
    // feed links are looped over in the head. You may add more to the array.
    feedLinks: [
      {
        title: 'Atom Feed',
        url: '/feed.xml',
        type: 'application/atom+xml'
      }
    ],
    // Tags
    tagSingle: 'Tag',
    tagPlural: 'Tags',
    tagMore: 'More tags:',
    // pagination
    paginationLabel: 'Blog',
    paginationPage: 'Page',
    paginationPrevious: 'Previous',
    paginationNext: 'Next',
    paginationNumbers: true
  },
  details: {
    aria: 'section controls',
    expand: 'expand all',
    collapse: 'collapse all'
  },
  navigation: {
    ariaTop: 'Main',
    ariaBottom: 'Complementary',
    ariaPlatforms: 'Platforms',
    // activate alternative mobile menu with drawer
    drawerNav: false,
    navLabel: 'Menu'
  },
  themeSwitch: {
    title: 'Theme',
    light: 'light',
    dark: 'dark',
    initial: 'select'
  },
  greenweb: {
    // this goues into src/common/greenweb.njk
    providers: {
      // if you want to add more than one, edit the array directly.
      domain: 'netlify.com',
      service: 'cdn'
    },
    credentials: {
      // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
      domain: '',
      doctype: '',
      url: ''
    }
  },
  viewRepo: {
    // this is for the view/edit on github link. The value in the package.json will be pulled in.
    allow: true,
    infoText: 'View this page on GitHub'
  },
  easteregg: true
};
