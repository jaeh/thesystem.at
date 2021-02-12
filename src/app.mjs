export const state = {
  title: 'TheSystemCollective',
  description:
    'A syndicate of independent artists, makers, programmers, engineers, philosophers, activists, and scientists, collectively using art and technology to transform our world.',
  image: 'https://thesystem.at/thesystem_preview_image.jpg',

  pageClass: 'dark',

  menu: [
    { to: '/', text: 'about' },
    { to: '/nowalls/', text: 'no walls' },
    { to: '/phase1/', text: 'phase.1' },
    // { to: '/#partners', text: 'partners' },
    // { to: '/contact/', text: 'contact' },
  ],

  collectives: [
    'Dachsbau',
    { to: 'https://metalab.at', text: 'Metalab' },
    { to: 'http://mysoundofmusic.at', text: 'My Sound of Music' },
    { to: 'https://notgalerie.at', text: 'Notgalerie' },
    { to: 'https://www.facebook.com/sandkastensyndikat/', text: 'Sandkasten Syndikat' },
    { to: 'https://setzkastenwien.at/', text: 'Setzkasten Wien' },
    'Villa Schapira',
    { to: 'http://mysoundofmusic.at', text: 'Zirkus Mops' },
  ],

  artists: [
    {
      text: 'Adam Lebesmühlbacher',
      to: 'http://www.mysoundofmusic.at',
    },
    {
      text: 'Chora Malik',
      to: 'https://setzkastenwien.at/',
    },
    {
      text: 'Litto / Daniela Weiss',
      to: 'https://litto.work',
    },
    {
      text: 'Dagmar Rohm',
      to: 'http://dagmarrohm.at/',
    },
    {
      text: 'David Wuchte',
      to: 'https://wuchte.at',
    },
    {
      text: 'Elet.Irrlicht',
      to: 'https://elet.cc/',
    },
    {
      text: 'Guillermo Tellechea',
      to: 'https://setzkastenwien.at/',
    },
    {
      text: 'Heinz Seidenbusch',
      to: 'https://heinzseidenbusch.com/',
    },
    {
      text: 'Jascha Ehrenreich',
      to: 'https://jaeh.at',
    },
    {
      text: 'Jay Vaughan',
      to: 'https://soundcloud.com/ibisum/tracks',
    },
    'Marco Otoya',
    'Markus Liszt',
    {
      text: 'Meks',
      to: 'https://soundcloud.com/user-945933947',
    },
    {
      text: 'Miss Bubblebliss',
      to: 'http://missbubblebliss.at/',
    },
    {
      text: 'Noémi Kiss',
      to: 'http://noemikiss.at/',
    },
    {
      text: 'Oktogon / Sebastian Konzett',
      to: 'https://www.instagram.com/saveokto/',
    },
    {
      text: 'Reinhold Zisser',
      to: 'http://reinholdzisser.com/',
    },
    {
      text: 'Selina Nowak',
      to: 'http://www.mysoundofmusic.at',
    },
    {
      text: 'Stefan Stürzer',
      to: 'https://absturz.info/',
    },
    {
      text: 'Stefan Voglsinger',
      to: 'https://setzkastenwien.at/',
    },
    {
      text: 'Zirkus Mops',
      to: 'http://www.mysoundofmusic.at',
    },
  ],

  team: [
    { name: 'LITTO', job: ['ARTISTIC DIRECTION', '3D ART, DESIGN'], url: 'https://litto.work' },
    { name: 'JASCHA', job: ['PROGRAMMING', '3D ART'], url: 'https://jaeh.at' },
    { name: 'DAVID', job: ['3D ART'], url: 'https://wuchte.at' },
  ],

  seo: {
    name: 'TheSystemCollective',
    url: 'https://thesystem.at/',
    about:
      'TheSystemCollective is a syndicate of artists, makers, programmers, engineers, philosophers, activists, and scientists, collectively using art and technology to transform our world.',
    // image: `https://thesystem.at/thesystem-preview.jpg`,
    author: [
      {
        '@type': 'person',
        name: 'Jascha Ehrenreich',
        jobTitle: 'Technomancer',
        image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
        url: 'https://jaeh.at',
      },
      {
        '@type': 'person',
        name: 'Daniela Weiss',
        additionalName: 'Litto',
        jobTitle: 'Artistic Direction',
        // image: 'https:/',
        url: 'https://litto.work',
      },
    ],
  },
}
