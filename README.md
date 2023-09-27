# TailwindCSS Fluent UI

Community Fluent UI Theme for Tailwind CSS.

Theme inspired from [Fluent UI v9](https://react.fluentui.dev)

Add typography, alias, base, High Contrast mode using build-in plugins.


## Installation

```
npm install -D tailwindcss-fluentui
```

## Usage

```js
/** @type {import('tailwindcss').Config} */

// Custom brand colors
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

import { defaultAliasPluginOptions } from 'tailwindcss-fluentui/plugins/options'

// Required to use custom colors in alias plugin
defaultAliasPluginOptions.colors.brand = brand

module.exports = {
  content: ['in/*.{html,js,css}'],
  darkMode: 'class',
  hcMode: 'class', // like darkMode
  theme: {
    extend: {
      // overwrite fluent ui theme brand colors
      colors: {brand: brand},
    },
  },
  plugins: [
    require('tailwindcss-fluentui'),
    require('tailwindcss-fluentui/plugins/alias')(defaultAliasPluginOptions),
    require('tailwindcss-fluentui/plugins/typography'),
    require('tailwindcss-fluentui/plugins/base'),
    require('tailwindcss-fluentui/plugins/hcMode'),
  ],
}


```
### Options

```js
{
    extend: true, // if false overwrite tailwindcss theme
}
```

defaultFluentUIPluginOptions  can be imported from **'tailwindcss-fluentui/plugins/options'**

## Plugins

### Alias

Create color aliases with [Fluent UI color design token alias](https://react.fluentui.dev/?path=/docs/theme-colors--page).

To reduce verbosity words "color", "colorPalette" and "colorStatus" are removed.



Example of generated color
```js
{
    'YellowForeground1': {
        DEFAULT: colors('yellow.shade30') ||
        dark: colors('yellow.tint10')
        hc: colors('hc.canvas')
    },
}
```

Usage
```html
    <button class="bg-BrandBackground rounding-medium ease-ease duration-normal     hover:bg-BrandBackgroundHover hover:active:bg-BrandBackgroundPressed ">My Brand Button</button>

```


#### Options


```js
{
    themes: ['light', 'dark', 'hc'], // set themes 
    colors: colors; // like theme color object
    alias: {
        statusSharedColors: ['red', 'green', 'darkOrange', ...],
        personaSharedColors:  ['darkRed', 'cranberry', 'pumpkin', ...],
        mappedStatusColors: ['danger','success','warning'],
        // Create custom alias or patch existing. 
        // value set example
        // 'YellowForeground1': color('yellow.shade30') || 'yellow.shade30'
        patch: {
             light: {
                'YellowForeground1': 'yellow.shade30',
                'RedForegroundInverted': 'red.tint20',
                ...
            },
            dark: {
                'RedForeground3': 'red.tint30',
                'RedBorder2': 'red.tint30',
                ...

            },
            hc: {
                'RedForegroundInverted': 'hc.canvasText',
                'GreenForegroundInverted': 'hc.canvasText',
                'YellowForegroundInverted': 'hc.canvasText',
            }
        }
    }
}
```

defaultAliasPluginOptions  can be imported from **'tailwindcss-fluentui/plugins/options'**

### Typography

Like [Fluent UI Typography](https://react.fluentui.dev/?path=/story/theme-typography--page)

CSS class use prefix **typo**.

```html
<p class="typo-body1">Fluent UI Theme is awesome</p>
```


* body1
* body1Strong
* body1Stronger
* body2
* caption1
* caption1Strong
* caption1Stronger
* caption2
* caption2Strong
* subtitle1
* subtitle2
* subtitle2Stronger
* title1
* title2
* title3
* largeTitle
* display

### Base

Set default typography body1 to html element.

### hcMode

Add High Contrast Mode. Works like [tailwindcss darkMode](https://tailwindcss.com/docs/dark-mode#basic-usage)

```js
module.exports = {
  ...
    
  hcMode: 'media', // 'class' or ['class', '[data-mode=hc]']
  
  ...
}
```
