import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

import { loginUser } from '../../actions/user_actions';


class LoginForm extends Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        errors: {}
    }


    handleChange = e => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        });
        
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validateData(this.state.data);
        this.setState({errors})
        let dataToSubmit = {
            email: this.state.data.email,
            password: this.state.data.password
        }
        if(Object.keys(errors).length === 0){
            this.props.dispatch(loginUser(dataToSubmit))
                .then(response => {
                    if(response.payload.loginSucess){
                        this.props.history.push('/')
                    }
                })
        }

    }


    validateData = data => {
        const errors = {};
        if(!data.email) errors.email = "Email shoul not be empty";
        if(!data.password) errors.password = "Password should not be empty";
        return errors;
    }


    render() {
        const { data, errors } = this.state;
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                        <input 
                            name="email" 
                            type="email" 
                            className="validate" 
                            placeholder="example@example.com"
                            value={data.email}
                            onChange={this.handleChange}
                        />
                        <label className="active">Email</label>
                        {errors.email && <span style={{color: "red"}}>{errors.email}</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input 
                            name="password" 
                            type="password" 
                            className="validate" 
                            placeholder="Password"
                            value={data.password}
                            onChange={this.handleChange}
                        />
                        <label className="active">Password</label>
                        {errors.password && <span style={{color: "red"}}>{errors.password}</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s1">
                            <button className="waves-effect waves-light btn">Login</button>
                        </div>
                        <div className="col s1">
                            <Link to="/register" className="waves-effect waves-light btn ">Signup</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(LoginForm));
