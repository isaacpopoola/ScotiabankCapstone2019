import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MainNavbar,
  MainJumbotron
} from './components/componentIndex.jsx'

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <MainJumbotron />
    </div>
  );
}

export default App;
