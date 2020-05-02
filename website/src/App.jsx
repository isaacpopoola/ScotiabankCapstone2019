import React from 'react'
import { Router } from "react-router";
import Routes from './pages/Routes.jsx';
import { createBrowserHistory } from "history";
import './App.css';

const history = createBrowserHistory()

//responsible for page routing
export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}