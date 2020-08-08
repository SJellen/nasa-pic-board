import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const apiKEY = process.env.REACT_APP_NASA_API_KEY
const APIlink3 = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=2009-07-01&api_key=${apiKEY}`

function Opportunity() {

    const [roverPhotos, setRoverPhotos] = useState({data: []})
    const [amountShown, setAmountShown] = useState(12)
    
    const [newDate, setNewDate] = useState("2010-01-01")


    useEffect(() => {
        fetch(APIlink3)
        .then(res => res.json())
        .then(
            (result) => {
                setRoverPhotos({data: result.photos})

            }
        )
        .catch(error => console.log(error))
    }, [])



    function newRequest(newDate){
        const newDateLink = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${newDate}&api_key=${apiKEY}`
        fetch(newDateLink)
        .then(res => res.json())
        .then(
            (result) => {
                setRoverPhotos({data: result.photos})
            }
        )
        .catch(error => console.log(error))
    }

  



    
    function handleImageSubmit(event) {
        event.preventDefault()
    }

    function handleImageChange(event) {
        setAmountShown(event.target.value)
    }





    function HandelDatePicker(date) {
        setNewDate(
            date.toISOString().slice(0, 10)
         )
         console.info(newDate)
         newRequest(date.toISOString().slice(0, 10))
    }

    
     let min = new Date("2004-01-24")
     const minDate = min.setDate(min.getDate() + 2)
     let max = new Date("2018-06-05")
     const maxDate = max.setDate(max.getDate() + 1)







    let slice = Object.entries(roverPhotos.data).slice(0,amountShown).map(entry => entry[1])
    
    const photoMap = slice.map((i) => (
       
        <img src={i.img_src} alt="mars rover" key={i.id}/>
    ))



    return (
        <div className="rover-container" id="opportunity">
                <h1 className="section-title">Mars Rover: Opportunity</h1>
                <div className="mission-box">
                    <h3>Start of Mission</h3>
                            <p>Launch date: July 7th 2003<br></br>Landing Date: January 25th 2004</p>
                <h3>End of Mission:</h3>
                            <p>Last Contact: June 10th, 2018<br></br> Declared: February 13th, 2019</p>
                </div>
                
               
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
        



        <form className="select-box-rover" onSubmit={handleImageSubmit} >
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

        <div className="rover-photo-box">
            {photoMap}
        </div>
        <a href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-opportunity-mer/" target="_blank" rel="noopener noreferrer" className="material-icons exit-to-rover">exit_to_app_rounded_icon</a>
        </div>
    )
}











export default Opportunity
