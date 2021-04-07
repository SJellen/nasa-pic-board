import React from 'react';
import PhotoDay from './components/PhotoDay'
import '../src/style/App.css';
import Rover from './components/Curiosity'
import Opportunity from './components/Opportunity'
import Spirit from './components/Spirit';
// import Weather from './Weather'
import Footer from './components/Footer'
import Header from './components/Header'



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


