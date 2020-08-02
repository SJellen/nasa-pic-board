import React from 'react';
import PhotoDay from './PhotoDay'
import './App.css';
import MediaBoard from './MediaBoard';
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
        <MediaBoard />
    </div>
  );
}

export default App;
