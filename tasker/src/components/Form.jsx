import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: "500px",
      margin: '0 auto',
    },
  }));

const Form = (props) => {

    const classes = useStyles();
    const {children, ...other} = props

    return (

        <form className={classes.root} autoComplete="off" { ...other }>
            {children}
        </form>

    )
}

export default Form