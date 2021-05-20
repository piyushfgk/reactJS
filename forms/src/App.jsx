import React, { useState } from 'react'
import FormInput from './components/FormInput'
import LoginForm1 from './components/LoginForm1'
import Welcome from './components/Welcome'

const App = () => {
    const[doLogin, setLogin] = useState({
        message: '',
        status: false,
        input: null
    })

    const onLogin = (params) => {
        if (params.isLogin === true) {
            setLogin({
                message: params.message,
                status: params.isLogin,
                input: params.formInput
            })
        }
    }

    const Logout = () => setLogin(false)

    return (
        <>
            <FormInput />
            <hr />
            {
                doLogin.status === true ? <Welcome message={doLogin.message} email={doLogin.input.email} onLogout={Logout}/> : <LoginForm1 onLogin={onLogin}/>
            }
            <hr />
        </>
    )
}

export default App
