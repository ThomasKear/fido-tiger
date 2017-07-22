// Include React
const React = require("react");
const Link = require("react-router").Link;

import Nav from './global/Nav';
import Footer from './global/Footer';
import Dashboard from './user/Dashboard';
import Login from './user/Login';
import Splash from './user/Splash';


// Creating the Main component
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false };
        this.logIn = this.logIn.bind(this);
    }
    logIn(bool) {
      this.setState({loggedIn: bool});
      console.log(this.state.loggedIn);
    }

    render() {
      function DisplayLoggedIn(props) {
        return(
          <Login/>
          );
      }
      function DisplaySplash(props) {
        return(
          <Splash/>
          );
      }
      // Login switch
      const loggedIn = this.state.loggedIn;
      let display = null;
      if (loggedIn){
        display = <DisplayLoggedIn logIn={this.logIn}/>;
      } else {
        display = <DisplaySplash/>;
      }
        return (
            <div>
                <Nav logIn={this.logIn}/>              
                <h1>Hello</h1>
                {/*<a href="/auth/google">Sign In with Google</a>*/}
                <div>{display}</div>
              </div> 

        );
    }
};

// Export the component back for use in other files
module.exports = Main;