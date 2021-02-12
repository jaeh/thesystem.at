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
        'We believe in a literal definition of “common goods”',
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
    Slogan('We are timeless, have unlimited space and are always open to the public.'),

    Text([
      p([
        'The cultural mission of ',
        i('TheSystemCollective'),
        ' is the creation, procurement, research, dissemination and conservation of (digital) art for the ',
        b(Link({ to: 'https://artificialmuseum.com/', text: 'Artificial Museum' })),
        ', a time space continuum made ',
        b('manifest'),
        ', created to make art accessible to everyone, both at home and abroad.',
      ]),

      p([
        'Our method is the intermixture of virtual, imaginary worlds with reality,',
        ' allowing the free placement of artworks in public spaces.',
      ]),

      p(
        Quote(
          'Art is not the way to more democracy and equality, but art can be the impetus for a dialog.',
        ),
      ),
    ]),
  ]),

  Picture({
    src: '/img/artificialmuseum_preview_litto_hrlitto',
    type: 'jpg',
    height: 360,
    width: 1000,
  }),

  Content([
    Slogan("Don't ask, just do."),

    Text([
      p([
        'The first exhibition in the ARM: ',
        Quote('TheSystem - Phase.1 - 2020'),
        ' took place at the Yppenplatz in Vienna',
        ' and laid the foundation stone for the Artificial Museum.',
      ]),

      p([
        'Our long term responsibility is to expand the ARM,',
        ' offer young artists around the world unlimited space to make their art,',
        ' and make the results of our work accessible to a broad public.',
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
    Slogan('Agenda 2021'),

    Text([
      h3('February: Opening'),
      p('We opened the Artificial Museum on the 1st of February.'),

      h3('May - November: No Walls'),
      p([
        'The exhibition series "No Walls" aims',
        ' to create a decentralized but localized exhibition all over Vienna and other cities.',
      ]),

      Link({ to: '/nowalls/', text: 'More about No Walls' }),
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
