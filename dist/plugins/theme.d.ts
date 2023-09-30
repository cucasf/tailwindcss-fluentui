import { Config, PluginCreator } from 'tailwindcss/types/config';
import { fluetuiPluginOptions } from '../types';
declare const fluetuiThemePlugin: {
    (options: fluetuiPluginOptions): {
        handler: PluginCreator;
        config?: Partial<Config> | undefined;
    };
    __isOptionsFunction: true;
};
export = fluetuiThemePlugin;
