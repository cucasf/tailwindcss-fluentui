import { Config, PluginCreator } from "tailwindcss/types/config";
import { fluetuiPluginOptions } from "../types";

type Plugin = {
    withOptions<T>(
      plugin: (options: T) => PluginCreator,
      config?: (options: T) => Partial<Config>
    ): { (options: T): { handler: PluginCreator; config?: Partial<Config> }; __isOptionsFunction: true }
    (plugin: PluginCreator, config?: Partial<Config>): { handler: PluginCreator; config?: Partial<Config> }
  }

  type PluginWithOptions<T> = { (options: T): { handler: PluginCreator; config?: Partial<Config> }; __isOptionsFunction: true }

  
export const fluentuiAliasPlugin: PluginWithOptions<fluetuiPluginOptions> = require("./alias");

export const fluentuiBasePlugin: PluginWithOptions<fluetuiPluginOptions> = require("./base");

export const fluetuiThemePlugin: PluginWithOptions<fluetuiPluginOptions> = require("./theme");

export const fluentuiHCModePlugin: PluginWithOptions<fluetuiPluginOptions> = require("./hcMode");

export const fluentuiTypographyPlugin: PluginWithOptions<fluetuiPluginOptions> = require("./typography");