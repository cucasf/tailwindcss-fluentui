"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const log_1 = __importDefault(require("../utils/log"));
const hcModePlugin = plugin_1.default.withOptions(function (options) {
    return function (api) {
        log_1.default.info('tailwindcss-fluentui:plugin:hcMode:handler');
        let hcMode = api.config('hcMode', 'media');
        let hcCssVariant = '@media screen and (-ms-high-contrast: active)';
        if (hcMode === 'class') {
            hcCssVariant = ':is(.hc &)';
        }
        else if (Array.isArray(hcMode)) {
            hcCssVariant = `:is(${hcMode[1]} &)`;
        }
        api.addVariant('hc', hcCssVariant);
    };
}, function (options) {
    log_1.default.info('tailwindcss-fluentui:plugin:hcMode:config');
    return {
        hcMode: 'media'
    };
});
module.exports = hcModePlugin;
