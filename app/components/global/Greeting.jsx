import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Dashboard from '../user/Dashboard';



class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        function LoginButton(props) {
            return (
                <Link to="/Dashboard"><p onClick={props.onClick}>Login</p></Link>
            );
        }

        function LogoutButton(props) {
            return (
                <Link to="/Dashboard"><p onClick={props.onClick}>Logout</p></Link>
            );
        }
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>{button}</div>

        );
    }

};

export default Greeting;