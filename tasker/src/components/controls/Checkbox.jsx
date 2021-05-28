import React, { useState } from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';

const Checkbox = (props) => {
    const {isDone = false} = { props }
    const [checked, setChecked] = useState(isDone);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (

        <MuiCheckbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    );
}

export default Checkbox