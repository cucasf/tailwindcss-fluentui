import { PluginAPI, PluginUtils } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import log from '../utils/log'
import { TypographyStyle } from '../types'

const typographyPlugin = plugin.withOptions<any>(
    function(options: any) { 
        return function(api: PluginAPI) {
            log.info('@tailwindcss/fluentui:plugin:typography:handler')

            api.matchUtilities<TypographyStyle>(
                {
                    typo: (value) => {
                        let typographyStyle = (value as TypographyStyle)
                        return {
                        'font-family': Array.isArray(typographyStyle.fontFamily) ? typographyStyle.fontFamily.join(', ') : typographyStyle.fontFamily,
                        'font-size': typographyStyle.fontSize,
                        'font-weight': typographyStyle.fontWeight,
                        'line-height': typographyStyle.lineHeight,
                    }},
                }, { values: api.theme('fuiTypography') }
            )
        }
    },
    function(options: any) {
        log.info('@tailwindcss/fluentui:plugin:typography:config')
        return { 
            theme: {
                fuiTypography:({ theme }: Pick<PluginUtils, 'theme'>) => ({
                    body1: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base300'),
                        fontWeight: theme('fontWeight.regular'),
                        lineHeight: theme('lineHeight.base300'),  
                    },
                    body1Strong: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base300'),
                        fontWeight: theme('fontWeight.semibold'),
                        lineHeight: theme('lineHeight.base300'),
                    },
                    body1Stronger: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base300'),
                        fontWeight: theme('fontWeight.bold'),
                        lineHeight: theme('lineHeight.base300'),
                    },
                    body2: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base400'),
                        fontWeight: theme('fontWeight.regular'),
                        lineHeight: theme('lineHeight.base400'),
                    },
                    caption1: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base200'),
                        fontWeight: theme('fontWeight.regular'),
                        lineHeight: theme('lineHeight.base200'),
                    },
                    caption1Strong: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base200'),
                        fontWeight: theme('fontWeight.semibold'),
                        lineHeight: theme('lineHeight.base200'),
                    },
                    caption1Stronger: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base200'),
                        fontWeight: theme('fontWeight.bold'),
                        lineHeight: theme('lineHeight.base200'),
                    },
                    caption2: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base100'),
                        fontWeight: theme('fontWeight.regular'),
                        lineHeight: theme('lineHeight.base100'),
                    },
                    caption2Strong: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base100'),
                        fontWeight: theme('fontWeight.semibold'),
                        lineHeight: theme('lineHeight.base100'),
                    },
                    subtitle1: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base500'),
                        fontWeight: theme('fontWeight.semibold'),
                        lineHeight: theme('lineHeight.base500'),
                    },
                    subtitle2: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base400'),
                        fontWeight: theme('fontWeight.semibold'),
                        lineHeight: theme('lineHeight.base400'),
                    },
                    subtitle2Stronger: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base400'),
                        fontWeight: theme('fontWeight.bold'),
                        lineHeight: theme('lineHeight.base400'),
                    },
                    title1: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.hero800'),
                        fontWeight: theme('fontWeight.semibold'),
                        lineHeight: theme('lineHeight.hero800'),
                    },
                    title2: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.hero700'),
                        fontWeight: theme('fontWeight.semibold'),
                        lineHeight: theme('lineHeight.hero700'),
                    },
                    title3: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.base600'),
                        fontWeight: theme('fontWeight.semibold'),
                        lineHeight: theme('lineHeight.base600'),
                    },
                    largeTitle: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.hero900'),
                        fontWeight: theme('fontWeight.semibold'),
                        lineHeight: theme('lineHeight.hero900'),
                    },
                    display: {
                        fontFamily: theme('fontFamily.base'),
                        fontSize: theme('fontSize.hero1000'),
                        fontWeight: theme('fontWeight.semibold'),
                        lineHeight: theme('lineHeight.hero1000'),
                    },
                })
            }
        }
    }
)

export = typographyPlugin