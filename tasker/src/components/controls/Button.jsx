import React from 'react'
import MuiButton from '@material-ui/core/Button';

const Button = (props) => {

    const {label, variant, color, startIcon, endIcon, other} = props

    return (
        <MuiButton
            variant={variant || "contained"}
            color={color || "secondary"}
            startIcon={startIcon}
            endIcon={endIcon}
            type="submit"
            { ...other }
        >
        {label}
        </MuiButton>
    )
}

export default Button
