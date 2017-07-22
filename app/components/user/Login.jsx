import React from 'react';
/*import { Form, Text } from 'react-form';*/
import { Link } from 'react-router';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {username: "", password: ""};
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div className="col-sm-4">
            <form onSubmit = { this.handleSubmit } >
            <div className = "form-group" >
            <label htmlFor = "topic"> Username </label> 
            <input value = { this.state.username } type="text" className="form-control"  id="username" required />
            </div> 
            <div className = "form-group">
            <label htmlFor = "start-year"> Password </label> 
            <input value = { this.state.password }  type="text" className="form-control" id="password"required />
            </div>
            <button type="submit" className="btn btn-default">Submit</button> 
            </form>
            </div>
        );

    }
};

export default Login;