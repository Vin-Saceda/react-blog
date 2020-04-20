import React, { Component } from 'react'
import RegisterForm from '../forms/RegisterForm';

class RegisterPage extends Component {
    render() {
        return (
            <div className="container">
                <h2>Register</h2>
                <RegisterForm />
            </div>
        )
    }
}

export default  RegisterPage;
