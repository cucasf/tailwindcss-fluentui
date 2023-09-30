import { Config, PluginCreator } from "tailwindcss/types/config";
import { fluetuiPluginOptions } from "../types";
type PluginWithOptions<T> = {
    (options: T): {
        handler: PluginCreator;
        config?: Partial<Config>;
    };
    __isOptionsFunction: true;
};
export declare const fluentuiAliasPlugin: PluginWithOptions<fluetuiPluginOptions>;
export declare const fluentuiBasePlugin: PluginWithOptions<fluetuiPluginOptions>;
export declare const fluetuiThemePlugin: PluginWithOptions<fluetuiPluginOptions>;
export declare const fluentuiHCModePlugin: PluginWithOptions<fluetuiPluginOptions>;
export declare const fluentuiTypographyPlugin: PluginWithOptions<fluetuiPluginOptions>;
export {};
