import React from 'react'

const Welcome = (params) => {
    const {message, email, onLogout} = params

    return (
        <div className="form">
            <div className="row">
                <div className="col text-center">
                    <h1 className="p-3 bg-success text-light">{message}</h1>
                    <p>Welcome! <strong>{email}</strong></p>
                    <button onClick={onLogout} className="btn btn-secondary mt-3">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
