import React, {useContext, useEffect} from 'react';

// React Router
import { Link } from 'react-router-dom';

// Stores
import { ConferencesStore } from "../../../../Sources/Stores/Conferences/ConferencesStore";

// Actions
import AllConferencesAction from "../../../../Sources/Actions/Dashboard/ConferencesActions/AllConferencesActions";

// Material-UI Components
import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

// Material-UI Icons
import { Delete, Edit, Settings, AddCircle } from '@material-ui/icons';

// Component Style
import useStyles from './ConferencesLayout_Styles';

const ConferencesLayout = () => {
    const classes = useStyles();
    const BaseURL = process.env.REACT_APP_SERVER_URL;
    const {AllConferencesState: {AllConferences: {Data}}, AllConferencesDispatch} = useContext(ConferencesStore);

    // Get Conferences
    useEffect(() => {
        AllConferencesAction(AllConferencesDispatch)
    }, [AllConferencesDispatch])

    // Date Handling
    const DateHandling = (FullDate) => {
        const DatabaseDate = new Date(FullDate);
        const Year = DatabaseDate.getFullYear();
        const Month = DatabaseDate.getMonth() + 1;
        const Day = DatabaseDate.getDate();

        return (`${Day}-${Month}-${Year}`);
    }

    // Time Handling
    const TimeHandling = (FullDate) => {
        const DatabaseDate = new Date(FullDate);
        const Hours = DatabaseDate.getHours();
        const Minutes = DatabaseDate.getMinutes();
        const Seconds = DatabaseDate.getSeconds();

        return (`${Hours}:${Minutes}:${Seconds}`);
    }

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Typography className={classes.title} variant="h5" gutterBottom>
                    Conferences
                    <Box component={'span'}>List For All Conferences And Conferences Management Section.</Box>
                </Typography>
                <Button startIcon={<AddCircle />} variant="contained" color="primary" component={Link} to={'/dashboard/new-conference'}>
                    Add New
                </Button>
            </Box>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.headCell} align="center" component="th" scope="row">Logo</TableCell>
                        <TableCell className={classes.headCell} align="left">Conference</TableCell>
                        <TableCell className={classes.headCell} align="center">Start Date</TableCell>
                        <TableCell className={classes.headCell} align="center">Start Time</TableCell>
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
                                        <img width="70" src={`${BaseURL}/${Row.logo}`} alt="Logo"/>
                                    </TableCell>
                                    <TableCell align="left">{Row.name}</TableCell>
                                    <TableCell align="center">{DateHandling(Row.start_date)}</TableCell>
                                    <TableCell align="center">{TimeHandling(Row.start_date)}</TableCell>
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

export default ConferencesLayout;