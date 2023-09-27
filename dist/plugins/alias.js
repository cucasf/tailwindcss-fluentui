"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const log_1 = __importDefault(require("../utils/log"));
const options_1 = require("./options");
require("../utils/object.extend");
const colorNeutralMapping = {
    'NeutralForeground1': { light: 'grey.14', dark: 'white', hc: 'hc.canvasText' },
    'NeutralForeground1Hover': { light: 'grey.14', dark: 'white', hc: 'hc.highlightText' },
    'NeutralForeground1Pressed': { light: 'grey.14', dark: 'white', hc: 'hc.highlightText' },
    'NeutralForeground1Selected': { light: 'grey.14', dark: 'white', hc: 'hc.highlightText' },
    'NeutralForeground2': { light: 'grey.26', dark: 'grey.84', hc: 'hc.canvasText' },
    'NeutralForeground2Hover': { light: 'grey.14', dark: 'white', hc: 'hc.highlightText' },
    'NeutralForeground2Pressed': { light: 'grey.14', dark: 'white', hc: 'hc.highlightText' },
    'NeutralForeground2Selected': { light: 'grey.14', dark: 'white', hc: 'hc.highlightText' },
    'NeutralForeground2BrandHover': { light: 'brand.80', dark: 'brand.100', hc: 'hc.highlightText' },
    'NeutralForeground2BrandPressed': { light: 'brand.70', dark: 'brand.90', hc: 'hc.highlightText' },
    'NeutralForeground2BrandSelected': { light: 'brand.80', dark: 'brand.100', hc: 'hc.highlightText' },
    'NeutralForeground3': { light: 'grey.38', dark: 'grey.68', hc: 'hc.canvasText' },
    'NeutralForeground3Hover': { light: 'grey.26', dark: 'grey.84', hc: 'hc.highlightText' },
    'NeutralForeground3Pressed': { light: 'grey.26', dark: 'grey.84', hc: 'hc.highlightText' },
    'NeutralForeground3Selected': { light: 'grey.26', dark: 'grey.84', hc: 'hc.highlightText' },
    'NeutralForeground3BrandHover': { light: 'brand.80', dark: 'brand.100', hc: 'hc.highlightText' },
    'NeutralForeground3BrandPressed': { light: 'brand.70', dark: 'brand.90', hc: 'hc.highlightText' },
    'NeutralForeground3BrandSelected': { light: 'brand.80', dark: 'brand.100', hc: 'hc.highlightText' },
    'NeutralForeground4': { light: 'grey.44', dark: 'grey.60', hc: 'hc.canvasText' },
    'NeutralForegroundDisabled': { light: 'grey.74', dark: 'grey.36', hc: 'hc.disabled' },
    'NeutralForegroundInvertedDisabled': { light: 'whiteAlpha.40', dark: 'whiteAlpha.40', hc: 'hc.disabled' },
    'BrandForegroundLink': { light: 'brand.70', dark: 'brand.100', hc: 'hc.hyperlink' },
    'BrandForegroundLinkHover': { light: 'brand.60', dark: 'brand.110', hc: 'hc.hyperlink' },
    'BrandForegroundLinkPressed': { light: 'brand.40', dark: 'brand.90', hc: 'hc.hyperlink' },
    'BrandForegroundLinkSelected': { light: 'brand.70', dark: 'brand.100', hc: 'hc.hyperlink' },
    'NeutralForeground2Link': { light: 'grey.26', dark: 'grey.84', hc: 'hc.hyperlink' },
    'NeutralForeground2LinkHover': { light: 'grey.14', dark: 'white', hc: 'hc.hyperlink' },
    'NeutralForeground2LinkPressed': { light: 'grey.14', dark: 'white', hc: 'hc.hyperlink' },
    'NeutralForeground2LinkSelected': { light: 'grey.14', dark: 'white', hc: 'hc.hyperlink' },
    'CompoundBrandForeground1': { light: 'brand.80', dark: 'brand.100', hc: 'hc.highlight' },
    'CompoundBrandForeground1Hover': { light: 'brand.70', dark: 'brand.110', hc: 'hc.highlight' },
    'CompoundBrandForeground1Pressed': { light: 'brand.60', dark: 'brand.90', hc: 'hc.highlight' },
    'BrandForeground1': { light: 'brand.80', dark: 'brand.100', hc: 'hc.canvasText' },
    'BrandForeground2': { light: 'brand.70', dark: 'brand.110', hc: 'hc.canvasText' },
    'BrandForeground2Hover': { light: 'brand.60', dark: 'brand.130', hc: 'hc.canvasText' },
    'BrandForeground2Pressed': { light: 'brand.30', dark: 'brand.160', hc: 'hc.canvasText' },
    'NeutralForeground1Static': { light: 'grey.14', dark: 'grey.14', hc: 'hc.canvas' },
    'NeutralForegroundStaticInverted': { light: 'white', dark: 'white', hc: 'hc.canvasText' },
    'NeutralForegroundInverted': { light: 'white', dark: 'grey.14', hc: 'hc.highlightText' },
    'NeutralForegroundInvertedHover': { light: 'white', dark: 'grey.14', hc: 'hc.highlightText' },
    'NeutralForegroundInvertedPressed': { light: 'white', dark: 'grey.14', hc: 'hc.highlightText' },
    'NeutralForegroundInvertedSelected': { light: 'white', dark: 'grey.14', hc: 'hc.highlightText' },
    'NeutralForegroundInverted2': { light: 'white', dark: 'grey.14', hc: 'hc.canvasText' },
    'NeutralForegroundOnBrand': { light: 'white', dark: 'white', hc: 'hc.buttonText' },
    'NeutralForegroundInvertedLink': { light: 'white', dark: 'white', hc: 'hc.hyperlink' },
    'NeutralForegroundInvertedLinkHover': { light: 'white', dark: 'white', hc: 'hc.hyperlink' },
    'NeutralForegroundInvertedLinkPressed': { light: 'white', dark: 'white', hc: 'hc.hyperlink' },
    'NeutralForegroundInvertedLinkSelected': { light: 'white', dark: 'white', hc: 'hc.hyperlink' },
    'BrandForegroundInverted': { light: 'brand.100', dark: 'brand.80', hc: 'hc.canvasText' },
    'BrandForegroundInvertedHover': { light: 'brand.110', dark: 'brand.70', hc: 'hc.highlightText' },
    'BrandForegroundInvertedPressed': { light: 'brand.100', dark: 'brand.60', hc: 'hc.highlightText' },
    'BrandForegroundOnLight': { light: 'brand.80', dark: 'brand.80', hc: 'hc.buttonText' },
    'BrandForegroundOnLightHover': { light: 'brand.70', dark: 'brand.70', hc: 'hc.highlightText' },
    'BrandForegroundOnLightPressed': { light: 'brand.50', dark: 'brand.50', hc: 'hc.highlightText' },
    'BrandForegroundOnLightSelected': { light: 'brand.60', dark: 'brand.60', hc: 'hc.highlightText' },
    'NeutralBackground1': { light: 'white', dark: 'grey.16', hc: 'hc.canvas' },
    'NeutralBackground1Hover': { light: 'grey.96', dark: 'grey.24', hc: 'hc.highlight' },
    'NeutralBackground1Pressed': { light: 'grey.88', dark: 'grey.12', hc: 'hc.highlight' },
    'NeutralBackground1Selected': { light: 'grey.92', dark: 'grey.22', hc: 'hc.highlight' },
    'NeutralBackground2': { light: 'grey.98', dark: 'grey.12', hc: 'hc.canvas' },
    'NeutralBackground2Hover': { light: 'grey.94', dark: 'grey.20', hc: 'hc.highlight' },
    'NeutralBackground2Pressed': { light: 'grey.86', dark: 'grey.8', hc: 'hc.highlight' },
    'NeutralBackground2Selected': { light: 'grey.90', dark: 'grey.18', hc: 'hc.highlight' },
    'NeutralBackground3': { light: 'grey.96', dark: 'grey.8', hc: 'hc.canvas' },
    'NeutralBackground3Hover': { light: 'grey.92', dark: 'grey.16', hc: 'hc.highlight' },
    'NeutralBackground3Pressed': { light: 'grey.84', dark: 'grey.4', hc: 'hc.highlight' },
    'NeutralBackground3Selected': { light: 'grey.88', dark: 'grey.14', hc: 'hc.highlight' },
    'NeutralBackground4': { light: 'grey.94', dark: 'grey.4', hc: 'hc.canvas' },
    'NeutralBackground4Hover': { light: 'grey.98', dark: 'grey.12', hc: 'hc.highlight' },
    'NeutralBackground4Pressed': { light: 'grey.96', dark: 'black', hc: 'hc.highlight' },
    'NeutralBackground4Selected': { light: 'white', dark: 'grey.10', hc: 'hc.highlight' },
    'NeutralBackground5': { light: 'grey.92', dark: 'black', hc: 'hc.canvas' },
    'NeutralBackground5Hover': { light: 'grey.96', dark: 'grey.8', hc: 'hc.highlight' },
    'NeutralBackground5Pressed': { light: 'grey.94', dark: 'grey.2', hc: 'hc.highlight' },
    'NeutralBackground5Selected': { light: 'grey.98', dark: 'grey.6', hc: 'hc.highlight' },
    'NeutralBackground6': { light: 'grey.90', dark: 'grey.20', hc: 'hc.canvas' },
    'NeutralBackgroundInverted': { light: 'grey.16', dark: 'white', hc: 'hc.canvas' },
    'NeutralBackgroundStatic': { light: 'grey.20', dark: 'grey.24', hc: 'hc.canvas' },
    'NeutralBackgroundAlpha': { light: 'whiteAlpha.50', dark: 'grey10Alpha.50', hc: 'hc.canvas' },
    'NeutralBackgroundAlpha2': { light: 'whiteAlpha.80', dark: 'grey12Alpha.70', hc: 'hc.canvas' },
    'SubtleBackground': { light: 'transparent', dark: 'transparent', hc: 'transparent' },
    'SubtleBackgroundHover': { light: 'grey.96', dark: 'grey.22', hc: 'hc.highlight' },
    'SubtleBackgroundPressed': { light: 'grey.88', dark: 'grey.18', hc: 'hc.highlight' },
    'SubtleBackgroundSelected': { light: 'grey.92', dark: 'grey.20', hc: 'hc.highlight' },
    'SubtleBackgroundLightAlphaHover': { light: 'whiteAlpha.70', dark: 'grey14Alpha.80', hc: 'hc.highlight' },
    'SubtleBackgroundLightAlphaPressed': { light: 'whiteAlpha.50', dark: 'grey14Alpha.50', hc: 'hc.highlight' },
    'SubtleBackgroundLightAlphaSelected': { light: 'transparent', dark: 'transparent', hc: 'hc.highlight' },
    'SubtleBackgroundInverted': { light: 'transparent', dark: 'transparent', hc: 'transparent' },
    'SubtleBackgroundInvertedHover': { light: 'blackAlpha.10', dark: 'blackAlpha.10', hc: 'hc.highlight' },
    'SubtleBackgroundInvertedPressed': { light: 'blackAlpha.30', dark: 'blackAlpha.30', hc: 'hc.highlight' },
    'SubtleBackgroundInvertedSelected': { light: 'blackAlpha.20', dark: 'blackAlpha.20', hc: 'hc.highlight' },
    'TransparentBackground': { light: 'transparent', dark: 'transparent', hc: 'transparent' },
    'TransparentBackgroundHover': { light: 'transparent', dark: 'transparent', hc: 'hc.highlight' },
    'TransparentBackgroundPressed': { light: 'transparent', dark: 'transparent', hc: 'hc.highlight' },
    'TransparentBackgroundSelected': { light: 'transparent', dark: 'transparent', hc: 'hc.highlight' },
    'NeutralBackgroundDisabled': { light: 'grey.94', dark: 'grey.8', hc: 'hc.canvas' },
    'NeutralBackgroundInvertedDisabled': { light: 'whiteAlpha.10', dark: 'whiteAlpha.10', hc: 'hc.canvas' },
    'NeutralStencil1': { light: 'grey.90', dark: 'grey.34', hc: 'hc.canvasText' },
    'NeutralStencil2': { light: 'grey.98', dark: 'grey.20', hc: 'hc.canvasText' },
    'NeutralStencil1Alpha': { light: 'blackAlpha.10', dark: 'whiteAlpha.10', hc: 'hc.canvasText' },
    'NeutralStencil2Alpha': { light: 'blackAlpha.5', dark: 'whiteAlpha.5', hc: 'hc.canvasText' },
    'BackgroundOverlay': { light: 'blackAlpha.40', dark: 'blackAlpha.50', hc: 'blackAlpha.50' },
    'ScrollbarOverlay': { light: 'blackAlpha.50', dark: 'whiteAlpha.60', hc: 'hc.buttonFace' },
    'BrandBackground': { light: 'brand.80', dark: 'brand.70', hc: 'hc.buttonFace' },
    'BrandBackgroundHover': { light: 'brand.70', dark: 'brand.80', hc: 'hc.highlight' },
    'BrandBackgroundPressed': { light: 'brand.40', dark: 'brand.40', hc: 'hc.highlight' },
    'BrandBackgroundSelected': { light: 'brand.60', dark: 'brand.60', hc: 'hc.highlight' },
    'CompoundBrandBackground': { light: 'brand.80', dark: 'brand.100', hc: 'hc.highlight' },
    'CompoundBrandBackgroundHover': { light: 'brand.70', dark: 'brand.110', hc: 'hc.highlight' },
    'CompoundBrandBackgroundPressed': { light: 'brand.60', dark: 'brand.90', hc: 'hc.highlight' },
    'BrandBackgroundStatic': { light: 'brand.80', dark: 'brand.80', hc: 'hc.canvas' },
    'BrandBackground2': { light: 'brand.160', dark: 'brand.20', hc: 'hc.canvas' },
    'BrandBackground2Hover': { light: 'brand.150', dark: 'brand.40', hc: 'hc.canvas' },
    'BrandBackground2Pressed': { light: 'brand.130', dark: 'brand.10', hc: 'hc.canvas' },
    'BrandBackgroundInverted': { light: 'white', dark: 'white', hc: 'hc.buttonFace' },
    'BrandBackgroundInvertedHover': { light: 'brand.160', dark: 'brand.160', hc: 'hc.highlight' },
    'BrandBackgroundInvertedPressed': { light: 'brand.140', dark: 'brand.140', hc: 'hc.highlight' },
    'BrandBackgroundInvertedSelected': { light: 'brand.150', dark: 'brand.150', hc: 'hc.highlight' },
    'NeutralStrokeAccessible': { light: 'grey.38', dark: 'grey.68', hc: 'hc.canvasText' },
    'NeutralStrokeAccessibleHover': { light: 'grey.34', dark: 'grey.74', hc: 'hc.highlight' },
    'NeutralStrokeAccessiblePressed': { light: 'grey.30', dark: 'grey.70', hc: 'hc.highlight' },
    'NeutralStrokeAccessibleSelected': { light: 'brand.80', dark: 'brand.100', hc: 'hc.highlight' },
    'NeutralStroke1': { light: 'grey.82', dark: 'grey.40', hc: 'hc.canvasText' },
    'NeutralStroke1Hover': { light: 'grey.78', dark: 'grey.46', hc: 'hc.highlight' },
    'NeutralStroke1Pressed': { light: 'grey.70', dark: 'grey.42', hc: 'hc.highlight' },
    'NeutralStroke1Selected': { light: 'grey.74', dark: 'grey.44', hc: 'hc.highlight' },
    'NeutralStroke2': { light: 'grey.88', dark: 'grey.32', hc: 'hc.canvasText' },
    'NeutralStroke3': { light: 'grey.94', dark: 'grey.24', hc: 'hc.canvasText' },
    'NeutralStrokeSubtle': { light: 'grey.88', dark: 'grey.4', hc: 'hc.canvasText' },
    'NeutralStrokeOnBrand': { light: 'white', dark: 'grey.16', hc: 'hc.canvas' },
    'NeutralStrokeOnBrand2': { light: 'white', dark: 'white', hc: 'hc.canvasText' },
    'NeutralStrokeOnBrand2Hover': { light: 'white', dark: 'white', hc: 'hc.canvasText' },
    'NeutralStrokeOnBrand2Pressed': { light: 'white', dark: 'white', hc: 'hc.canvasText' },
    'NeutralStrokeOnBrand2Selected': { light: 'white', dark: 'white', hc: 'hc.canvasText' },
    'BrandStroke1': { light: 'brand.80', dark: 'brand.100', hc: 'hc.canvasText' },
    'BrandStroke2': { light: 'brand.140', dark: 'brand.50', hc: 'hc.canvasText' },
    'BrandStroke2Hover': { light: 'brand.120', dark: 'brand.50', hc: 'hc.highlight' },
    'BrandStroke2Pressed': { light: 'brand.80', dark: 'brand.30', hc: 'hc.highlight' },
    'BrandStroke2Contrast': { light: 'brand.140', dark: 'brand.50', hc: 'hc.canvas' },
    'CompoundBrandStroke': { light: 'brand.80', dark: 'brand.100', hc: 'hc.highlight' },
    'CompoundBrandStrokeHover': { light: 'brand.70', dark: 'brand.110', hc: 'hc.highlight' },
    'CompoundBrandStrokePressed': { light: 'brand.60', dark: 'brand.90', hc: 'hc.highlight' },
    'NeutralStrokeDisabled': { light: 'grey.88', dark: 'grey.26', hc: 'hc.disabled' },
    'NeutralStrokeInvertedDisabled': { light: 'whiteAlpha.40', dark: 'whiteAlpha.40', hc: 'hc.disabled' },
    'TransparentStroke': { light: 'transparent', dark: 'transparent', hc: 'hc.canvasText' },
    'TransparentStrokeInteractive': { light: 'transparent', dark: 'transparent', hc: 'hc.highlight' },
    'TransparentStrokeDisabled': { light: 'transparent', dark: 'transparent', hc: 'hc.disabled' },
    'NeutralStrokeAlpha': { light: 'blackAlpha.5', dark: 'whiteAlpha.10', hc: 'hc.canvasText' },
    'NeutralStrokeAlpha2': { light: 'whiteAlpha.20', dark: 'whiteAlpha.20', hc: 'hc.canvas' },
    'StrokeFocus1': { light: 'white', dark: 'black', hc: 'hc.canvas' },
    'StrokeFocus2': { light: 'black', dark: 'white', hc: 'hc.highlight' },
    'NeutralShadowAmbient': { light: 'rgba(0000.12)', dark: 'rgba(0,0,0,0.24)', hc: 'rgba(0,0,0,0.24)' },
    'NeutralShadowKey': { light: 'rgba(0000.14)', dark: 'rgba(0,0,0,0.28)', hc: 'rgba(0,0,0,0.28)' },
    'NeutralShadowAmbientLighter': { light: 'rgba(0000.06)', dark: 'rgba(0,0,0,0.12)', hc: 'rgba(0,0,0,0.12)' },
    'NeutralShadowKeyLighter': { light: 'rgba(0000.07)', dark: 'rgba(0,0,0,0.14)', hc: 'rgba(0,0,0,0.14)' },
    'NeutralShadowAmbientDarker': { light: 'rgba(0000.20)', dark: 'rgba(0,0,0,0.40)', hc: 'rgba(0,0,0,0.40)' },
    'NeutralShadowKeyDarker': { light: 'rgba(0000.24)', dark: 'rgba(0,0,0,0.48)', hc: 'rgba(0,0,0,0.48)' },
    'BrandShadowAmbient': { light: 'rgba(0000.30)', dark: 'rgba(0,0,0,0.30)', hc: 'rgba(0,0,0,0.30)' },
    'BrandShadowKey': { light: 'rgba(0000.25)', dark: 'rgba(0,0,0,0.25)', hc: 'rgba(0,0,0,0.25)' },
};
const statusSharedColorsMapping = {
    '${color}Background1': { light: 'tint60', dark: 'shade40', hc: 'hc.canvas' },
    '${color}Background2': { light: 'tint40', dark: 'shade30', hc: 'hc.canvas' },
    '${color}Background3': { light: 'primary', dark: 'primary', hc: 'hc.canvasText' },
    '${color}Foreground1': { light: 'shade10', dark: 'tint30', hc: 'hc.canvasText' },
    '${color}Foreground2': { light: 'shade30', dark: 'tint40', hc: 'hc.canvasText' },
    '${color}Foreground3': { light: 'primary', dark: 'tint20', hc: 'hc.canvasText' },
    '${color}BorderActive': { light: 'primary', dark: 'tint30', hc: 'hc.highlight' },
    '${color}Border1': { light: 'tint40', dark: 'primary', hc: 'hc.canvasText' },
    '${color}Border2': { light: 'primary', dark: 'tint20', hc: 'hc.canvasText' },
};
const personaSharedColorsMapping = {
    '${color}Background2': { light: 'tint40', dark: 'shade30', hc: 'hc.canvas' },
    '${color}Foreground2': { light: 'shade30', dark: 'tint40', hc: 'hc.canvasText' },
    '${color}BorderActive': { light: 'primary', dark: 'tint30', hc: 'hc.highlight' },
};
const statusColorsMapping = {
    '${color}Background1': { light: 'tint60', dark: 'shade40', hc: 'hc.canvas' },
    '${color}Background2': { light: 'tint40', dark: 'shade30', hc: 'hc.canvas' },
    '${color}Background3': { light: 'primary', dark: 'primary', hc: 'hc.canvasText' },
    '${color}Foreground1': { light: 'shade10', dark: 'tint30', hc: 'hc.canvasText' },
    '${color}Foreground2': { light: 'shade30', dark: 'tint40', hc: 'hc.canvasText' },
    '${color}Foreground3': { light: 'primary', dark: 'tint20', hc: 'hc.canvasText' },
    '${color}ForegroundInverted': { light: 'tint30', dark: 'tint30', hc: 'hc.highlight' },
    '${color}BorderActive': { light: 'primary', dark: 'shade10', hc: 'hc.canvasText' },
    '${color}Border1': { light: 'tint40', dark: 'primary', hc: 'hc.canvasText' },
    '${color}Border2': { light: 'primary', dark: 'tint20', hc: 'hc.canvasText' },
};
function GenerateAliases(colors, mapping, colorNames, themes) {
    let aliases = {};
    colorNames.forEach(colorName => {
        let color = colorName.slice(0, 1).toUpperCase() + colorName.slice(1);
        Object.entries(mapping).forEach(([key, value]) => {
            let aliasName = key.replace('${color}', color);
            aliases[aliasName] = {};
            themes.forEach(theme => {
                if (value[theme] === undefined)
                    return;
                let colorPath = theme === 'hc' ? value[theme] : `${colorName}.${value[theme]}`;
                let cssColor = Object.byString(colors, colorPath, value[theme]);
                aliases[aliasName][theme === 'light' ? 'DEFAULT' : theme] = cssColor;
            });
        });
    });
    return aliases;
}
function GeneratePatchAliases(colors, patch, themes) {
    let aliases = {};
    Object.entries(patch).forEach(([theme, values]) => {
        if (!themes.includes(theme))
            return;
        Object.entries(values).forEach(([key, value]) => {
            aliases[key] = {};
            aliases[key][theme === 'light' ? 'DEFAULT' : theme] = Object.byString(colors, value, value);
        });
    });
    return aliases;
}
const aliasPlugin = plugin_1.default.withOptions(function (options) {
    return function (api) {
        log_1.default.info('tailwindcss-fluentui:plugin:alias:handler');
    };
}, function (options = options_1.defaultAliasPluginOptions) {
    var _a, _b, _c, _d;
    log_1.default.info('tailwindcss-fluentui:plugin:alias:config');
    let colors = options.colors;
    if (colors === undefined) {
        log_1.default.warn('tailwindcss-fluentui:plugin:alias:config:colors undefined');
        return {};
    }
    let aliases = Object.assign(Object.assign(Object.assign(Object.assign({}, GenerateAliases(colors, colorNeutralMapping, [''], options.themes || ['light'])), GenerateAliases(colors, statusSharedColorsMapping, ((_a = options.alias) === null || _a === void 0 ? void 0 : _a.statusSharedColors) || [], options.themes || ['light'])), GenerateAliases(colors, personaSharedColorsMapping, ((_b = options.alias) === null || _b === void 0 ? void 0 : _b.personaSharedColors) || [], options.themes || ['light'])), GenerateAliases(colors, statusColorsMapping, ((_c = options.alias) === null || _c === void 0 ? void 0 : _c.mappedStatusColors) || [], options.themes || ['light']));
    Object.assign(aliases, GeneratePatchAliases(colors, ((_d = options.alias) === null || _d === void 0 ? void 0 : _d.patch) || {}, options.themes || ['light']));
    return {
        theme: {
            extend: {
                colors: Object.assign({}, aliases)
            }
        }
    };
});
module.exports = aliasPlugin;
