import React from 'react';

// React Router
import { Link } from 'react-router-dom';

// Material-UI Components
import {Box, Button, Grid, TextField, Typography, MenuItem} from "@material-ui/core";

// Material-UI Icons
import { ArrowBack } from "@material-ui/icons";

// Image Uploader
import { DropzoneArea } from 'material-ui-dropzone';

// Component Style
import useStyles from './NewConferencePageLayout_Styles';

const NewConferencePageLayout = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Typography className={classes.title} variant="h5" gutterBottom>
                    New Conferences Pages
                    <Box component={'span'}>Create New Conferences Pages Section.</Box>
                </Typography>
                <Button startIcon={<ArrowBack />} variant="contained" color="primary" component={Link} to={'/dashboard/pages'}>
                    Back
                </Button>
            </Box>
            <form noValidate autoComplete="off">
                <Box className={classes.card}>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <Typography variant="body2" gutterBottom>
                                Conferences
                            </Typography>
                            <TextField fullWidth required select value={''} name="conference" label="Conference" variant="outlined" helperText={''}>
                                <MenuItem value={'hh'}>hh</MenuItem>
                                <MenuItem disabled>No Countries Available</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant="body2" gutterBottom>
                                Page Title
                            </Typography>
                            <TextField fullWidth required id="page_title" name="page_title" label="Page Title" variant="outlined" />
                        </Grid>
                        <Grid item md={6} className={classes.dropzone}>
                            <Typography variant="body2" gutterBottom>
                                Page Background
                            </Typography>
                            <DropzoneArea filesLimit={1} showAlerts={false} acceptedFiles={['image/*']} dropzoneText={"Upload Background Image"} />
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </React.Fragment>
    );
};

export default NewConferencePageLayout;