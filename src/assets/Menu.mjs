export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'Menu')

  const { class: className = 'Menu', collapse = true, menu, hash, root, theme } = props
  let { url } = props

  if (hash && !url.endsWith(hash)) {
    url += `#${hash}`
  }

  const fill = theme === 'dark' ? '#fafafa' : '#0c0c0c'

  return [
    nav(
      { className },
      ul([
        li(
          { class: 'Logo' },
          svg({ viewBox: '0 0 54 60' }, [
            path({ d: 'M36 0v10h9v40h-9v10h18V0zM0 0v60h18V50H9V10h9V0z', fill }),
          ]),
        ),
        ...menu.map(item => MenuItem({ ...item, url, root, collapse })),
      ]),
    ),
  ]
}

export const style = v => ({
  float: 'right',
  margin: '1.5em 0 0',
  position: 'relative',

  li: {
    float: 'left',
    margin: '0 .5em 0 0',

    '&.active': {
      '> a': {
        textDecoration: 'underline',
      },
    },
    a: {
      display: 'block',
    },
  },

  ul: {
    ul: {
      position: 'absolute',
      left: 0,
    },
  },

  [`@media screen and (min-width: ${v.widths.laptop})`]: {
    '.Logo': {
      display: 'none',
    },
  },
})

export const propTypes = {
  Menu: [
    { key: 'menu', type: 'array', required: true },
    { key: 'hash', type: 'string' },
    { key: 'url', type: 'string' },
    { key: 'collapse', type: 'boolean' },
    { key: 'class', type: 'string' },
  ],
}
