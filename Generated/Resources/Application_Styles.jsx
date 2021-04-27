import { createMuiTheme } from '@material-ui/core/styles';

const CustomTheme = createMuiTheme({
    palette: {
        primary: {
            vLight: '#e0e0e0',
            light: '#434343',
            main: '#262626',
            dark: '#000000',
            contrastText: '#ffffff',
            lightText: '#c6c6c6',
        },
        secondary: {
            vLight: '#fff2d2',
            light: '#FFCC26',
            main: '#FFB500',
            dark: '#FF9100',
            contrastText: '#000000',
            lightText: '#242424',
        },
    },
});

export default CustomTheme;