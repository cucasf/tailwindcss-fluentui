"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const log_1 = __importDefault(require("./utils/log"));
const options_1 = require("./options");
const plugins_1 = require("./plugins");
const fluetuiPlugin = plugin_1.default.withOptions(function (options = options_1.defaultFluentUIPluginOptions) {
    return function (api) {
        log_1.default.info('tailwindcss-fluentui:plugin:handler');
        let fuiplugins = api.config('fuiplugins');
        if (fuiplugins) {
            for (let plugin of fuiplugins) {
                plugin.handler(api);
            }
        }
    };
}, function (options = options_1.defaultFluentUIPluginOptions) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    log_1.default.info('tailwindcss-fluentui:plugin:config');
    let themePlugin = (0, plugins_1.fluetuiThemePlugin)(options);
    let partialConfig = { theme: {}, fuiplugins: [themePlugin] };
    Object.assign(partialConfig, themePlugin.config);
    if (options.plugins.hcMode) {
        let pluginHCMode = (0, plugins_1.fluentuiHCModePlugin)(options);
        (_a = partialConfig.fuiplugins) === null || _a === void 0 ? void 0 : _a.push(pluginHCMode);
        Object.assign(partialConfig, pluginHCMode.config);
    }
    if (options.plugins.alias) {
        let aliasPlugin = (0, plugins_1.fluentuiAliasPlugin)(options);
        (_b = partialConfig.fuiplugins) === null || _b === void 0 ? void 0 : _b.push(aliasPlugin);
        partialConfig['fuiAliasNames'] = (_c = aliasPlugin.config) === null || _c === void 0 ? void 0 : _c['fuiAliasNames'];
        if (((_e = (_d = partialConfig.theme) === null || _d === void 0 ? void 0 : _d.extend) === null || _e === void 0 ? void 0 : _e.colors) !== undefined) {
            Object.assign(partialConfig.theme.extend.colors, (_h = (_g = (_f = aliasPlugin.config) === null || _f === void 0 ? void 0 : _f.theme) === null || _g === void 0 ? void 0 : _g.extend) === null || _h === void 0 ? void 0 : _h.colors);
        }
    }
    if (options.plugins.typography) {
        let typographyPlugin = (0, plugins_1.fluentuiTypographyPlugin)(options);
        (_j = partialConfig.fuiplugins) === null || _j === void 0 ? void 0 : _j.push(typographyPlugin);
        if (partialConfig.theme !== undefined) {
            Object.assign(partialConfig.theme, (_k = typographyPlugin.config) === null || _k === void 0 ? void 0 : _k.theme);
        }
        else {
            Object.assign(partialConfig, typographyPlugin.config);
        }
    }
    if (options.plugins.base) {
        let basePlugin = (0, plugins_1.fluentuiBasePlugin)(options);
        (_l = partialConfig.fuiplugins) === null || _l === void 0 ? void 0 : _l.push(basePlugin);
    }
    return partialConfig;
});
module.exports = fluetuiPlugin;
