import { PluginAPI } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import log from '../utils/log'

const hcModePlugin = plugin.withOptions<any>(
    function(options: any) { 
        return function(api: PluginAPI) {
            log.info('tailwindcss-fluentui:plugin:hcMode:handler')
            
            let hcMode: string | [string, string] = api.config('hcMode', 'media')

            let hcCssVariant: string = '@media screen and (-ms-high-contrast: active)'          
            if (hcMode === 'class') {
                hcCssVariant = ':is(.hc &)'
            }
            else if (Array.isArray(hcMode)) {
                hcCssVariant = `:is(${hcMode[1]} &)`
            }

            api.addVariant('hc', hcCssVariant)
        }
    },
    function(options: any) {
        log.info('tailwindcss-fluentui:plugin:hcMode:config')
        return {      
            hcMode: 'media'   
        }
    }
)

export = hcModePlugin