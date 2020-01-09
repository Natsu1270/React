import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.util'

import './signup.style.scss'

class Signup extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            comfirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, comfirmPassword } = this.state
        if (password !== comfirmPassword) {
            alert('passwords not match')
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, { displayName })

        } catch (e) {
            console.log('error signup: ', e)
        }

    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, comfirmPassword } = this.state
        return (
            <div className="signup">
                <h2 className="title">I don't have accoutn</h2>

                <form action="" className="signup-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" label="displayName" onChange={this.handleChange} value={displayName} required />
                    <FormInput type="text" name="email" label="email" onChange={this.handleChange} value={email} required />
                    <FormInput type="password" name="password" label="password" onChange={this.handleChange} value={password} required />
                    <FormInput type="password" name="comfirmPassword" label="comfirmPassword" onChange={this.handleChange} value={comfirmPassword} required />

                    <CustomButton isGoogle={false} type="submit" >Sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signup