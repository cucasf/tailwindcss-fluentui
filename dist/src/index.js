"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const theme_1 = __importDefault(require("./theme"));
const log_1 = __importDefault(require("./utils/log"));
const options_1 = require("./plugins/options");
const fluetuiPlugin = plugin_1.default.withOptions(function (options = options_1.defaultFluentUIPluginOptions) {
    return function (api) {
        log_1.default.info('tailwindcss-fluentui:plugin:handler');
    };
}, function (options = options_1.defaultFluentUIPluginOptions) {
    log_1.default.info('tailwindcss-fluentui:plugin:config');
    let partialConfig = { theme: {} };
    partialConfig.theme = (options === null || options === void 0 ? void 0 : options.extend) ? { extend: theme_1.default } : theme_1.default;
    // if (options.plugins?.typography) {
    //     partialConfig.plugins?.push(typographyPlugin)
    // }
    return partialConfig;
});
module.exports = fluetuiPlugin;
