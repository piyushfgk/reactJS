import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    menuIcon: {
      marginRight: theme.spacing(2),
    },
  }));

const MainUI = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
            <AppBar>
                <Toolbar>
                    <Link href="/">
                        <FormatListBulletedIcon className={classes.menuIcon}/>
                        <Typography variant="h6" className={classes.title}>
                            ToDo
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
    )
}

export default MainUI
