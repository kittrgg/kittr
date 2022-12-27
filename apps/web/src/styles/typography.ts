// These are utility font styles to make your life a little easier.
// Most of the fonts on kittr should closely resemble one of these.
// Need something that is slightly different?
// Use one of these utilities to style your text...
// and then overwrite any of the properties after.

/** Use the Montserrat font. */
export const montserrat = `
    font-family: "Montserrat", sans-serif;
`

/** Use the Barlow Condensed font. Most commonly used for headers. */
export const barlow = `
    font-family: "Barlow Condensed", serif;
`

/**
 * Included Properties:
 *
 * font-size: 36px;
 *
 * font-weight: 900;
 *
 * font-family: "Barlow Condensed", serif;
 *
 * letter-spacing: 3px;
 */
export const header1 = `
    font-size: 36px;
    font-weight: 900;
    ${barlow};
    letter-spacing: 3px;
`

/**
 * Included Properties:
 *
 * font-size: 22px;
 *
 * font-weight: 600;
 *
 * font-family: "Montserrat", sans-serif;
 *
 * letter-spacing: 2px;
 */
export const header2 = `
    font-size: 22px;
    font-weight: 600;
    ${montserrat};
    letter-spacing: 2px;
`

/**
 * Included Properties:
 *
 * font-size: 24px;
 *
 * font-weight: 700;
 *
 * font-family: "Barlow Condensed", serif;
 *
 * letter-spacing: 2px;
 */
export const header4 = `
    font-size: 24px;
    font-weight: 700;
    ${barlow};
    letter-spacing: 2px;
`

/**
 * Included Properties:
 *
 * font-size: 14px;
 *
 * letter-spacing: 1px;
 */
export const caption = `
    font-size: 14px;
    letter-spacing: 1px;
`

/**
 * Included Properties:
 *
 * font-size: 18px;
 *
 * font-family: "Montserrat", sans-serif;
 *
 * letter-spacing: 2px;
 */
export const paragraph = `
    font-size: 18px;
    ${montserrat};
    letter-spacing: 2px;
`
const styles = {
	montserrat,
	barlow,
	header1,
	header2,
	header4,
	caption
}

export default styles
