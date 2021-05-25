import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react'
import MomentUtils from '@date-io/moment';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: "500px",
      margin: '0 auto'
    },
    formFooter: {
        marginTop: "3rem"
    }
  }));

const Form = () => {
    const classes = useStyles();

    const defaultInputs = {
        taskTitle: "",
        isReminder: false,
        dateTime: new Date(),
        taskErr: false,
        dateTimeErr: false,
        taskErrMsg: "",
        dateTimeErrMsg: ""
    }

    const [formData, setFormData] = useState(defaultInputs);
    const { taskTitle, isReminder, dateTime, taskErr, dateTimeErr, taskErrMsg, dateTimeErrMsg } = formData;

    const getInput = event => {
        const id = event.target.id
        let value = event.target.value

        if (id === 'isReminder') value = event.target.checked

        if (id === 'taskTitle' && !value) {
            setFormData({
                ...formData,
                taskErrMsg: "Task description is required"
            })

            return
        }

        setFormData({
            ...formData,
            [id]: value
        })
    }

    // We explicitly have to set date as we are using Moment.js
    const onDateChange = date => {
        const inputDate = date._isValid !== true ? date._i : date._d

        if (!inputDate) {
            setFormData({
                ...formData,
                dateTimeErrMsg: "Not a valid date time"
            })

            return
        }

        setFormData({...formData, dateTime: inputDate})
    }

    return (

        <form className={classes.root} autoComplete="off">
            <Grid container>
                <Grid item container direction="column" spacing={4}>
                    <Grid item>
                        <TextField
                            id="taskTitle"
                            error={taskErr}
                            label="Task"
                            fullWidth={true}
                            helperText={taskErr === true ? taskErrMsg : ''}
                            multiline
                            rowsMax={4}
                            value={taskTitle}
                            onChange={getInput}
                        />
                    </Grid>
                    <Grid item>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDateTimePicker
                                error={dateTimeErr}
                                id="dateTime"
                                variant="outlined"
                                ampm={false}
                                label="Date Time"
                                value={dateTime}
                                onChange={onDateChange}
                                onError={console.log}
                                fullWidth={true}
                                disablePast
                                format="DD/MM/yyyy HH:mm"
                                helperText={dateTimeErr === true ? dateTimeErrMsg : ''}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
                <Grid item container justify="space-between" className={classes.formFooter}>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch id="isReminder" checked={isReminder} onChange={getInput}/>}
                            label="Remind me"
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<AddIcon />}
                            fullWidth={true}
                        >
                        Add
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>

    )
}

export default Form
