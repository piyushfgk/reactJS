import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';

const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom: 10,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    brand: {
      letterSpacing: 5,
      fontWeight: 600,
      flexGrow: 1
    }
  }));

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Typography className={classes.brand} variant="h5">ToDo</Typography>
                    <FormatListBulletedRoundedIcon fontSize="large"></FormatListBulletedRoundedIcon>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
