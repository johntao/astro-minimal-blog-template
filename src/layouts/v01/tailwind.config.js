
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        sm: {
          css: [
            {
              fontSize: rem(16),
              lineHeight: round(28 / 16),
            },
          ],
        },
      }),
    },
  },
}