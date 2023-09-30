import { CSSRuleObject, Config, KeyValuePair, PluginAPI, PluginCreator } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import fluentUITheme from './theme'
import log from './utils/log'

import { fluetuiPluginOptions } from './types'
import { defaultFluentUIPluginOptions } from './plugins/options'


let xRe =  /^[x]+/

const fluetuiPlugin = plugin.withOptions<fluetuiPluginOptions>(
    function(options: fluetuiPluginOptions = defaultFluentUIPluginOptions) { return function(api: PluginAPI) {
        log.info('tailwindcss-fluentui:plugin:handler')
        if(options.cssProperties)
        {
            let cssProperties:KeyValuePair = {}

            for (const [key, value] of Object.entries(fluentUITheme)) {
                if (key === 'extend' || key == 'colors') continue

                let cssKey:string = ''

                switch (key) {
                    case 'transitionTimingFunction':
                        cssKey = 'curve'
                        break;
                    case 'transitionDuration':
                        cssKey = 'duration'
                        break;
                    default:
                        cssKey = key
                        break;
                }
                if (typeof value === 'object') {
                    for (const [subKey, subValue] of Object.entries(value)) {
                        let xMatch = subKey.match(xRe) ?? [""]
                        let cssSubKey = subKey.slice(0, xMatch[0].length + 1).toUpperCase() + subKey.slice(xMatch[0].length + 1)

                        if (key === 'spacing')
                        {
                            cssProperties[`--${cssKey}Horizontal${cssSubKey}`] = api.theme(`${key}.${subKey}`, subValue)
                            cssProperties[`--${cssKey}Vertical${cssSubKey}`] = api.theme(`${key}.${subKey}`, subValue)
                        }
                        else if(key === 'transitionTimingFunction' && subKey.startsWith('ease'))
                        {
                            cssProperties[`--${cssKey}Easy${cssSubKey}`] = api.theme(`${key}.${subKey}`, subValue)
                        }
                        else
                        {
                            cssProperties[`--${cssKey}${cssSubKey}`] = api.theme(`${key}.${subKey}`, subValue)
                        }

                    }
                }
            }
            api.addBase({
                ':root':cssProperties
            })
        }

    }},
    
    function(options: fluetuiPluginOptions = defaultFluentUIPluginOptions) { 
        log.info('tailwindcss-fluentui:plugin:config')
        
        let partialConfig:Partial<Config> = { theme: {} }     

        partialConfig.theme = options?.extend ? { extend: fluentUITheme } : fluentUITheme

        // if (options.plugins?.typography) {
        //     partialConfig.plugins?.push(typographyPlugin)
        // }

        return partialConfig
    }
)

export = fluetuiPlugin