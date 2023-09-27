
import { ThemeConfig } from 'tailwindcss/types/config'
import colors from './colors'

const fluentUITheme: Pick<ThemeConfig, "borderRadius" | "colors" | "fontFamily" | "fontSize" | "fontWeight" | "lineHeight" |
                                              "spacing" | "strokeWidth" | "transitionTimingFunction" | "transitionDuration"> = {

    borderRadius:({}) => ({
        none: '0',
        small: '2px',
        medium: '4px',
        large: '6px',
        xLarge: '8px',
        circular: '10000px',
    }),

    colors: ({}) => colors,
    
    fontFamily: ({}) => ({
        // eslint-disable-next-line @fluentui/max-len
        base: ["'Segoe UI'", "'Segoe UI Web (West European)'", "-apple-system", "BlinkMacSystemFont", "Roboto", "'Helvetica Neue'", "sans-serif",],
        monospace: ["Consolas", "'Courier New'", "Courier", "monospace",],
        // eslint-disable-next-line @fluentui/max-len
        numeric: ["Bahnschrift","'Segoe UI'", "'Segoe UI Web (West European)'", "-apple-system", "BlinkMacSystemFont", "Roboto", "'Helvetica Neue'", "sans-serif",],
    }),

    fontSize: ({}) => ({
        base100: '10px',
        base200: '12px',
        base300: '14px',
        base400: '16px',
        base500: '20px',
        base600: '24px',
      
        hero700: '28px',
        hero800: '32px',
        hero900: '40px',
        hero1000: '68px',
    }),
    
    fontWeight: ({}) => ({
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
    }),

    lineHeight: ({}) => ({
       base100: '14px',
       base200: '16px',
       base300: '20px',
       base400: '22px',
       base500: '28px',
       base600: '32px',
      
       hero700: '36px',
       hero800: '40px',
       hero900: '52px',
       hero1000: '92px',
    }),
    spacing: ({}) => ({
        none: '0',
        xxs: '2px',
        xs: '4px',
        sNudge: '6px',
        s: '8px',
        mNudge: '10px',
        m: '12px',
        l: '16px',
        xl: '20px',
        xxl: '24px',
        xxxl: '32px',
    }),
    
    strokeWidth:  ({}) => ({ 
        thin: '1px',
        thick: '2px',
        thicker: '3px',
        thickest: '4px',
    }),

    transitionTimingFunction: ({}) => ({
        acceleratemax: 'cubic-bezier(1,0,1,1)',
        acceleratemid: 'cubic-bezier(0.7,0,1,0.5)',
        acceleratemin: 'cubic-bezier(0.8,0,1,1)',
        deceleratemax: 'cubic-bezier(0,0,0,1)',
        deceleratemid: 'cubic-bezier(0.1,0.9,0.2,1)',
        deceleratemin: 'cubic-bezier(0.33,0,0.1,1)',
        easemax: 'cubic-bezier(0.8,0,0.1,1)',
        ease: 'cubic-bezier(0.33,0,0.67,1)',
        linear: 'cubic-bezier(0,0,1,1)',
    }),

    transitionDuration: ({}) => ({
        ultrafast: '50ms',
        faster: '100ms',
        fast: '150ms',
        normal: '200ms',
        gentle: '250ms',
        slow: '300ms',
        slower: '400ms',
        ultraslow: '500ms',
    }),


}

export = fluentUITheme