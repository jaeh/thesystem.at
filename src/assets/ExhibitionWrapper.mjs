export const View = ({
  img,
  description,
  exhibitionImages = [],
  video = false,
  title,
  presents,
  photographer = false,
  id = '',
}) =>
  div({ class: 'ExhibitionWrapper', id }, [
    PreviewImage(img),

    div({ class: 'sections' }, [
      h2(title),
      Presents(presents),
      section({ class: 'description' }, description),
    ]),

    exhibitionImages.length &&
      div({ class: 'imageWrapper' }, [
        ...exhibitionImages.map(i => Img(i)),
        video && VideoEmbed(video),
      ]),

    photographer &&
      div({ class: 'photographer' }, div(['Photos', video && ' / Video', ': ', photographer])),
  ])

export const style = vars => ({
  position: 'relative',
  width: '100%',
  display: 'inline-block',
  margin: '0 0 2em',

  '.Dots': {
    position: 'relative',
    display: 'inline-block',
  },

  a: {
    whiteSpace: 'inherit',
  },

  h2: {
    textTransform: 'uppercase',
    fontSize: '1.5em',
  },

  '.imageWrapper': {
    clear: 'both',

    img: {
      margin: '80px 5vw 0',
      width: '90vw',
      height: 'auto',
    },
  },

  '.photographer': {
    fontSize: '0.7em',
    width: '100%',
    float: 'left',
    margin: '1em 0 0 0',
    fontStyle: 'italic',

    '> div': {
      maxWidth: '1800px',
      width: '100%',
      margin: '0 auto',
      padding: '0 0 0 10vw',
    },
  },

  '.VideoEmbed': {
    height: '56vw',
    top: 0,
    right: 0,
    clear: 'both',
    margin: '80px 0 40px',
    padding: 0,
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    clear: 'none',

    img: {
      margin: '1vw 0 0',
      float: 'left',
    },

    '.imageWrapper': {
      width: '100%',
      maxWidth: '1800px',
      margin: '0 auto',

      img: {
        float: 'right',
        clear: 'both',
        width: '55%',
        marginLeft: '10vw',
        marginRight: '10vw',

        '&:nth-child(even)': {
          float: 'left',
        },
      },
      '.VideoEmbed': {
        float: 'right',
        '&:nth-child(even)': {
          float: 'left',
        },
      },
    },

    '.VideoEmbed': {
      height: '45vw',
      width: '80vw',
    },
  },
})
