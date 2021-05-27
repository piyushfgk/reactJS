import React from 'react'
import Header from './components/Header'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import TaskForm from './components/TaskForm';

const App = () => {
    return (
        <>
            <Header></Header>

            <Grid container direction="row" justify="center">
                <Grid item xs={10}>
                    <Paper elevation={0}>
                        <TaskForm></TaskForm>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default App
