import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        // backgroundColor: "#ebf0f3",
        color: "#969899",
        marginTop: "5rem",
        textAlign: "center",
        padding: "0.5rem",
        borderRadius: 0
    },
    footerTitle: {
        fontSize: "1rem"
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <Paper elevation={2} className={classes.footer}>
            <Typography className={classes.footerTitle} variant="caption" noWrap>
                Tasker &copy; {new Date().getFullYear()}
            </Typography>
        </Paper>
    )
}

export default Footer
