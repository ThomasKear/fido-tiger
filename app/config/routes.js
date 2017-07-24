// Inclue the React library
import React from 'react';

// Include the react-router module
import router from 'react-router';

// Include the Route component for displaying individual routes
// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
let hashHistory = Router.hashHistory;

// Include the IndexRoute (catch-all route)
let IndexRoute = Router.IndexRoute;

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';


import reducers from '../reducers';

// Reference the high-level components
import Main from "../components/Main";
import Nav from "../components/global/Nav";
import Footer from "../components/global/Footer";
import Greeting from "../components/global/Greeting";
import Login from "../components/user/Login";
import Dashboard from "../components/user/Dashboard";
{/*import ContactUs from "../components/user/forms/ContactUs";*/}



module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}> 
      <Route path="Login" component={Login}>
        <Route path="Dashboard" component={Dashboard}/>
      </Route>
      
      <IndexRoute component={Main} />
    </Route>

  </Router>
);
