import { Config, KeyValuePair, PluginCreator, RecursiveKeyValuePair, ThemeConfig } from "tailwindcss/types/config";

/**
 * Possible color variant values
 */
export type ColorVariants = {
    shade50: string;
    shade40: string;
    shade30: string;
    shade20: string;
    shade10: string;
    primary: string;
    tint10: string;
    tint20: string;
    tint30: string;
    tint40: string;
    tint50: string;
    tint60: string;
};
  
export type Brands = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160;
  
export type BrandVariants = Record<Brands, string>;
  
  
export type TextAlignment = 'inherit' | 'initial' | 'revert' | 'unset' | 'center' | 'end' |
                              'start' | 'justify' | 'left' | 'match-parent' | 'right';
  
export type TextAlignments = {
    start: TextAlignment;
    center: TextAlignment;
    end: TextAlignment;
    justify: TextAlignment;
};
  
export type TypographyStyle = {
    fontFamily: string | string[];
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
};
    
  /**
   * Design tokens for shadow levels
   */
export type ShadowTokens = {
    shadow2: string;
    shadow4: string;
    shadow8: string;
    shadow16: string;
    shadow28: string;
    shadow64: string;
};
  
export type ShadowBrandTokens = {
    shadow2Brand: string;
    shadow4Brand: string;
    shadow8Brand: string;
    shadow16Brand: string;
    shadow28Brand: string;
    shadow64Brand: string;
};
  
export type Greys = 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 |
                     36 | 38 | 40 | 42 | 44 | 46 | 48 | 50 | 52 | 54 | 56 | 58 | 60 | 62 | 64 | 66 | 68 | 70 | 72 | 74 | 76 | 78 | 80 | 82 | 84 | 86 | 88 | 90 | 92 | 94 | 96 | 98; 
export type AlphaColors = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
  
export type StatusColorVariants = {
    danger?: ColorVariants;
    warning?: ColorVariants;
    success?: ColorVariants;
    info?: ColorVariants;
}

export type AliasMapping = {
    [key: string]: KeyValuePair<string,string>;
};

export type Alias = {
    statusSharedColors: string[];
    personaSharedColors: string[];
    mappedStatusColors: string[];
    patch?: Record<string, KeyValuePair>;
};

export interface aliasPluginOptions  {
    themes: string[];
    colors: RecursiveKeyValuePair;
    alias: Alias;
    cssProperties: boolean;
}

export interface fluetuiPluginOptions {
    extend?: boolean;
    cssProperties: boolean;
    themes: string[];
    colors: RecursiveKeyValuePair;
    alias: Alias;
    plugins: KeyValuePair<string, boolean>;
}

