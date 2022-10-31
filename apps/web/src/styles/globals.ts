import { createGlobalStyle } from "styled-components"
import colors from "./colors"

export default createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, input, textarea, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, main, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}


html {
  background-color: ${colors.middle};
  color: ${colors.white};
}

em {
  font-style: italic;
}

html {
  overflow-x: hidden;
}

body {
  // This is because the desktop footers for Venatus try to buy themselves space.
  // We will handle this manually if we need to.
  margin-bottom: 0 !important;
}

// Make sure that Venatus ads are always a minimum of 320px wide.
[data-ref="vm-preloader"] {
  min-width: 320px !important
}
`
