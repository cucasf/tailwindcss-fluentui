import { aliasPluginOptions } from '../types';
import '../utils/object.extend';
declare const aliasPlugin: {
    (options: aliasPluginOptions): {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config> | undefined;
    };
    __isOptionsFunction: true;
};
export = aliasPlugin;
