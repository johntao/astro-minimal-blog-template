
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`

const uniHeading = {
  fontSize: em(24, 18),
  marginTop: em(30, 24),
  marginBottom: em(12, 24),
  lineHeight: round(36 / 24),
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: [
            {
              maxWidth: '70ch',
            },
          ],
        },
        //fontSize values copy from lg
        sm: {
          css: [
            {
              fontSize: rem(16), //from base
              // fontSize: rem(18), //from lg
              h1: {
                fontSize: em(36, 18),
                marginBottom: em(12, 30),
                lineHeight: round(24 / 30),
              },
              h2: uniHeading,
              h3: uniHeading,
              h4: uniHeading,
              code: {
                fontSize: em(16, 18),
              },
              'h2 code': {
                fontSize: em(26, 30),
              },
              'h3 code': {
                fontSize: em(21, 24),
              },
              pre: {
                fontSize: em(16, 18),
              },
              table: {
                fontSize: em(16, 18),
              },
            },
          ],
        },
        lg: {
          css: [
            {
              lineHeight: round(24 / 14),
              p: {
                marginTop: em(16, 14),
                marginBottom: em(16, 14),
              },
              '[class~="lead"]': {
                lineHeight: round(28 / 18),
                marginTop: em(16, 18),
                marginBottom: em(16, 18),
              },
              blockquote: {
                marginTop: em(24, 18),
                marginBottom: em(24, 18),
                paddingInlineStart: em(20, 18),
              },
              h1: {
                marginTop: '0',
                marginBottom: em(16, 30),
                lineHeight: round(36 / 30),
              },
              h2: uniHeading,
              h3: uniHeading,
              h4: uniHeading,
              img: {
                marginTop: em(24, 14),
                marginBottom: em(24, 14),
              },
              picture: {
                marginTop: em(24, 14),
                marginBottom: em(24, 14),
              },
              video: {
                marginTop: em(24, 14),
                marginBottom: em(24, 14),
              },
              kbd: {
                paddingTop: em(2, 14),
                paddingInlineEnd: em(5, 14),
                paddingBottom: em(2, 14),
                paddingInlineStart: em(5, 14),
              },
              pre: {
                lineHeight: round(20 / 12),
                marginTop: em(20, 12),
                marginBottom: em(20, 12),
                borderRadius: rem(4),
                paddingTop: em(8, 12),
                paddingInlineEnd: em(12, 12),
                paddingBottom: em(8, 12),
                paddingInlineStart: em(12, 12),
              },
              ol: {
                marginTop: em(16, 14),
                marginBottom: em(16, 14),
                paddingInlineStart: em(22, 14),
              },
              ul: {
                marginTop: em(16, 14),
                marginBottom: em(16, 14),
                paddingInlineStart: em(22, 14),
              },
              li: {
                marginTop: em(4, 14),
                marginBottom: em(4, 14),
              },
              'ol > li': {
                paddingInlineStart: em(6, 14),
              },
              'ul > li': {
                paddingInlineStart: em(6, 14),
              },
              '> ul > li p': {
                marginTop: em(8, 14),
                marginBottom: em(8, 14),
              },
              '> ul > li > p:first-child': {
                marginTop: em(16, 14),
              },
              '> ul > li > p:last-child': {
                marginBottom: em(16, 14),
              },
              '> ol > li > p:first-child': {
                marginTop: em(16, 14),
              },
              '> ol > li > p:last-child': {
                marginBottom: em(16, 14),
              },
              'ul ul, ul ol, ol ul, ol ol': {
                marginTop: em(8, 14),
                marginBottom: em(8, 14),
              },
              dl: {
                marginTop: em(16, 14),
                marginBottom: em(16, 14),
              },
              dt: {
                marginTop: em(16, 14),
              },
              dd: {
                marginTop: em(4, 14),
                paddingInlineStart: em(22, 14),
              },
              hr: {
                marginTop: em(40, 14),
                marginBottom: em(40, 14),
              },
              table: {
                lineHeight: round(18 / 12),
              },
              'thead th': {
                paddingInlineEnd: em(12, 12),
                paddingBottom: em(8, 12),
                paddingInlineStart: em(12, 12),
              },
              'tbody td, tfoot td': {
                paddingTop: em(8, 12),
                paddingInlineEnd: em(12, 12),
                paddingBottom: em(8, 12),
                paddingInlineStart: em(12, 12),
              },
              figure: {
                marginTop: em(24, 14),
                marginBottom: em(24, 14),
              },
              figcaption: {
                fontSize: em(12, 14),
                lineHeight: round(16 / 12),
                marginTop: em(8, 12),
              },
            },
          ],
        },
      }),
    },
  },
}