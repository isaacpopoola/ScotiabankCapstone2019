// import React from 'react';
// import './App.css';
// //import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   MainNavbar,
//   MainJumbotron,
//   About,
//   Recruiting,
//   Team,
//   Blogs
// } from './components/componentIndex.jsx'
// import axios from 'axios';

import React from 'react'
import { Router } from "react-router";
import Routes from './pages/Routes.jsx';
import { createBrowserHistory } from "history";
import './App.css';

const history = createBrowserHistory()

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}