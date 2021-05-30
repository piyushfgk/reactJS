import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddAlertRoundedIcon from '@material-ui/icons/AddAlertRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Checkbox from './controls/Checkbox';

const useStyles = makeStyles((theme) => ({
    taskInfo: {
        width: "70%",
        backgroundColor: "#3F50B5",
        minHeight: "60px",
        flexFlow: "row",
        padding: "0.5rem",
        color: "#fff",
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        }
    },
    taskAction: {
        width: "30%",
        backgroundColor: "#D5DCF9",
        borderRadius: theme.shape.borderRadius,
        minHeight: "60px",
        flexFlow: "row",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            justifyContent: "center"
        }
    },
    isChecked: {
        width: "10%"
    },
    taskTitle: {
        width: "90%"
    },
    taskItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#D5DCF9",
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column"
        }
    },
  }));

const Tasks = (props) => {

    const classes = useStyles()
    const { reminder = false, taskTitle = null } = props

    return (
            <Paper className={classes.taskItem}>
                <Grid container item alignItems="center" className={classes.taskInfo}>
                    <Checkbox isDone={true} className={classes.isChecked}></Checkbox>
                    <Typography className={classes.taskTitle}>{taskTitle}</Typography>
                </Grid>
                <Grid container item justify="center" alignItems="center" className={classes.taskAction}>
                    <Button disabled><AddAlertRoundedIcon color={reminder ? "secondary" : "inherit"}></AddAlertRoundedIcon></Button>
                    <Button><DeleteForeverRoundedIcon></DeleteForeverRoundedIcon></Button>
                    <Button><EditRoundedIcon></EditRoundedIcon></Button>
                </Grid>
            </Paper>
    )
}

export default Tasks
