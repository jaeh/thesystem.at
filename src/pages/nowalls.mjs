export const state = {
  logotext: 'NoWalls',
}

export const View = () => [
  Content([
    Slogan([
      'No walls for …',
      br(),
      'Artists,',
      br(),
      'Education,',
      br(),
      'Science',
      br(),
      'and',
      br(),
      'Museums',
    ]),

    Text([
      p([
        'The exhibition series “No Walls for ...” creates',
        ' decentralized, localized art experiences all over Vienna and beyond.',

        p([
          'We rely on the active participation of the urban population,',
          ' turning public spaces into an art exhibition housing independent and contemporary art.'
        ]),

        p([
          i('TheSystemCollective'),
          ' will cooperate with artists, collectives, museums and institutions,',
          ' to conceptualize and implement diverse art practices as 3d experiences.',
        ]),
        p('Each created artwork will become a part of public space.'),

        Quote('Boundaries lead to the decline of art and culture. The profit motive establishes and reinforces boundaries.'),
      ]),
    ]),
  ]),

  Content([
    Slogan('No Walls For Artists'),

    Text([
      p([
        'The Artificial Museum features chosen artists for a period of one month.',
        ' Starting on the 1st of May 2021, each featured work can be positioned all around the world.',
      ]),
      p([
        'First featured artist: ',
        Link({ text: 'Barbis Ruder', to: 'https://barbisruder.com' }),
        ' more details coming soon.',
      ]),
    ]),
  ]),

  Content([
    Slogan('No Walls for Education / Science'),

    Text([
      p([
        'We will cooperate with universities in Vienna, organizing workshops and specific expos,',
        ' as well as creating collaborative concepts with classes from the participating institutions.',
      ]),
    ]),
  ]),

  Content([
    Slogan('No Walls for Museums'),

    Text([
      p([
        'Using the front doors of Museums to showcase conceptual art pieces',
        " that represent the museum's art collection.",
      ]),
      p([
        'Beginning on October 1st ("Lange Nacht der Museen", "Tag des Museums") and',
        ' ongoing until November 9th ("Visit an Art Museum day"), ',
        Quote('No Walls for Museums'),
        ' will position artworks around museums and close to',
        ' art exhibitions, institutions and other places of art and culture.',
      ]),
    ]),
  ]),
]
