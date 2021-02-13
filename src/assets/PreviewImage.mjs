export const View = p => Img({ class: 'PreviewImage', ...p })

export const style = vars => ({
  margin: '5em 1em 3em 0',
  float: 'right',
  position: 'relative',
  width: '90%',
  height: 'auto',
  zIndex: 1,

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    width: '40%',
  },
})
