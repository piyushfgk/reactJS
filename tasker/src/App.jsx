import React from 'react'
import Header from './components/Header'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    taskList: {
        marginTop: "3rem"
    }
  }));

const App = () => {

    const classes = useStyles()

    return (
        <>
            <Header></Header>

            <Grid container direction="row" justify="center">
                <Grid item xs={11}>
                    <Paper elevation={0}>
                        <TaskForm></TaskForm>
                        <Grid container item className={classes.taskList}>
                            <Tasks></Tasks>
                            <Tasks></Tasks>
                            <Tasks></Tasks>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default App
