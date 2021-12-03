import React, {useContext} from 'react';
import useToggler from '../useToggler'
import '../style/App.css';
import {Context} from '../Context'

export default function Header() {

    const [show, toggle] = useToggler(true)

    const {currentImage, handleImageClick} = useContext(Context)

    return (
        <div>
            {   currentImage === undefined ? 
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
                                    <a href="#curiosity">Curiosity</a>
                                    <a href="#opportunity">Opportunity</a>
                                    <a href="#spirit" className="lastAnchor">Spirit</a> 
                                </nav>
                        </div> :
                        <div className="closeHeader">
                            <svg className="closeIconHeader" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={(e) => handleImageClick(e)}
                            ><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                        </div>
            }
        </div>
        
        
    )
}

