import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main
    },
    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: theme.spacing(3),
        color: theme.palette.primary.contrastText,
    },
    container: {
        width: '350px',
        display: 'flex',
        maxWidth: '90%',
        flexDirection: 'column',
        padding: theme.spacing(3),
        borderRadius: theme.spacing(1),
        border: '1px solid' + theme.palette.primary.contrastText,
    },
    input: {
        marginBottom: theme.spacing(2),
        '& input, & label': {
            color: theme.palette.primary.contrastText + '!important',
        },
        '& fieldset': {
            borderWidth: '1px !important',
            borderColor: theme.palette.primary.contrastText + '!important',
        }
    },
    button: {
        padding: theme.spacing(2),
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText
    },
    errorText: {
        textTransform: 'capitalize',
        marginBottom: theme.spacing(2),
        color: theme.palette.primary.contrastText,
    }
}));

export default useStyles;