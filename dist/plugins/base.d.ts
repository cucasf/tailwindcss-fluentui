import { fluetuiPluginOptions } from '../types';
declare const fluentuiBasePlugin: {
    (options: fluetuiPluginOptions): {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config> | undefined;
    };
    __isOptionsFunction: true;
};
export = fluentuiBasePlugin;
