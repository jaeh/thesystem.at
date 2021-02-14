export const vars = {
  text: {
    dark: '#f0f0f0',
    light: '#0f0f0f',
  },

  background: {
    dark: '#0f0f0f',
    light: '#f0f0f0',
  },

  neutral: '#0f0f0f',

  paddingLeft: '25px',

  link: {
    dark: '#f0f0f0',
    light: '#0f0f0f',

    hover: {
      dark: '#fff',
      light: '#000',
    },
  },

  widths: {
    tablet: '500px',
    laptop: '730px',
    desktop: '940px',
    agency: '1200px',
  },

  maxPageWidth: '1400px',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '@font-face': {
      family: 'notosans',
      url: 'https://static.artificialmuseum.com/font/',
      styles: ['normal', 'italic'],
      weights: [400, 500],
    },

    body: {
      fontSize: '20px',
      fontFamily:
        'notosans, ubuntu, "Segoe UI", roboto, "Lucida Grande", "Helvetica Neue", helvetica, arial, sans-serif',
      overflowX: 'initial',
      lineHeight: 1.2,
    },

    a: {
      color: v.link.dark,

      '.light &&': {
        color: v.link.light,

        '&:hover': {
          color: v.link.hover.light,
        },
      },

      '&:hover': {
        color: v.link.hover.dark,
      },
    },

    'h2, h3': {
      fontWeight: 500,
    },

    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
    },

    '#Magic': {
      backgroundColor: v.background.dark,
      color: v.text.dark,

      '&.light': {
        backgroundColor: v.background.light,
        color: v.text.light,
      },

      '.icon': {
        width: '1em',
      },
    },

    '.Page': {
      margin: '0 auto',
      maxWidth: v.maxPageWidth,
    },

    '.Wrapper': {
      width: '100%',
      maxWidth: 'inherit',
    },

    '.Menu': {
      float: 'none',
      textAlign: 'center',

      li: {
        margin: '0 0 0 0.5em',
      },
    },

    '.Phase1': {
      margin: '0 1em 3em',

      '> div': {
        display: 'inline-block',
      },

      h2: {
        paddingTop: 0,
      },

      '.address': {
        margin: '0 0 1em',
      },

      img: {
        maxWidth: '100%',
        maxHeight: '100%',
        width: '100%',
        height: 'auto',
      },

      [`@media screen and (min-width: ${vars.widths.laptop})`]: {
        body: {
          fontSize: '22px',
        },

        '.address': {
          float: 'left',
          width: '34vw',
        },
        img: {
          float: 'right',
          width: '35vw',
        },
      },
    },

    '.month-title': {
      margin: '2em 5vw',
      fontWeight: '700',
    },

    '.sections': {
      display: 'inline-block',
      margin: '0 2em',

      h2: {
        padding: 0,
      },

      section: {
        clear: 'both',
        margin: '0 3vw 1em 0',
      },

      '.description, .location': {
        fontSize: '0.9em',
      },
    },

    '.subcredits': {
      width: '80%',
      maxWidth: '500px',

      img: {
        height: '100px',
        '&:first-child': {
          maxWidth: '66%',
        },
        '&:last-child': {
          maxWidth: '33%',
        },
      },
    },

    '.NoSpy': {
      left: 'auto',
      right: '0.5em',

      '.icon': {
        left: 'auto',
        right: 0,
        width: '1em',
      },

      '.ShowHide': {
        left: 'auto',
        right: 0,
        bottom: '0.5em',
        height: '0.8em',
      },

      '.Container': {
        right: 0,
        left: 'auto',
        fontSize: '0.7em',
      },
    },

    '.LightSwitch': {
      right: '0.5em',
      left: 'auto',
      bottom: '2em',
    },

    [`@media screen and (min-width: ${v.widths.tablet})`]: {
      body: {
        fontSize: '22px',
      },

      '.Content.Physical': {
        padding: '4em 0 8em 2em',
      },

      '.sections': {
        section: {
          margin: '0 4vw 0 0',
        },
        '.presents, .location': {
          marginBottom: '2em',
        },
        '.description': {
          marginTop: 0,
        },
      },
    },

    [`@media screen and (min-width: ${v.widths.laptop})`]: {
      '.sections': {
        float: 'right',
        width: '47%',

        section: {
          clear: 'none',
        },
      },

      '.Page': {
        padding: '5em 0',
      },
    },

    [`@media screen and (min-width: ${v.widths.desktop})`]: {
      '.sections': {
        section: {
          margin: '0 2em 0 0',
          width: 'auto',
        },
      },
    },
  }
}
