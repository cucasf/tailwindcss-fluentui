"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const log_1 = __importDefault(require("../utils/log"));
const basePlugin = plugin_1.default.withOptions(function (options) {
    return function (api) {
        log_1.default.info('tailwindcss-fluentui:plugin:base:handler');
        api.addBase([
            {
                html: {
                    fontSize: api.theme('fontSize.base300'),
                    fontFamily: api.theme('fontFamily.base'),
                    fontWeight: api.theme('fontWeight.regular'),
                    lineHeight: api.theme('lineHeight.base300'),
                }
            },
            {
                body: {
                    borderRadius: api.theme('borderRadius.medium'),
                    padding: `${api.theme('spacing.xs')} ${api.theme('spacing.m')}`,
                }
            }
        ]);
        api.addComponents({
            '.divider': {
                'border-top': `1px ${api.theme('colors.grey.50')} solid`,
                'margin-top': api.theme('spacing.xl'),
            }
        });
    };
}, function (options) {
    log_1.default.info('tailwindcss-fluentui:plugin:base:config');
    return {};
});
module.exports = basePlugin;
