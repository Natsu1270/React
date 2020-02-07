import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth } from "../../firebase/firebase.util";
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'
import { useSelector, useDispatch } from 'react-redux'


import './login.style.scss'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const googleSignIn = () => dispatch(googleSignInStart())
    const emailPasswordSignIn = (email, password) => dispatch(emailSignInStart({ email, password }))

    const handleSubmit = async (event) => {
        event.preventDefault()
        emailPasswordSignIn(email, password)
    }

    const handleChange = event => {
        const { value, name } = event.target
        name === 'email' ? setEmail(value) : setPassword(value)
    }

    return (
        <div className="login">
            <h2>I have already have an account</h2>

            <form action="/login" onSubmit={handleSubmit}>
                <FormInput label="email" type="text" id="email" name="email" value={email} handleChange={handleChange} required />
                <FormInput label="password" type="password" id="password" name="password" value={password} handleChange={handleChange} required />
                <CustomButton isGoogle={false} type="submit" >Login</CustomButton>
                <CustomButton type='button' isGoogle={true} onClick={googleSignIn}>Login with google</CustomButton>
            </form>
        </div>
    )
}

export default Login