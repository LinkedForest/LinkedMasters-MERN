import { makeStyles } from '@material-ui/core/styles';

// Side Menu Width
const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    drawer: {
        flexShrink: 0,
        width: drawerWidth,
        whiteSpace: 'nowrap'
    },
    textLogo: {
        paddingLeft: theme.spacing(2)
    },
    drawerOpen: {
        border: 'unset',
        width: drawerWidth,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    slideButton: {
        color: theme.palette.secondary.main
    },
    slideButtonNest: {
        color: theme.palette.secondary.light
    },
    drawerClose: {
        border: 'unset',
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        justifyContent: 'space-between',
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark,
        ...theme.mixins.toolbar
    },
    itemButton: {
        paddingLeft: theme.spacing(3),
        color: theme.palette.primary.contrastText
    },
    itemButtonNest: {
        paddingLeft: theme.spacing(3),
        color: theme.palette.primary.lightText
    },
    hide: {
        display: 'none',
    }
}));

export default useStyles;