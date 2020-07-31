import React, {useState, useEffect} from 'react'

const apiKEY = process.env.REACT_APP_NASA_API_KEY
const APIlink1 = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}`

function PhotoDay() {
    
    const [photoDay, setPhotoDay] = useState({
        link: '',
        title: '',
        explanation: ''
    })



    


    useEffect(() => {
        fetch(APIlink1)
        .then(res => res.json())
        .then(
            (result) => {
                
                setPhotoDay({
                    link: result.url,
                    title: result.title,
                    explanation: result.explanation
                })
            }
        )
        .catch(error => console.log(error))
    }, [])


    return (
        <div>
        <img src={photoDay.link} alt="nasa pic of the day" />
           <h4>{photoDay.title}</h4>
           <p>{photoDay.explanation}</p>
        </div>
    )

}




export default PhotoDay