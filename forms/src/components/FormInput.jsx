import React, { useState } from 'react'

const FormInput = () => {
    const [inputText, setInputText] = useState('')
    const [headerText, setHeaderText] = useState(inputText)

    const submitInput = (e) => {

        e.preventDefault()

        if (!inputText) {
            alert("You must type something!")
            return
        }

        // Setting text by capitalizing each word
        setHeaderText(inputText.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()))

        // Clear the input field after submit
        setInputText('')
    }

    return (
        <div className="w-50 mx-auto">
            <h1 className="my-5 h2 text-center" style={{minHeight: "50px", fontFamily: "monospace", border: "2px dashed lightgrey"}}>{headerText}</h1>

            <form onSubmit={submitInput}>
                <div className="form-group">
                    <label htmlFor="headerText">Type below</label>
                    <input type="text" className="form-control" id="headerText" aria-describedby="emailHelp" placeholder="Type something and press enter or Submit" autoFocus="on" onChange={(e) => {setInputText(e.target.value)}} value={inputText} autoComplete="off"/>
                    <small id="emailHelp" className="form-text text-muted">We'll show you the power of ReactJS.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormInput
