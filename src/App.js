import React from 'react';
import PhotoDay from './PhotoDay'
import './App.css';
import Rover from './Curiosity'
import Opportunity from './Opportunity'
import Spirit from './Spirit';
// import Weather from './Weather'
import Footer from './Footer'
import Header from './Header'



export default function App() {
  return (
    <div className="App" id="home">
        <Header />
        <PhotoDay />
        {/* <Weather /> */}
        <Rover />
        <Opportunity />
        <Spirit />
        <Footer />
    </div>
  )
}


