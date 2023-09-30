import { fluetuiPluginOptions } from '../types';
import '../utils/object.extend';
declare const fluentuiAliasPlugin: {
    (options: fluetuiPluginOptions): {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config> | undefined;
    };
    __isOptionsFunction: true;
};
export = fluentuiAliasPlugin;
