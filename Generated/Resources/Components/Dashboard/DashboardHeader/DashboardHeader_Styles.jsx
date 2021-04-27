import { makeStyles } from '@material-ui/core/styles';

// Side Menu Width
const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'unset',
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.primary.dark,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    }
}));

export default useStyles;