import React, { Component } from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

class RegisterForm extends Component {
   state = {
       data: {
           email: '',
           password: '',
           name: '',
           lastName: ''
       },
       errors: {}
   }

   handleChange = e => {
       this.setState({
           data: {
               ...this.state.data,
               [e.target.name]: e.target.value
           }
       })
   }

   handleSubmit = e => {
       e.preventDefault();
       const errors = this.validateForm(this.state.data);
       this.setState({ errors })
       
       if(Object.keys(errors).length === 0){
           this.props.dispatch(registerUser(this.state.data))
                        .then(response => {
                            if(response.payload.success){
                                this.props.history.push('/login');
                            }
                        })
       }
   }

   validateForm = data => {
       const errors = {};
       if(!data.name) errors.name = "First Name should not be empty";
       if(!data.lastName) errors.lastName = "Last Name should not be empty";
       if(!data.email) errors.email = "Email should not be empty";
       if(!data.password) errors.password = "Password should not be empty";

       return errors;
   }

    render() {
        const { errors, data } = this.state;

        return (
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                        <input 
                            name="name" 
                            type="text" 
                            className="validate" 
                            placeholder="First Name"
                            value={data.name}
                            onChange={this.handleChange}
                        />
                        <label className="active">First Name</label>
                        {errors.name && <span style={{color: "red"}}>{errors.name}</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input 
                            name="lastName" 
                            type="text" 
                            className="validate" 
                            placeholder="Last Name"
                            value={data.lastName}
                            onChange={this.handleChange}
                        />
                        <label className="active">Last Name</label>
                        {errors.lastName && <span style={{color: "red"}}>{errors.lastName}</span>}
                        </div>
                    </div>
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
                        <div className="input-field col s12">
                        <input 
                            name="confirmPassword" 
                            type="password" 
                            className="validate" 
                            placeholder="Confirm Password"
                            value={data.confirmPassword}
                            onChange={this.passwordConfirmation}
                        />
                        <label className="active">Confirm Password</label>
                        {errors.confirmPassword && <span style={{color: "red"}}>{errors.confirmPassword}</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s1">
                            <button className="waves-effect waves-light btn">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(withRouter(RegisterForm));
