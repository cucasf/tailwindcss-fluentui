import { PluginAPI } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import log from '../utils/log'
import { themes } from './options/defaultAliasPluginOptions'

const basePlugin = plugin.withOptions<any>(
    function(options: any) { 
        return function(api: PluginAPI) {
            log.info('tailwindcss-fluentui:plugin:base:handler')
            
            api.addBase(
                {
                    'html':{
                        'font-size': api.theme('fontSize.base300'),
                        'font-family': api.theme('fontFamily.base'),
                        'font-weight': api.theme('fontWeight.regular'),
                        'line-height': api.theme('lineHeight.base300'),
                    },

                    'button': {
                        'align-items': 'center',
                        'box-sizing': 'border-box',
                        // 'display': inline-flex,
                        'justify-content': 'center',
                        'text-decoration-line': 'none',
                        'vertical-align': 'middle',
                        'margin':' 0px',
                        'overflow': 'hidden',
                        'background-color': api.theme('colors.NeutralBackground1.DEFAULT'),
                        'color': api.theme('colors.NeutralForeground1.DEFAULT'),
                        'border': `${api.theme('strokeWidth.thin')} solid ${api.theme('colors.NeutralStroke1.DEFAULT')}`,
                        'outline-style': 'none',
                        'min-width': '96px',
                        'font-family':api.theme('fontFamily.base'),
                        'font-size':api.theme('fontSize.base300'),
                        'font-weight':api.theme('fontWeight.semibold'),
                        'line-height':api.theme('lineHeight.base300'),
                        'transition-duration': api.theme('transitionDuration.faster'),
                        'transition-property': 'background, border,color',
                        'transition-timing-function': api.theme('transitionTimingFunction.ease'),
                        'border-radius': api.theme('borderRadius.medium'),
                        'padding': `${api.theme('spacing.xs')} ${api.theme('spacing.m')}`,
                    },

                    'button:hover': {
                        'background-color': api.theme('colors.NeutralBackground1Hover.DEFAULT'),
                    },

                    'button:hover:active': {
                        'background-color': api.theme('colors.NeutralBackground1Pressed.DEFAULT'),
                    }
                }
            )

            api.addComponents(
                {
                    '.divider': {
                        'border-top': `1px ${api.theme('colors.grey.50')} solid`,
                        'margin-top': api.theme('spacing.xl'),
                    }
                }
            )
        }
    },
    function(options: any) {
        log.info('tailwindcss-fluentui:plugin:base:config')
        return { }
    }
)

export = basePlugin