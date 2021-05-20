import React, { useState } from 'react'

const LoginForm = ({onLogin}) => {
    const [formInput, setformInput] = useState({
        email: "",
        password: "",
        remember: false,
        validEmail: true,
        validPassword: true
    })

    const getInput = (e) => {
        const id = e.target.id

        setformInput((preValue) => {
            if (id === 'exampleInputEmail1') {
                return {
                    email: e.target.value,
                    password: preValue.password,
                    remember: preValue.remember,
                    validEmail: preValue.validEmail,
                    validPassword: preValue.validPassword
                }
            } else if (id === 'exampleInputPassword1') {
                return {
                    email: preValue.email,
                    password: e.target.value,
                    remember: preValue.remember,
                    validEmail: preValue.validEmail,
                    validPassword: preValue.validPassword
                }
            } else if (id === 'exampleCheck1') {
                return {
                    email: preValue.email,
                    password: preValue.password,
                    remember: e.target.checked,
                    validEmail: preValue.validEmail,
                    validPassword: preValue.validPassword
                }
            }
        })
    }

    const Login = (e) => {
        let formStatus = true
        e.preventDefault()

        setformInput((preValue) => {
            return {
                email: preValue.email,
                password: preValue.password,
                remember: preValue.checked,
                validEmail: true,
                validPassword: true
            }
        })

        if (!formInput.email) {
            setformInput((preValue) => {
                return {
                    email: preValue.email,
                    password: preValue.password,
                    remember: preValue.checked,
                    validEmail: false,
                    validPassword: preValue.validPassword
                }
            })

            formStatus = false
        }

        if (!formInput.password) {
            setformInput((preValue) => {
                return {
                    email: preValue.email,
                    password: preValue.password,
                    remember: preValue.checked,
                    validEmail: preValue.validEmail,
                    validPassword: false
                }
            })

            formStatus = false
        }

        if (formStatus === false) return

        // Clear Form
        setformInput((preValue) => {
            return {
                email: '',
                password: '',
                remember: preValue.remember
            }
        })

        onLogin({
            message: "You logged in successfully !",
            isLogin: true,
            formInput: formInput
        })
        // Show success message
        // alert("You logged in successfully !")
        console.log(formInput)
    }


    return (
        <div className="form">
            <h2 className="p-3 bg-secondary text-light text-center">Login Form 1</h2>
            <form className="w-50 mx-auto" onSubmit={Login}>
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className={`form-control ${formInput.validEmail === false ? 'is-invalid' : ''}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={formInput.email} onChange={getInput}/>
                    <small id="emailHelp" className={`form-text ${formInput.validEmail === false ? 'invalid-feedback' : ''}`}>We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className={`form-control ${formInput.validPassword === false ? 'is-invalid' : ''}`} id="exampleInputPassword1" placeholder="Password" value={formInput.password} onChange={getInput}/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" defaultChecked={formInput.remember} onChange={getInput}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
