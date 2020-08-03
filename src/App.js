import React from 'react';
import PhotoDay from './PhotoDay'
import './App.css';
import Rover from './Curiosity'
import Opportunity from './Opportunity'
import Spirit from './Spirit';





function App() {
  return (
    <div className="App">
      <h1 className="title">Nasa Navigator</h1>
        <PhotoDay />
        <Rover />
        <Opportunity />
        <Spirit />


       
 
 
    </div>
  );
}

export default App;
