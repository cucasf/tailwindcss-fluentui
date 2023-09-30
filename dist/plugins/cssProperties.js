"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const log_1 = __importDefault(require("../utils/log"));
require("../utils/object.extend");
const cssPropertiesPlugin = plugin_1.default.withOptions(function (options) {
    return function (api) {
        log_1.default.info('tailwindcss-fluentui:plugin:alias:handler');
    };
}, );
{
    log_1.default.info('tailwindcss-fluentui:plugin:alias:config');
    let colors = options === null || options === void 0 ? void 0 : options.colors;
    if (colors === undefined) {
        log_1.default.warn('tailwindcss-fluentui:plugin:alias:config:colors undefined');
        return {};
    }
    let aliases = Object.assign(Object.assign(Object.assign(Object.assign({}, _GenerateAliases(colors, colorNeutralMapping, [''], options.themes || ['light'])), _GenerateAliases(colors, statusSharedColorsMapping, ((_a = options.alias) === null || _a === void 0 ? void 0 : _a.statusSharedColors) || [], options.themes || ['light'])), _GenerateAliases(colors, personaSharedColorsMapping, ((_b = options.alias) === null || _b === void 0 ? void 0 : _b.personaSharedColors) || [], options.themes || ['light'])), _GenerateAliases(colors, statusColorsMapping, ((_c = options.alias) === null || _c === void 0 ? void 0 : _c.mappedStatusColors) || [], options.themes || ['light']));
    Object.assign(aliases, GeneratePatchAliases(colors, ((_d = options.alias) === null || _d === void 0 ? void 0 : _d.patch) || {}, options.themes || ['light']));
    return {
        theme: {
            extend: {
                colors: Object.assign({}, aliases)
            }
        }
    };
}
module.exports = cssPropertiesPlugin;
