import React from 'react'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Toggler = (props) => {

    const {id, label, isChecked, onChange} = props

    const convertToDefEventPara = (id, value) => ({
        target: {
            id,
            value
        }
    })

    return (
            <FormControlLabel
            control={<Switch id={id} checked={isChecked} onChange={e => onChange(convertToDefEventPara(id, e.target.checked))}/>}
            label={label}
            />
    )
}

export default Toggler
