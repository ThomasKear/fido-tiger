const React = require("react");
var Link = require("react-router").Link;

import Greeting from './Greeting';

class Nav extends React.Component {
    constructor(props) {
            super(props);
          }
    render() {
        return (
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">Fido and Tiger</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <ul className="nav navbar-nav navbar-right">
                      <li><Greeting logIn={this.props.logIn}/></li>
{/*                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li role="separator" className="divider"></li>
                          <li><a href="#">Separated link</a></li>
                        </ul>
                      </li>*/}
                    </ul>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        );
    }

};

export default Nav;