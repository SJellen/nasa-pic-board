import React, {useState, useEffect} from 'react'
import { findAllByTitle } from '@testing-library/react'


const apiKEY = process.env.REACT_APP_NASA_API_KEY


const APIlink2 = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}&count=20`



function PhotoBoard() {

    const [photoArr, setPhotoBoard] = useState({
        
    })

    useEffect(() => {
        fetch(APIlink2)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                setPhotoBoard(
                  [ ...result]
                )
                     
            }  
        )
        .catch(error => console.log(error))
    }, [])


   

    

    return (

        
        <div>
           
        </div>
    )
}




export default PhotoBoard