import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MainNavbar,
  MainJumbotron,
  About,
  Recruiting,
  Team,
} from './components/componentIndex.jsx'
import axios from 'axios';

function App() {

  const state = {
      rec_team: [],

  }

  const fetch_recruiters = async (event) => {
  	//event.preventDefault();
  
    const resp = await axios.get(`http://192.168.56.101:1337/recruiters`);
    console.log(resp.data);
  }
  

  const fetch_blogposts = async () => {
    const response = await fetch('http://192.168.56.101:1337/blogpost');
    const data = await response.json();
    return data;
  }

  return (
    <div className="App">
      <MainNavbar />
      <MainJumbotron />
      <About />
      <Team teamData={fetch_recruiters()}/>
      <Recruiting />
    </div>
  );
}

export default App;
