import React from 'react'
import TextField from '@material-ui/core/TextField';

const Input = (props) => {

    return (
            <TextField
                id="taskTitle"
                label="Task"
                fullWidth={true}
                multiline
                rowsMax={4}
                value={taskTitle}
                onChange={getInput}
            />
    )
}

export default Input
