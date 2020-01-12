import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import './login.style.scss'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert(error)
        }

        this.setState({ email: '', password: '' })

    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {


        return (
            <div className="login">
                <h2>I have already have an account</h2>

                <form action="/login" onSubmit={this.handleSubmit}>
                    <FormInput label="email" type="text" id="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label="password" type="password" id="password" name="password" value={this.state.password} handleChange={this.handleChange} required />
                    <CustomButton isGoogle={false} type="submit" >Login</CustomButton>
                    <CustomButton isGoogle={true} onClick={signInWithGoogle}>Login with google</CustomButton>
                </form>
            </div>
        )
    }
}

export default Login