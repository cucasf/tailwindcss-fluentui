import { PluginAPI } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import log from '../utils/log'
import { fluetuiPluginOptions } from '../types'

const fluentuiBasePlugin = plugin.withOptions<fluetuiPluginOptions>(
    function(options: fluetuiPluginOptions) { 
        return function(api: PluginAPI) {
            log.info('tailwindcss-fluentui:plugin:base:handler')
            let hasCSSProperties = options.cssProperties || false
            api.addBase(
                {
                    'html':{
                        'font-size': hasCSSProperties ? 'var(--fontFamilyBase)' : api.theme('fontSize.base300'),
                        'font-family': hasCSSProperties ? 'var(--fontSizeBase300)' : api.theme('fontFamily.base'),
                        'font-weight': hasCSSProperties ? 'var(--fontWeightRegular)' : api.theme('fontWeight.regular'),
                        'line-height': hasCSSProperties ? 'var(--lineHeightBase300)' : api.theme('lineHeight.base300'),
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
                        'background-color': hasCSSProperties ? 'var(--colorNeutralBackground1)' : api.theme('colors.NeutralBackground1.DEFAULT'),
                        'color':  hasCSSProperties ? 'var(--colorNeutralForeground1)' : api.theme('colors.NeutralForeground1.DEFAULT'),
                        'border': hasCSSProperties ? 'var(--strokeWidthThin) solid var(--colorNeutralStroke1)' : `${api.theme('strokeWidth.thin')} solid ${api.theme('colors.NeutralStroke1.DEFAULT')}`,
                        'outline-style': 'none',
                        'min-width': '96px',
                        'font-family':  hasCSSProperties ? 'var(--fontFamilyBase)' : api.theme('fontFamily.base'),
                        'font-size':  hasCSSProperties ? 'var(--fontSizeBase300)' : api.theme('fontSize.base300'),
                        'font-weight':  hasCSSProperties ? 'var(--fontWeightSemibold)' : api.theme('fontWeight.semibold'),
                        'line-height':  hasCSSProperties ? 'var(--lineHeightBase300)' : api.theme('lineHeight.base300'),
                        'transition-duration': hasCSSProperties ? 'var(--durationFaster)' : api.theme('transitionDuration.faster'),
                        'transition-property': 'background, border,color',
                        'transition-timing-function':  hasCSSProperties ? 'var(--curveEasyEase)' : api.theme('transitionTimingFunction.ease'),
                        'border-radius': hasCSSProperties ? 'var(--borderRadiusMedium)' : api.theme('borderRadius.medium'),
                        'padding': hasCSSProperties ? 'var(--spacingVerticalXXS) var(--spacingHorizontalM)' : `${api.theme('spacing.xs')} ${api.theme('spacing.m')}`,
                    },

                    'button:hover': {
                        'background-color': hasCSSProperties ? 'var(--colorNeutralBackground1Hover)' : api.theme('colors.NeutralBackground1Hover.DEFAULT'),
                    },

                    'button:hover:active': {
                        'background-color': hasCSSProperties ? 'var(--colorNeutralBackground1Pressed)' :api.theme('colors.NeutralBackground1Pressed.DEFAULT'),
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
    function(options: fluetuiPluginOptions) {
        log.info('tailwindcss-fluentui:plugin:base:config')
        return { }
    }
)

export = fluentuiBasePlugin