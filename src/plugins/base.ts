import { PluginAPI } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import log from '../utils/log'

const basePlugin = plugin.withOptions<any>(
    function(options: any) { 
        return function(api: PluginAPI) {
            log.info('@tailwindcss/fluentui:plugin:base:handler')
            
            api.addBase(
                {
                    html:{
                        fontSize: api.theme('fontSize.base300'),
                        fontFamily: api.theme('fontFamily.base'),
                        fontWeight: api.theme('fontWeight.regular'),
                        lineHeight: api.theme('lineHeight.base300'),
                    }
                }
            )

            api.addComponents(
                {
                    '.divider':{
                        'border-top': `1px ${api.theme('colors.grey.50')} solid`,
                        'margin-top': api.theme('spacing.xl'),
                    }
                }
            )
        }
    },
    function(options: any) {
        log.info('@tailwindcss/fluentui:plugin:base:config')
        return {         
        }
    }
)

export = basePlugin