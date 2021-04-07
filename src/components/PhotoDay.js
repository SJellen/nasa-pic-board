import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import usePhotoDayLogic from '../logic/usePhotoDayLogic'


export default function PhotoDay() {
   
    const {HandelDatePicker, maxDate, minDate, dateConversion, visibleDate, photoDay} = usePhotoDayLogic()

    return (
            <div className="photo-day-container">
             <h1 className="section-title">Astronomy Picture of the Day</h1>
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
                    <span className="current-selected-date">{dateConversion(visibleDate)}</span>
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

