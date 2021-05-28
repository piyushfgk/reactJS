import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddAlertRoundedIcon from '@material-ui/icons/AddAlertRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Checkbox from './controls/Checkbox';

const useStyles = makeStyles((theme) => ({
    taskContainer: {
        marginBottom: "1rem"
    },
    taskAction: {
        [theme.breakpoints.down('xs')]: {
            marginTop: "2rem",
            display: 'flex',
            justifyContent: "space-evenly"
        }
    },
    taskReminder: {
        maxWidth: "2em",
        minWidth: "1rem",
        height: "100%"
    },
    taskReminderColor: {
        backgroundColor: "#1A76D2"
    },
    taskTitle: {

    }
  }));

const Tasks = () => {

    const classes = useStyles()
    const reminder = true

    return (
        <Grid container className={classes.taskContainer}>
            <Grid item xs>
                <Paper>
                    <Grid container>
                        <Grid container item alignItems="center">
                        <Grid item>
                            <Checkbox isDone={true}></Checkbox>
                        </Grid>
                        <Grid item className={classes.taskTitle} >
                            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                        </Grid>
                        <Grid container item md={4} className={classes.taskAction} >
                            <Grid item>
                                <Button disabled><AddAlertRoundedIcon color="secondary"></AddAlertRoundedIcon></Button>
                            </Grid>

                            <Grid item>
                                <Button><DeleteForeverRoundedIcon></DeleteForeverRoundedIcon></Button>
                            </Grid>

                            <Grid item>
                                <Button><EditRoundedIcon></EditRoundedIcon></Button>
                            </Grid>


                        </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Tasks
