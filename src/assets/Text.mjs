export const View = children => div({ class: 'Text' }, children)

export const style = v => ({
  clear: 'both',
  padding: '0 1em 0',
  maxWidth: '900px',

  [`@media screen and (min-width: ${v.widths.laptop})`]: {
    padding: 0,
  },
})
