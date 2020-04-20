import React, { Component } from 'react'

import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <h2>Login</h2>
                <LoginForm />
            </div>
        )
    }
}

export default LoginPage;