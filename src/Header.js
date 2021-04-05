import React from 'react';
import useToggler from './useToggler'
import './App.css';

export default function Header() {

    const [show, toggle] = useToggler(true)

    return (
        <div className="header">
    <h1 className="title">Nasa Navigator</h1>
      <i className="material-icons menu-icon" 
             onClick={toggle}
             style={{ display: show ? "block" : "none"}}
             
             >menu_icon</i>
       
        <nav style={{display: show ? "none" : "block"}}>
          
          <i className="material-icons close-icon"
              onClick={toggle}
              style={{display: show ? "none" : "block"}}
              >close_icon</i>
            <a href="#home" className="firstAnchor">Photo of the Day</a>
            {/* <a href="#weather">Mars Weather</a> */}
            <a href="#curiosity">Curiosity Rover</a>
            <a href="#opportunity">Opportunity Rover</a>
            <a href="#spirit" className="lastAnchor">Spirit Rover</a> 
        </nav>
    </div>
    )
}

