import { injectGlobal } from 'styled-components'
import normalizeStyled from 'styled-normalize'

import baseStyles from './baseStyles'


export default () => injectGlobal`
  ${''/* @import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700&subset=cyrillic); */}
  ${normalizeStyled}
  ${baseStyles}
`
