"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const colors_1 = __importDefault(require("../colors"));
const defaultFluentUIPluginOptions = {
    extend: true,
    themes: ['light', 'dark', 'hc'],
    colors: colors_1.default,
    cssProperties: true,
    alias: {
        statusSharedColors: ['red', 'green', 'darkOrange', 'yellow', 'berry', 'lightGreen', 'marigold'],
        personaSharedColors: [
            'darkRed', 'cranberry', 'pumpkin', 'peach', 'gold', 'brass',
            'brown', 'forest', 'seafoam', 'darkGreen', 'lightTeal', 'teal', 'steel',
            'blue', 'royalBlue', 'cornflower', 'navy', 'lavender', 'purple', 'grape',
            'lilac', 'pink', 'magenta', 'plum', 'beige', 'mink', 'platinum', 'anchor'
        ],
        mappedStatusColors: ['danger', 'success', 'warning'],
        patch: {
            light: {
                'YellowForeground1': 'yellow.shade30',
                'RedForegroundInverted': 'red.tint20',
                'GreenForegroundInverted': 'green.tint20',
                'YellowForegroundInverted': 'yellow.tint40',
                'WarningForeground1': 'warning.shade20',
                'WarningForeground3': 'warning.shade20',
                'WarningBorder2': 'warning.shade20',
            },
            dark: {
                'RedForeground3': 'red.tint30',
                'RedBorder2': 'red.tint30',
                'GreenForeground3': 'green.tint40',
                'GreenBorder2': 'green.tint40',
                'DarkOrangeForeground3': 'darkOrange.tint30',
                'DarkOrangeBorder2': 'darkOrange.tint30',
                'RedForegroundInverted': 'red.primary',
                'GreenForegroundInverted': 'green.primary',
                'YellowForegroundInverted': 'yellow.shade30',
                'DarkRedBackground2': 'darkRed.shade20',
                'PlumBackground2': 'plum.shade20',
                'DangerForeground3': 'danger.tint30',
                'DangerBorder2': 'danger.tint30',
                'SuccessForeground3': 'success.tint40',
                'SuccessBorder2': 'success.tint40',
                'WarningForegroundInverted': 'warning.shade20',
            },
            hc: {
                'RedForegroundInverted': 'hc.canvasText',
                'GreenForegroundInverted': 'hc.canvasText',
                'YellowForegroundInverted': 'hc.canvasText',
            }
        }
    },
    plugins: {
        alias: true,
        hcMode: true,
        extend: true,
        base: true,
        typography: true,
    }
};
module.exports = defaultFluentUIPluginOptions;
