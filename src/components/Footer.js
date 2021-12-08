import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Footer.css'

export default function Footer() {

    const {currentImage} = useContext(Context)
    return (
            <div className="footer" style={{display: currentImage !== undefined ? 'none' : ''}}>
                 <a href="https://scottjellen.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://s3.us-east-2.amazonaws.com/scottjellen.me.projectlist/sJellenLogo.jpg"
          alt="logo"
          className="logo"
          />
         </a>
            </div>
    )
}

