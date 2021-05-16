import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '35px 15px 55px'
    },
    title: {
        margin: 0,
        display: 'grid',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        '& span': {
            fontSize: '14px',
            fontWeight: '400',
            textTransform: 'capitalize',
        }
    },
    table: {
        width: '100%',
        border: '1px solid rgba(224, 224, 224, 1)',
    },
    headCell: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    actionsButtons: {
        '& > *': {
            padding: '5px',
            minWidth: '36px',
            margin: '0 5px',
            borderRadius: '50%',
        }
    }
}));

export default useStyles;