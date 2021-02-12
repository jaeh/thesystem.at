export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { logotext, menu, root, theme, hash, url } = props

  const fill = theme === 'dark' ? '#fafafa' : '#0c0c0c'

  return header(
    { class: 'Header' },
    div({ class: 'Container' }, [
      menu && Menu({ url, hash, root, menu }),

      Link({ class: 'Branding', to: root }, [
        svg({ viewBox: '0 0 54 60' }, [
          path({ d: 'M36 0v10h9v40h-9v10h18V0zM0 0v60h18V50H9V10h9V0z', fill }),
        ]),
        h1('TheSystem'),
        h2(logotext),
      ]),
    ]),
  )
}

export const style = v => ({
  width: '100%',
  margin: '3em 0 2em',
  zIndex: 1,

  '.Container': {
    maxWidth: v.maxPageWidth,
    margin: '0 auto',
  },

  '.Menu': {
    backgroundColor: v.background.dark,
    bottom: 'auto',
    margin: 0,
    padding: '0.5em 0.25em 0.2em 0',
    position: 'fixed',
    textAlign: 'center',
    top: 0,
    width: '100vw',
    zIndex: 2,

    '.light &&': {
      backgroundColor: v.background.light,
    },
  },

  a: {
    textDecoration: 'none',
  },

  svg: {
    height: '3.3em',
    width: 'auto',
    float: 'left',
    margin: '0.25em',
  },

  'h1, h2': {
    lineHeight: 1,
    padding: 0,
    fontWeight: 500,
  },
  h1: {
    fontSize: '2em',
  },
  h2: {
    fontSize: '1.7em',
  },

  [`@media screen and (min-width: ${v.widths.laptop})`]: {
    position: 'fixed',
    backgroundColor: v.background.dark,
    margin: 0,
    top: 0,

    '.light &&': {
      backgroundColor: v.background.light,
    },

    '.Branding': {
      float: 'left',
    },
    '.Menu': {
      float: 'right',
      margin: '0.5em 0 0',
      position: 'relative',
      textAlign: 'right',
      width: 'auto',
    },
  },
})

export const propTypes = {
  Header: [
    { key: 'logo', type: 'string' },
    { key: 'logotext', type: 'string' },
    { key: 'menu', type: 'array' },
  ],
}
