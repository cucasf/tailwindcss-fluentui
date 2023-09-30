import { CSSRuleObject, Config, KeyValuePair, PluginAPI, PluginCreator } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import fluentUITheme from './theme'
import log from './utils/log'

import { fluetuiPluginOptions } from './types'
import { defaultFluentUIPluginOptions } from './options'

import { 
    fluentuiAliasPlugin,
    fluentuiBasePlugin,
    fluetuiThemePlugin,
    fluentuiHCModePlugin,
    fluentuiTypographyPlugin
 } from './plugins'
import { config } from 'process'


const fluetuiPlugin = plugin.withOptions<fluetuiPluginOptions>(
    function(options: fluetuiPluginOptions = defaultFluentUIPluginOptions) { return function(api: PluginAPI) {
        log.info('tailwindcss-fluentui:plugin:handler')
        let fuiplugins:  { handler: PluginCreator}[] = api.config('fuiplugins')

        if(fuiplugins)
        {
            for(let plugin of fuiplugins)
            {
                plugin.handler(api)
            }
        }
    }},
    
    function(options: fluetuiPluginOptions = defaultFluentUIPluginOptions) { 
        log.info('tailwindcss-fluentui:plugin:config')
        
        let themePlugin = fluetuiThemePlugin(options)
        let partialConfig:Partial<Config> = { theme: {}, fuiplugins: [themePlugin] }     
        Object.assign(partialConfig, themePlugin.config)

        if(options.plugins.hcMode)
        {
            let pluginHCMode = fluentuiHCModePlugin(options)
            partialConfig.fuiplugins?.push(pluginHCMode)
            Object.assign(partialConfig, pluginHCMode.config)

        }
        if(options.plugins.alias)
        {
            let aliasPlugin = fluentuiAliasPlugin(options)
            partialConfig.fuiplugins?.push(aliasPlugin)
            partialConfig['fuiAliasNames'] = aliasPlugin.config?.['fuiAliasNames']
            
            if(partialConfig.theme?.extend?.colors !== undefined)
            {
                Object.assign(partialConfig.theme.extend.colors, aliasPlugin.config?.theme?.extend?.colors)
            }   
        }
        if(options.plugins.typography)
        {
            let typographyPlugin = fluentuiTypographyPlugin(options)
            partialConfig.fuiplugins?.push(typographyPlugin)
            if(partialConfig.theme !== undefined)
            {
                Object.assign(partialConfig.theme, typographyPlugin.config?.theme)
            }

            Object.assign(partialConfig, typographyPlugin.config)

        }
        if(options.plugins.base)
        {
            let basePlugin = fluentuiBasePlugin(options)
            partialConfig.fuiplugins?.push(basePlugin)

        }
        return partialConfig
    }
)

export = fluetuiPlugin