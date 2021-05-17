import React, {useContext, useEffect} from 'react';

// React Router
import { Link } from 'react-router-dom';

// Stores
import { ConferencesStore } from "../../../../Sources/Stores/Conferences/ConferencesStore";

// Actions
import AllConferencesAction from "../../../../Sources/Actions/Dashboard/ConferencesActions/AllConferencesActions";

// Operations
import NewConferencePageFunctions from '../../../../Functions/Dashboard/Conferences/NewConferencePageFunctions';

// Material-UI Components
import {Box, Button, Grid, TextField, Typography, MenuItem, CircularProgress} from "@material-ui/core";

// Material-UI Icons
import { ArrowBack } from "@material-ui/icons";

// Image Uploader
import { DropzoneArea } from 'material-ui-dropzone';

// Component Style
import useStyles from './NewConferencePageLayout_Styles';

const NewConferencePageLayout = () => {
    const classes = useStyles();
    const {NewConferencePage, FormData, FormValid, FormSubmit, Loading, Error} = NewConferencePageFunctions();
    const {AllConferencesState: {AllConferences: {Data}}, AllConferencesDispatch} = useContext(ConferencesStore);
    const Conferences = Data.data

    // Get Conferences
    useEffect(() => {
        AllConferencesAction(AllConferencesDispatch)
    }, [AllConferencesDispatch])

    const ImageFiles = (event) => {
        console.log(event);
    }

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
                            <TextField fullWidth required select value={NewConferencePage.conference_id || ''} onChange={FormData} id="conference_id" name="conference_id" label="Conference" variant="outlined">
                                {Conferences ?
                                    Conferences.map((Conference) => (
                                        <MenuItem key={Conference._id} value={Conference._id}>
                                            {Conference.name}
                                        </MenuItem>)
                                    ) :
                                    <MenuItem disabled>No Countries Available</MenuItem>
                                }
                            </TextField>
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant="body2" gutterBottom>
                                Page Title
                            </Typography>
                            <TextField fullWidth required value={NewConferencePage.name || ''} onChange={FormData} id="name" name="name" label="Page Title" variant="outlined" />
                        </Grid>
                        <Grid item md={6} className={classes.dropzone}>
                            <Typography variant="body2" gutterBottom>
                                Page Background
                            </Typography>
                            <DropzoneArea filesLimit={1} value={NewConferencePage.background || ''} onChange={ImageFiles} id="background" name="background" showAlerts={false} acceptedFiles={['image/*']} dropzoneText={"Upload Background Image"} />
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant="body2" gutterBottom>
                                Description
                            </Typography>
                            <TextField fullWidth required value={NewConferencePage.description || ''} onChange={FormData} id="description" name="description" label="Description" variant="outlined" rows={11} multiline />
                        </Grid>
                        <Grid item md={12}>
                            <Button onClick={FormSubmit} id="Submit" disabled={FormValid || Loading} variant="contained" className={classes.button} disableElevation>
                                {(Loading) ? <CircularProgress /> : <React.Fragment>Save Page</React.Fragment>}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </React.Fragment>
    );
};

export default NewConferencePageLayout;