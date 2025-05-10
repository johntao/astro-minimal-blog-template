
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`

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
              // lineHeight: round(32 / 18),
              h1: {
                fontSize: em(48, 18),
              },
              h2: {
                fontSize: em(30, 18),
              },
              h3: {
                fontSize: em(24, 18),
              },
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
        //fontSize values copy from base
        // sm: {
        //   css: [
        //     {
        //       fontSize: rem(16),
        //       lineHeight: round(28 / 16),
        //       h1: {
        //         fontSize: em(36, 16),
        //       },
        //       h2: {
        //         fontSize: em(24, 16),
        //       },
        //       h3: {
        //         fontSize: em(20, 16),
        //       },
        //       code: {
        //         fontSize: em(14, 16),
        //       },
        //       'h2 code': {
        //         fontSize: em(21, 24),
        //       },
        //       'h3 code': {
        //         fontSize: em(18, 20),
        //       },
        //       pre: {
        //         fontSize: em(14, 16),
        //         lineHeight: round(24 / 14),
        //       },
        //       table: {
        //         fontSize: em(14, 16),
        //       },
        //     },
        //   ],
        // },
      }),
    },
  },
}