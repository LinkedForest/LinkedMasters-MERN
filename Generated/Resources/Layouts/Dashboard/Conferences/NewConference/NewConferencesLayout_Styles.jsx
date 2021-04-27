import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 'bolder',
        padding: theme.spacing(3, 0)
    },
    root: {
        padding: theme.spacing(3),
        backgroundColor: theme.palette.primary.vLight
    }
}));

export default useStyles;