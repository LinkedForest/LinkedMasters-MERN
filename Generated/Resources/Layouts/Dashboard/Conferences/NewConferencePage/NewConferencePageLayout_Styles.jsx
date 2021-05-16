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
    card: {
        width: '100%',
        padding: '25px',
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    dropzone: {
        '& .MuiDropzoneArea-root': {
            borderWidth: '1px',
            borderColor: '#c0c0c0',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        '& .MuiDropzoneArea-text': {
            marginBottom: '7px'
        }
    }
}));

export default useStyles;