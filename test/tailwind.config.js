/** @type {import('tailwindcss').Config} */

import {defaultFluentUIPluginOptions} from 'tailwindcss-fluentui/options'

const brand = {
  10: `#061724`,
  20: `#082338`,
  30: `#0a2e4a`,
  40: `#0c3b5e`,
  50: `#0e4775`,
  60: `#0f548c`,
  70: `#115ea3`,
  80: `#0f6cbd`,
  90: `#2886de`,
  100: `#479ef5`,
  110: `#62abf5`,
  120: `#77b7f7`,
  130: `#96c6fa`,
  140: `#b4d6fa`,
  150: `#cfe4fa`,
  160: `#ebf3fc`,
}


defaultFluentUIPluginOptions.colors.brand = brand


module.exports = {
  content: ['in/*.{html,js,css}'],
  darkMode: 'media',
  hcMode: 'class',
  theme: {
    extend: {
      colors: {brand: brand},
    },
  },
  plugins: [
    require('tailwindcss-fluentui')(defaultFluentUIPluginOptions),
    // require('tailwindcss-fluentui/plugins/alias')(defaultAliasPluginOptions),
    // require('tailwindcss-fluentui/plugins/typography'),
    // require('tailwindcss-fluentui/plugins/base'),
    // require('tailwindcss-fluentui/plugins/hcMode'),

  ],
}

