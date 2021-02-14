export const state = {
  logotext: 'Collective',
}

export const View = ({ artists, collectives, team }) => [
  Picture({ src: '/img/hero', type: 'jpg', height: 900, width: 1200 }),

  Content([
    Slogan("We don't need space, time is irrelevant, objects stay as useful as the user."),

    Text([
      p([
        'We are ',
        i('TheSystemCollective'),
        ', a syndicate of independent',
        ' artists, makers, programmers, engineers, philosophers, activists and scientists,',
        ' collectively using art and technology to transform our world.',
      ]),
      p([
        'We believe in a literal definition of ',
        Quote('common goods'),
        ' and transform public space into a bearer of art,',
        ' turning those works of art into an integral part of urban culture.',
      ]),
    ]),
  ]),

  Picture({
    class: 'Pic',
    src: '/img/artificialmuseum_map',
    type: 'jpg',
    height: 500,
    width: 1000,
  }),

  Content([
    Slogan(['We are timeless,', ' have unlimited space and are always open to the public.']),

    Text([
      p([
        'The cultural mission of ',
        i('TheSystemCollective'),
        ' is the creation, procurement, research, dissemination and conservation of',
        ' (digital) art for the ',
        Link({ text: 'Artificial Museum', to: 'https://artificialmuseum.com' }),
        ' a time space continuum made manifest, created',
        ' to make art accessible to everyone, both at home and abroad.',
      ]),
      p([
        'Our method is the intermixture of virtual worlds with reality,',
        ' allowing the free placement of artworks in public spaces.',
      ]),

      p([
        Cite({
          quote: 'Art cannot save people, but the means of art can make a dialogue possible.',
          author: 'Günther Uecker',
        }),
      ]),
    ]),
  ]),

  Picture({
    src: '/img/artificialmuseum_preview_litto_hrlitto',
    type: 'jpg',
    height: 360,
    width: 1000,
  }),

  Content([
    Slogan("Don't ask, just act."),

    Text([
      p([
        'The first exhibition in the ARM: “',
        Link({ to: '/phase1/', text: 'TheSystem - Phase.1 - 2020' }),
        '” took place at the Yppenplatz in Vienna and laid the foundation stone for the Artificial Museum.',
      ]),

      p([
        'Our long term responsibility is to scale the walls of',
        ' institutionalized art exhibits and galleries,',
        ' using public spaces all around the world as exhibition grounds,',
        ' turning well known as well as almost forgotten places into stages for living artists.',
      ]),

      p([
        'The resulting works are to be exhibited in open virtual space with',
        ' expanded optimism and resilience facing the new era.',
      ]),

      p(
        Quote(
          'Boundaries lead to the death of art and culture. The profit motive creates boundaries.',
        ),
      ),

      // p([
      //   'We rely on free participation in public spaces,',
      //   ' closed events get amplified with freely accessible works of art,',
      //   ' both for the exhibitors and the visitors.',
      // ]),
    ]),
  ]),

  Picture({
    src: '/img/artificialmuseum_preview_zirkusmops_metzgereimops',
    type: 'jpg',
    height: /* 360 */ 450,
    width: 1000,
  }),

  Content([
    Slogan('No Walls for …'),

    Text([
      p([
        'Manifesting ourselves in the form of artistic interventions and expanded exhibitions',
        ' in public space, we focus on making art accessible to all inhabitants',
        ' and social groups in and beyond the city of Vienna.',
      ]),

      h3('No walls, but open imagination.'),

      p([
        'An encouragement for new experimental creations, or 3D re-creations,',
        ' to be exhibited within the frame of sharing practices and radical philosophies.',
      ]),

      p([Link({ to: '/nowalls/', text: 'More about No Walls' })]),
    ]),
  ]),

  Picture({
    src: '/img/artificialmuseum_preview_stefansturzer_systemsandhumans',
    type: 'jpg',
    height: 360,
    width: 1000,
  }),

  Content([Slogan('Team'), Text(Team(team))]),

  Content([
    Slogan('Partners'),

    Text([
      div('We are proud to work with the following institutions, collectives and artists.'),

      List({ list: collectives, title: 'Collectives' }),

      List({ list: artists, title: 'Artists' }),

      Partners(),
    ]),
  ]),
]
