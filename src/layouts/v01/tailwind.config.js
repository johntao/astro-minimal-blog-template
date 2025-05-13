
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`

const uniHeading = {
  fontSize: em(24, 18),
  marginTop: em(40, 24),
  marginBottom: em(16, 24),
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
        //find a way to import default configs
        sm: {
          css: [
            {
              fontSize: rem(16), //from base
              // fontSize: rem(18), //from lg
              // lineHeight: round(32 / 18),
              h1: {
                fontSize: em(48, 18),
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
                // lineHeight: round(28 / 16),
              },
              table: {
                fontSize: em(16, 18),
              },
            },
          ],
        },
      }),
    },
  },
}