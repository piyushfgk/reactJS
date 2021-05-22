import React from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

const App = () => {
    return (
        <>
            <Header></Header>
            <Grid container direction="row"
  justify="center">
            <Grid item xs={10}>
          <Paper elevation={0}><Form></Form></Paper>
        </Grid>
            </Grid>
        </>
    )
}

export default App
