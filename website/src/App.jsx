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

/*
class App extends React.Component {

  
  constructor(props){
    super(props);
    
    this.state = {
      rec_team: [],
      blogs: [],
    }
  }

  componentDidMount() {
    this.fetch_recruiters();
    this.fetch_blogposts();

    
  }

  fetch_recruiters = async (event) => {
  	//event.preventDefault();
  
    axios.get("http://192.168.56.101:1337/recruiters").then((resp) => {
      this.setState({rec_team: resp.data});
    })
  }
  

 fetch_blogposts = async () => {
    axios.get("http://192.168.56.101:1337/blogposts").then((resp) => {
      this.setState({blogs: resp.data});
    })
  }

  render() {
    //console.log(this.state);
    return (
      <div className="App">
        <MainNavbar />
        <MainJumbotron />
        <About />
        <Team recruiters={this.state.rec_team}/>
        <Recruiting/>
        <Blogs blogs={this.state.blogs} />
      
      </div>
    );
  }
}

export default App;
*/

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}