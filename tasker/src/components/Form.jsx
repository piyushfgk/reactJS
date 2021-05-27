import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Controls from './controls/Controls'

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
    const initialFValues = {
        id: 0,
        taskTitle: '',
        dateTime: Date(),
        mobile: '',
        city: '',
        gender: 'male',
        departmentId: '',
        hireDate: new Date(),
        isPermanent: false,
    }
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});
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

    const handleInputChange = e => {
        const {id, value} = e.target

        setValues({ ...values, [id]: value})

        validate({ [id]: value })
    }

    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('taskTitle' in fieldValues)
            temp.taskTitle = fieldValues.taskTitle ? "" : "Task is required."
        if ('dateTime' in fieldValues) {
            const {_d: date, _isValid: isValidDate} = fieldValues.dateTime ?? {_d: null, _isValid: null}
            temp.dateTime = date === null ? "Date Time is required." : isValidDate === false ? "Please choose date time by clicking calendar icon." : ""
        }

        setErrors(temp)

        /**
         * Check whether temp has any errors and
         * returns a boolean value based on condition
         * */
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    return (

        <form className={classes.root} autoComplete="off" onSubmit={submitForm}>
            <Grid container>
                <Grid item container direction="column" spacing={4}>
                      <Grid item>
                        <Controls.Input
                            id="taskTitle"
                            label="Task"
                            value={values.taskTitle}
                            onChange={handleInputChange}
                            error={errors.taskTitle}
                            other={{
                                multiline: true,
                                rowsMax: 4,
                                fullWidth: true
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Controls.DateTime
                            id="dateTime"
                            value={values.dateTime}
                            onChange={handleInputChange}
                            error={errors.dateTime}
                            other={{
                                format: "DD/MM/yyyy HH:mm",
                                fullWidth: true,
                                InputLabelProps: {
                                    shrink: true,
                                },
                                disablePast: true,
                                minDateMessage: "Date should not be in the past"
                            }}
                        />
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
