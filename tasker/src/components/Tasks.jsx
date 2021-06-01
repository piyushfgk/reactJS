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
import { deleteStoreItem } from './Storage'

const storageName = "tasks"

const useStyles = makeStyles((theme) => ({
    taskInfo: {
        backgroundColor: "#3f4f729e",
        minHeight: "60px",
        flexFlow: "row",
        padding: "0.5rem",
        color: "#e7e3e3",
        flex: 2,
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    taskAction: {
        flex: 1,
        borderRadius: theme.shape.borderRadius,
        minHeight: "60px",
        flexFlow: "row",
        [theme.breakpoints.down('sm')]: {
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
        // direction: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#d5dcf99e",
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        }
    },
  }));

const Tasks = (props) => {

    const classes = useStyles()
    const { id, dateTime, isDone, isReminder, taskTitle } = props.taskInfo

    const deleteItem = (id) => deleteStoreItem(storageName, id)

    return (
            <Paper className={classes.taskItem}>
                <Grid container item alignItems="center" className={classes.taskInfo}>
                    <Checkbox isDone={isDone} className={classes.isChecked}></Checkbox>
                    <Typography className={classes.taskTitle}>{taskTitle}</Typography>
                </Grid>
                <Grid container item justify="center" alignItems="center" className={classes.taskAction} color="secondary">
                    <Button disabled><AddAlertRoundedIcon color={isReminder ? "secondary" : "inherit"}></AddAlertRoundedIcon></Button>
                    <Button onClick={() => {deleteItem(id)}} ><DeleteForeverRoundedIcon></DeleteForeverRoundedIcon></Button>
                    <Button><EditRoundedIcon></EditRoundedIcon></Button>
                </Grid>
            </Paper>
    )
}

export default Tasks
