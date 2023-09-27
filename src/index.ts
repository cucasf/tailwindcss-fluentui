import { Config, PluginAPI, PluginCreator } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import { fluentUITheme } from './theme'
import log from './utils/log'

import { fluetuiPluginOptions } from './types'
import { defaultFluentUIPluginOptions } from './plugins/options'



const fluetuiPlugin = plugin.withOptions<fluetuiPluginOptions>(
    function(options: fluetuiPluginOptions = defaultFluentUIPluginOptions) { return function(api: PluginAPI) {
        log.info('@tailwindcss/fluentui:plugin:handler')
    }},
    
    function(options: fluetuiPluginOptions = defaultFluentUIPluginOptions) { 
        log.info('@tailwindcss/fluentui:plugin:config')
        
        let partialConfig:Partial<Config> = { theme: {} }     

        partialConfig.theme = options?.extend ? { extend: fluentUITheme } : fluentUITheme

        // if (options.plugins?.typography) {
        //     partialConfig.plugins?.push(typographyPlugin)
        // }

        return partialConfig
    }
)

export = fluetuiPlugin