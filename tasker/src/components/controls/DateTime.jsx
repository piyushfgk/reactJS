import React from 'react'
import MomentUtils from '@date-io/moment';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';

const DateTime = (props) => {

    const {id, label, value, variant, error = null, onChange, other} = props

    const convertToDefEventPara = (id, momentObj) => {

        const {_d: date, _isValid: isValidDate} = momentObj ?? {_d: null, _isValid: null}
        const dateTime = isValidDate === true ? date : null

        return {
            target: {
                id: id,
                value: dateTime
            }
        }
    }

    const newDate = value ? moment(new Date(value)).format("DD/MM/yyyy HH:mm") : value

    return (
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDateTimePicker
                    id={id}
                    label={label || "Date Time"}
                    variant={variant || "outlined"}
                    inputValue={newDate}
                    ampm={true}
                    onChange={momentDateTime => onChange(convertToDefEventPara(id, momentDateTime))}
                    { ...other }
                    { ...(error && {error: true, helperText: error}) }
                />
            </MuiPickersUtilsProvider>
    )
}

export default DateTime
