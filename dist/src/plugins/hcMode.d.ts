declare const hcModePlugin: {
    (options: any): {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config> | undefined;
    };
    __isOptionsFunction: true;
};
export = hcModePlugin;
