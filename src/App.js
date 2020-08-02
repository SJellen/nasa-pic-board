import React from 'react';
import PhotoDay from './PhotoDay'
import './App.css';
import PhotoBoard from './PhotoBoard';






function App() {
  return (
    <div className="App">
      <h1 className="title">Nasa Navigator</h1>
        <PhotoDay />
        <PhotoBoard />
    </div>
  );
}

export default App;
