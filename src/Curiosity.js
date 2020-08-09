import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const apiKEY = process.env.REACT_APP_NASA_API_KEY
const APIlink2 = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-01-01&api_key=${apiKEY}`

function Curiosity() {

    const [roverPhotos, setRoverPhotos] = useState({data: []})
    const [amountShown, setAmountShown] = useState(12)
    const [visibleDate, setVisibleDate] = useState(new Date("2004-03-01"))
    const [today, setToday] = useState()
    const [newDate, setNewDate] = useState("2020-01-01")


    useEffect(() => {
        fetch(APIlink2)
        .then(res => res.json())
        .then(
            (result) => {
                let now = new Date().toISOString().slice(0, 10)
                setToday(now)
                setRoverPhotos({data: result.photos})
            }
        )
        .catch(error => console.log(error))
    }, [])



    function newRequest(newDate){
        const newDateLink = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${newDate}&api_key=${apiKEY}`
        fetch(newDateLink)
        .then(res => res.json())
        .then(
            (result) => {
                setRoverPhotos({data: result.photos})

            }
        )
        
    }

  
       
    function handleImageSubmit(event) {
        event.preventDefault()
    }

    function handleImageChange(event) {
        setAmountShown(event.target.value)
    }



    function HandelDatePicker(date) {
        setVisibleDate(date)
        setNewDate(
            date.toISOString().slice(0, 10)
         )
         console.info(newDate)
         newRequest(date.toISOString().slice(0, 10))
    }

    
     let min = new Date('2012-08-05')
     const minDate = min.setDate(min.getDate() + 2)
     let max = new Date(today)
     const maxDate = max.setDate(max.getDate() + 1)


    let slice = Object.entries(roverPhotos.data).slice(0,amountShown).map(entry => entry[1])
    
    const photoMap = slice.map((i) => (
       
        <img src={i.img_src} alt="mars rover" key={i.id}/>
    ))


    function dateConversion() {
        let convertDate = new Date(visibleDate)
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return convertDate.toLocaleString('en-US', options)
    }



    return (
        <div className="rover-container" id="curiosity">
                <h1 className="section-title">Mars Rover: Curiosity</h1>
                <div className="mission-box">
                    <h3>Start of Mission</h3>
                            <p>Launch date: <span className="launch">November 26th, 2011</span><br></br>Landing Date: <span className="launch">August 6th, 2012</span></p>
                
                </div>
               
            <div className="select-box">
                <div className="search-box-rover">
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
        
            <span className="current-selected-date">{dateConversion(visibleDate)}</span>

        <form className="select-box-rover" onSubmit={handleImageSubmit}>
        <label className="image-label">Number of Images</label>
        <select value={amountShown} onChange={handleImageChange}>
            
            <option value="12">12</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="500">All</option>
        </select>
        </form>
            </div>
            
        <div className="rover-photo-box">
            {photoMap}
        </div>
        <a href="https://www.jpl.nasa.gov/missions/mars-science-laboratory-curiosity-rover-msl/" target="_blank" rel="noopener noreferrer" className="material-icons exit-to-rover">exit_to_app_rounded_icon</a>
        </div>
    )
}











export default Curiosity
