import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Message = (props) => {
    const [state, setState] = React.useState({
        open: true,
        vertical: 'top',
        horizontal: 'center',
      });

    const { open } = state;

    const handleClose = () => {
      setState({ ...state, open: false });
    };

    const {message, severity} = props

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
            {message}
            </Alert>
      </Snackbar>
    )
}

export default Message
