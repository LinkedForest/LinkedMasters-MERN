import React from 'react';

// Material-UI Components
import { Typography, Paper, Grid, TextField } from '@material-ui/core';

// Image Uploader
import { DropzoneArea } from 'material-ui-dropzone';

// Component Style
import useStyles from './NewConferencesLayout_Styles';

const NewConferenceLayout = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h5" className={classes.title} gutterBottom>
                Add New Conference
            </Typography>
            <Paper elevation={3} className={classes.root}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <TextField fullWidth required id="conference_name" name="conference_name" label="Conference Name" variant="outlined" />
                        </Grid>
                        <Grid item md={6}>
                            <TextField fullWidth multiline id="description" name="description" label="Description" variant="outlined" />
                        </Grid>
                        <Grid item md={6}>
                            <DropzoneArea filesLimit={1} showAlerts={false} acceptedFiles={['image/*']} dropzoneText={"Upload Conference Logo"} />
                        </Grid>
                        <Grid item md={6}>
                            <TextField fullWidth required id="conference_date" name="conference_date" label="Conference Date" type="datetime-local" InputLabelProps={{shrink: true}} variant="outlined" />
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </React.Fragment>
    );
};

export default NewConferenceLayout;