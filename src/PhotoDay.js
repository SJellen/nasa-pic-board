import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const apiKEY = process.env.REACT_APP_NASA_API_KEY
const APIlink1 = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}`



function PhotoDay() {
    
    const [photoDay, setPhotoDay] = useState({
        link: '',
        title: '',
        explanation: '',
        media_type: ''
    })

    const [today, setToday] = useState()
    const [newDate, setNewDate] = useState(new Date().toISOString().slice(0, 10))

    
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
                    explanation: result.explanation,
                    media_type: result.media_type
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
                    explanation: result.explanation,
                    media_type: result.media_type
                })
            }
        )  
    }



    function HandelDatePicker(date) {
        setNewDate(
            date.toISOString().slice(0, 10)
         )
         console.info(newDate)
         newRequest(date.toISOString().slice(0, 10))
    }

    
     let min = new Date('1995-06-15')
     const minDate = min.setDate(min.getDate() + 2)
     let max = new Date(today)
     const maxDate = max.setDate(max.getDate() + 1)

      
   


    return (
            <div className="photo-day-container">
             <h1 className="section-title">Astronomy Picture of the Day</h1>
                 <div >
                 <div className="search-apod" >
                    <DatePicker
                                dateFormat="yyyy/MM/DD" 
                                name="newDate"
                                onChange={HandelDatePicker}
                                maxDate={maxDate}
                                minDate={minDate}
                                placeholderText="Select a day &nbsp;  &nbsp;  &nbsp; &#128269;"
                                showYearDropdown
                                yearDropdownItemNumber={40}
                                scrollableYearDropdown
                                className="date-picker"   
                            /> 

                 </div>
       

       
            </div>
        <div className="photo-of-the-day">

        {photoDay.media_type === "image" ? <img src={photoDay.link} alt="nasa pic of the day" className="apod-image"/> : <iframe  width= "50%" height="auto" src={photoDay.link} frameBorder="0" allowFullScreen title="Astronomy photo of the day"></iframe>}
        
        
           
           <div className="apod-word-box">
              <h4 className="apod-title">{photoDay.title}</h4>
               <p className="apod-explanation">{photoDay.explanation}</p> 
           </div>
           

        </div>
            </div>
           
      
    )

}




export default PhotoDay