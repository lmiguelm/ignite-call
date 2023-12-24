import { globalCss } from '@lmiguelm-ui/react'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    boxSizing: 'border-box',
    margin: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'roboto sans-serif'
  }
})