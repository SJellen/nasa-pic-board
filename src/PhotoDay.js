import React, {useState, useEffect} from 'react'

const apiKEY = process.env.REACT_APP_NASA_API_KEY
const APIlink1 = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}`



function PhotoDay() {
    
    const [photoDay, setPhotoDay] = useState({
        link: '',
        title: '',
        explanation: ''
    })

    const [today, setToday] = useState()
    const [newDate, setNewDate] = useState("2020-01-01")

    
    useEffect(() => {
        fetch(APIlink1)
        .then(res => res.json())
        .then(
            (result) => {
                let now = new Date().toISOString().slice(0, 10)
                setToday(now)
                setPhotoDay({
                    link: result.url,
                    title: result.title,
                    explanation: result.explanation
                })
            }
        )
        .catch(error => console.log(error))
    }, [])

    function newRequest(newDate){
        const newDateLink = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}&date=${newDate}`
        fetch(newDateLink)
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
        
    }


    function handleChange(event) {
        setNewDate(
           event.target.value
        )
        console.log(newDate)
    }

    function handleSubmit(event) {
        event.preventDefault()
        newRequest(newDate)
        console.log(newDate)
    }






    return (
            <div>
                 <div>
                <form className="search-box-apod" onSubmit={handleSubmit} >
            <input type="date" min="1995-06-15" max={today} id="date" className="apod-date" onChange={handleChange} />
            <button className="material-icons search">search</button>
        </form>
            </div>
        <div className="photo-of-the-day">
        
        <img src={photoDay.link} alt="nasa pic of the day" className="apod-image"/>
           
           <div className="apod-word-box">
              <h4 className="apod-title">{photoDay.title}</h4>
               <p className="apod-explanation">{photoDay.explanation}</p> 
           </div>
           

        </div>
            </div>
           
      
    )

}




export default PhotoDay