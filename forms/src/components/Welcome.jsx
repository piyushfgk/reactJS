import React from 'react'

const Welcome = (params) => {
    return (
        <div className="form">
            <div className="row">
                <div className="col text-center">
                    <h1 className="p-3 bg-success text-light">{params.message}</h1>
                    <p>Welcome! <strong>{params.email}</strong></p>
                    <button onClick={params.onLogout} className="btn btn-secondary mt-3">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
