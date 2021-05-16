import React, {useContext, useEffect} from 'react';

// React Router
import { Link } from 'react-router-dom';

// Stores
import { ConferencesStore } from "../../../../Sources/Stores/Conferences/ConferencesStore";

// Actions
import AllConferencesPagesAction from "../../../../Sources/Actions/Dashboard/ConferencesActions/AllConferencesPagesActions";

// Material-UI Components
import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

// Material-UI Icons
import { Delete, Edit, Settings, AddCircle } from '@material-ui/icons';

// Component Style
import useStyles from './ConferencesPagesLayout_Styles';

const ConferencesPagesLayout = () => {
    const classes = useStyles();
    const {AllConferencesPagesState: {AllConferencesPages: {Data}}, AllConferencesPagesDispatch} = useContext(ConferencesStore);

    // Get Conferences
    useEffect(() => {
        AllConferencesPagesAction(AllConferencesPagesDispatch)
    }, [AllConferencesPagesDispatch])

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Typography className={classes.title} variant="h5" gutterBottom>
                    Conferences Pages
                    <Box component={'span'}>List For All Conferences Pages And Conferences Pages Management Section.</Box>
                </Typography>
                <Button startIcon={<AddCircle />} variant="contained" color="primary" component={Link} to={'/dashboard/new-page'}>
                    Add New
                </Button>
            </Box>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.headCell} align="center" component="th" scope="row">Image</TableCell>
                        <TableCell className={classes.headCell} align="left">Conference</TableCell>
                        <TableCell className={classes.headCell} align="center">Page Name</TableCell>
                        <TableCell className={classes.headCell} align="left">Description</TableCell>
                        <TableCell className={classes.headCell} align="center">
                            <Settings />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Data.data &&
                    <React.Fragment>
                        {(Data.data).map(Row => (
                            <TableRow key={Row._id}>
                                <TableCell align="center" component="th" scope="row">
                                    <img width="70" src={`${Row.background}`} alt="Logo"/>
                                </TableCell>
                                <TableCell align="left">{Row.conference_id}</TableCell>
                                <TableCell align="center">{Row.name}</TableCell>
                                <TableCell align="left">{Row.description}</TableCell>
                                <TableCell align="center" className={classes.actionsButtons}>
                                    <Button variant="outlined">
                                        <Edit />
                                    </Button>
                                    <Button variant="outlined">
                                        <Delete />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </React.Fragment>
                    }
                </TableBody>
            </Table>
        </React.Fragment>
    );
};

export default ConferencesPagesLayout;