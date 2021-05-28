import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Controls from './controls/Controls'
import useForm from './useForm'
import Form from './Form'

const initialFValues = {
    id: 0,
    taskTitle: '',
    dateTime: Date(),
    isReminder: false,
    isDone: false
}

const useStyles = makeStyles((theme) => ({
    formFooter: {
        marginTop: "3rem"
    },
    addButton: {
        [theme.breakpoints.down('xs')]: {
            marginTop: "2rem",
        }
    }
  }));

const TaskForm = () => {
    const classes = useStyles();

    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('taskTitle' in fieldValues)
            temp.taskTitle = fieldValues.taskTitle ? "" : "Task is required."
        if ('dateTime' in fieldValues) {
            temp.dateTime = fieldValues.dateTime ? "" : "Date Time is required, Please choose date time by clicking calendar icon."
        }

        setErrors(temp)

        /**
         * Check whether temp has any errors and
         * returns a boolean value based on condition
         * */
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const submitForm = (event) => {
        event.preventDefault()

        if (validate()) {
            console.log(values)
            clearForm()
        } else {
            console.error("Invalid data entry, please correct")
        }
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        clearForm
    } = useForm(initialFValues, true, validate)

    return (
        <Form onSubmit={submitForm}>
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
                    <Grid item xs={12} sm={8}>
                        <Controls.Toggler
                            id="isReminder"
                            label="Remind me"
                            isChecked={values.isReminder}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.addButton}>
                        <Controls.Button
                            label="Add"
                            startIcon={<AddIcon />}
                            other={{
                                fullWidth: true
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Form>
    )
}

export default TaskForm
