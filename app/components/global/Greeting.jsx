import React from 'react';
import { Link } from 'react-router-dom';

import Dashboard from '../user/Dashboard';
import Login from '../user/Login';



class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
        this.props.logIn(true);
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
        this.props.logIn(false);

    }

    render() {
        // Login logout functions
        function LoginButton(props) {
            return (
                <Link to="/Login"><p onClick={props.onClick}>Login</p></Link>
            );
        }

        function LogoutButton(props) {
            return (
                <Link to="/"><p onClick={props.onClick}>Logout</p></Link>
            );
        }
        // Login switch
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        // Rendering
        return (
            <a href="#">{button}</a>

        );
    }

};

export default Greeting;