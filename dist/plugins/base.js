"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const log_1 = __importDefault(require("../utils/log"));
const basePlugin = plugin_1.default.withOptions(function (options) {
    return function (api) {
        log_1.default.info('tailwindcss-fluentui:plugin:base:handler');
        api.addBase({
            'html': {
                'font-size': api.theme('fontSize.base300'),
                'font-family': api.theme('fontFamily.base'),
                'font-weight': api.theme('fontWeight.regular'),
                'line-height': api.theme('lineHeight.base300'),
            },
            'button': {
                'align-items': 'center',
                'box-sizing': 'border-box',
                // 'display': inline-flex,
                'justify-content': 'center',
                'text-decoration-line': 'none',
                'vertical-align': 'middle',
                'margin': ' 0px',
                'overflow': 'hidden',
                'background-color': api.theme('colors.NeutralBackground1.DEFAULT'),
                'color': api.theme('colors.NeutralForeground1.DEFAULT'),
                'border': `${api.theme('strokeWidth.thin')} solid ${api.theme('colors.NeutralStroke1.DEFAULT')}`,
                'outline-style': 'none',
                'min-width': '96px',
                'font-family': api.theme('fontFamily.base'),
                'font-size': api.theme('fontSize.base300'),
                'font-weight': api.theme('fontWeight.semibold'),
                'line-height': api.theme('lineHeight.base300'),
                'transition-duration': api.theme('transitionDuration.faster'),
                'transition-property': 'background, border,color',
                'transition-timing-function': api.theme('transitionTimingFunction.ease'),
                'border-radius': api.theme('borderRadius.medium'),
                'padding': `${api.theme('spacing.xs')} ${api.theme('spacing.m')}`,
            },
            'button:hover': {
                'background-color': api.theme('colors.NeutralBackground1Hover.DEFAULT'),
            },
            'button:hover:active': {
                'background-color': api.theme('colors.NeutralBackground1Pressed.DEFAULT'),
            }
        });
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
