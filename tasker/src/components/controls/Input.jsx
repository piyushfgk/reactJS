import React from 'react'
import TextField from '@material-ui/core/TextField'

const Input = (props) => {

    const {id, label, value, error = null, onChange, other = null} = props

    return (
        <TextField
            id={id}
            label={label}
            fullWidth={true}
            value={value}
            onChange={onChange}
            { ...other }
            { ...(error && {error: true, helperText: error})}
        />
    )
}

export default Input
