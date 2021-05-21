import React, { useState } from 'react'

const LoginForm = ({onLogin}) => {
    const initialFormState = {
        email_text: "",
        email_validate: true,
        email_message: "",
        password_text: "",
        password_validate: true,
        password_message: "",
        remember: false
    }
    const [Input, setForm] = useState(initialFormState)

    const doValidation = () => {
        let emailValidate = true;
        let emailMessage = "";
        let passwordValidate = true;
        let passwordMessage = "";

        if (!Input.email_text) {
            emailValidate = false;
            emailMessage = "Email is required !"
        }

        if (!Input.password_text) {
            passwordValidate = false;
            passwordMessage = "Password is required !";
        }

        if (!Input.email_text || !Input.password_text) {
            setForm({
                    ...Input,
                    email_validate: emailValidate,
                    email_message: emailMessage,
                    password_validate: passwordValidate,
                    password_message: passwordMessage,
                }
            )

            return false
        }
    }

    const Login = (e) => {
        e.preventDefault()

        if (doValidation() === false) return

        onLogin({
            message: "You logged in successfully !",
            isLogin: true,
            formInput: {email: Input.email_text}
        })
    }

    return (
        <div className="form">
            <h2 className="p-3 bg-secondary text-light text-center">Login Form 2</h2>
            <form className="w-50 mx-auto" onSubmit={Login}>
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                    className={`form-control ${Input.email_validate === false ? 'is-invalid' : ''}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    value={Input.email_text}
                    onChange={(e) => setForm({...Input, email_text: e.target.value})}/>
                    <small id="emailHelp"
                    className={`form-text ${Input.email_validate === false ? 'invalid-feedback' : ''}`}>{Input.email_validate ? "We'll never share your email with anyone else." : Input.email_message}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                    className={`form-control ${Input.password_validate === false ? 'is-invalid' : ''}`} id="exampleInputPassword1" placeholder="Password"
                    value={Input.password_text}
                    onChange={(e) => setForm({...Input, password_text: e.target.value})}/>
                    <small id="passwordHelp"
                    className={`form-text ${Input.password_validate === false ? 'invalid-feedback' : ''}`}>{Input.password_validate ? "" : Input.password_message}
                    </small>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"
                    defaultChecked={Input.remember}
                    onChange={(e) => setForm({...Input, remember: e.target.checked})}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
