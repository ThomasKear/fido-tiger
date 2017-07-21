// Include React
const React = require("react");
const Link = require("react-router").Link;

import Nav from './global/Nav';
import Footer from './global/Footer';


// Creating the Main component
class Main extends React.Component {
    constructor() {
            super();
          }
    render() {
        return (
            <div>
                <Nav />
              <div>
                <h1>Hello</h1>
                <a href="/auth/google">Sign In with Google</a>
              </div>
               <Footer/>
            </div>
        );
    }
};

// Export the component back for use in other files
module.exports = Main;