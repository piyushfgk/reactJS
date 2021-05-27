import { useState } from 'react'

export default function useForm (initialFValues, validateOnChange = false, validate) {

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const {id, value} = e.target

        setValues({ ...values, [id]: value, id: Math.floor(Math.random() * 1000) })

        if (validateOnChange)
            validate({ [id]: value })
    }

    const clearForm = () => (setValues(initialFValues))

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        clearForm
    }
}
