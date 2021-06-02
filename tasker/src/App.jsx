import React from 'react'
import Header from './components/Header'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from './components/Footer';
import useLocalStorage from './components/useStorage'
import settings from './include/settings.js'

const App = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
          createMuiTheme({
            palette: {
              type: prefersDarkMode ? 'dark' : 'light',
            },
          }),
        [prefersDarkMode],
      );

    const useStyles = makeStyles((theme) => ({
        root: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // flexGrow: 1
        },
        taskList: {
            marginTop: "3rem",
            gap: "1rem"
        }
      }));

    const classes = useStyles()

    const { storedValue: getItems, setItem, deleteItem } = useLocalStorage(settings.storageName)

    return (
        <>
        <ThemeProvider theme={theme}>
            <Paper elevation={0} className={classes.root}>
                <Header></Header>
                <Grid container justify="center" >
                    <Grid item xs={11}>
                        <TaskForm setItem={setItem}></TaskForm>
                        <Grid container direction="column" className={classes.taskList}>
                            {
                              getItems.map(task => (
                                <Tasks key={task.id} taskInfo={task} deleteItem={deleteItem}></Tasks>
                              ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Footer></Footer>
            </Paper>
        </ThemeProvider>
        </>
    )
}

export default App
