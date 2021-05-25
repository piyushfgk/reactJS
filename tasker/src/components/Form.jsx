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

    const defaultErrors = {
        taskErrMsg: "",
        dateTimeErrMsg: ""
    }

    const defaultInputs = {
        ...defaultErrors,
        taskTitle: "",
        isReminder: false,
        dateTime: new Date()
    }

    const [formData, setFormData] = useState(defaultInputs);
    const { taskTitle, isReminder, dateTime, taskErrMsg, dateTimeErrMsg } = formData;

    const getInput = (event) => {
        const id = event.target.id
        let value = event.target.value ?? ""

        if (id === 'isReminder') value = event.target.checked

        setFormData({ ...formData, [id]: value })
    }

    // We explicitly have to set date as we are using Moment.js
    const onDateChange = (date) => {
        let inputDate = null
        let msg = ""

        try {
            inputDate = date._isValid !== true ? date._i : date._d // _i contains previous date and _d containes current value
        } catch (error) {
            if (inputDate === null) {
                msg = "Not a valid date time"
            }
        }

        setFormData({...formData, dateTime: inputDate, dateTimeErrMsg: msg})
    }

    const submitForm = (event) => {
        event.preventDefault()

        let errors = defaultErrors
        let formStatus = true

        if (!formData.taskTitle) {
            errors = { ...errors, taskErrMsg: "Task description is required" }
            formStatus = false
        }

        if (formData.dateTimeErrMsg) {
            errors = { ...errors, dateTimeErrMsg: "Date Time is required" }
            formStatus = false
        }

        if (formStatus === false) {
            setFormData({ ...formData, ...errors })
        } else {
            addTask(formData)
            setFormData(defaultInputs)
        }
    }

    const addTask = (params) => {console.log("add task", params)}

    return (

        <form className={classes.root} autoComplete="off" onSubmit={submitForm}>
            <Grid container>
                <Grid item container direction="column" spacing={4}>
                    <Grid item>
                        <TextField
                            id="taskTitle"
                            error={taskErrMsg !== ""}
                            label="Task"
                            fullWidth={true}
                            helperText={taskErrMsg !== "" ? taskErrMsg : ''}
                            multiline
                            rowsMax={4}
                            value={taskTitle}
                            onChange={getInput}
                        />
                    </Grid>
                    <Grid item>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDateTimePicker
                                error={dateTimeErrMsg !== ""}
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
                                helperText={dateTimeErrMsg !== "" ? dateTimeErrMsg : ''}
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
                            type="submit"
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
