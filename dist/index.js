"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const theme_1 = __importDefault(require("./theme"));
const log_1 = __importDefault(require("./utils/log"));
const options_1 = require("./plugins/options");
let xRe = /^[x]+/;
const fluetuiPlugin = plugin_1.default.withOptions(function (options = options_1.defaultFluentUIPluginOptions) {
    return function (api) {
        var _a;
        log_1.default.info('tailwindcss-fluentui:plugin:handler');
        if (options.cssProperties) {
            let cssProperties = {};
            for (const [key, value] of Object.entries(theme_1.default)) {
                if (key === 'extend' || key == 'colors')
                    continue;
                let cssKey = '';
                switch (key) {
                    case 'transitionTimingFunction':
                        cssKey = 'curve';
                        break;
                    case 'transitionDuration':
                        cssKey = 'duration';
                        break;
                    default:
                        cssKey = key;
                        break;
                }
                if (typeof value === 'object') {
                    for (const [subKey, subValue] of Object.entries(value)) {
                        let xMatch = (_a = subKey.match(xRe)) !== null && _a !== void 0 ? _a : [""];
                        let cssSubKey = subKey.slice(0, xMatch[0].length + 1).toUpperCase() + subKey.slice(xMatch[0].length + 1);
                        if (key === 'spacing') {
                            cssProperties[`--${cssKey}Horizontal${cssSubKey}`] = api.theme(`${key}.${subKey}`, subValue);
                            cssProperties[`--${cssKey}Vertical${cssSubKey}`] = api.theme(`${key}.${subKey}`, subValue);
                        }
                        else if (key === 'transitionTimingFunction' && subKey.startsWith('ease')) {
                            cssProperties[`--${cssKey}Easy${cssSubKey}`] = api.theme(`${key}.${subKey}`, subValue);
                        }
                        else {
                            cssProperties[`--${cssKey}${cssSubKey}`] = api.theme(`${key}.${subKey}`, subValue);
                        }
                    }
                }
            }
            api.addBase({
                ':root': cssProperties
            });
        }
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
