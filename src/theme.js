import { createTheme } from '@mui/material/styles';

export const colorTokens = {
    primary: {
        50: '#DCE7E6',
        100: '#C5D6D5',
        200: '#A8C2C0',
        300: '#8BAEAB',
        400: '#6E9996',
        500: '#518581',
    },
    secondary: {
        50: '#FFF0D9',
        100: '#FFE5BF',
        200: '#FFD89F',
        300: '#FFCC7F',
        400: '#FFBF5F',
        500: '#FFB23F',
    },
    grey: {
        50: '#EFEFF0',
        100: '#E4E4E6',
        200: '#D7D6DA',
        300: '#CAC8CE',
        400: '#BCBBC1',
        500: '#AFADB5',
    },

    background: {
        50: '#F3F3F3',
        100: '#FFFFFF',
    },
};
export const theme = createTheme({
    palette: {
        primary: {
            dark: colorTokens.primary[500],
            main: colorTokens.primary[300],
            light: colorTokens.primary[100],
        },
        secondary: {
            dark: colorTokens.secondary[500],
            main: colorTokens.secondary[300],
            light: colorTokens.secondary[100],
        },
        neutral: {
            dark: colorTokens.grey[500],
            darkLight: colorTokens.grey[400],
            mediumDark: colorTokens.grey[300],
            medium: colorTokens.grey[200],
            mediumLight: colorTokens.grey[100],
            light: colorTokens.grey[50],
        },
        background: {
            default: colorTokens.background[50],
            paper: colorTokens.background[100],
        },
    },
    typography: {
        fontFamily: ['Eudoxus Sans', 'sans-serif'].join(','),
        fontWeight: 400,
        fontSize: 14,
        h1: {
            fontFamily: ['Eudoxus Sans', 'sans-serif'].join(','),
            fontSize: 64,
            fontWeight: 700,
        },
        h2: {
            fontFamily: ['Eudoxus Sans', 'sans-serif'].join(','),
            fontSize: 44,
            fontWeight: 700,
        },
        h3: {
            fontFamily: ['Eudoxus Sans', 'sans-serif'].join(','),
            fontSize: 24,
            fontWeight: 700,
        },
        h4: {
            fontFamily: ['Eudoxus Sans', 'sans-serif'].join(','),
            fontSize: 20,
            fontWeight: 700,
        },
        h5: {
            fontFamily: ['Eudoxus Sans', 'sans-serif'].join(','),
            fontSize: 18,
            fontWeight: 700,
        },
        h6: {
            fontFamily: ['Eudoxus Sans', 'sans-serif'].join(','),
            fontSize: 16,
            fontWeight: 700,
        },
    },
});
