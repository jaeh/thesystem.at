export const View = team =>
  ul(
    { class: 'Team' },
    team.map(member => li([h3(a({ href: member.url }, member.name)), member.job.map(j => p(j))])),
  )

export const style = v => ({
  display: 'inline-block',

  li: {
    border: '1px solid',
    height: '50vw',
    margin: '0 2vw 2vw 0',
    maxHeight: '200px',
    maxWidth: '200px',
    textAlign: 'center',
    width: '50vw',

    h3: {
      fontSize: '20px',
      lineHeight: '25px',
      margin: '0.2em 0',
    },

    p: {
      fontSize: '15px',
      lineHeight: '1.3em',
      margin: 0,
    },
  },

  [`@media screen and (min-width: ${v.widths.laptop})`]: {
    li: {
      float: 'left',
      width: '23vw',
      height: '23vw',
    },
  },
})
