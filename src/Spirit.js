import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const apiKEY = process.env.REACT_APP_NASA_API_KEY
const APIlink4 = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=2004-03-01&api_key=${apiKEY}`

export default function Spirit() {

    const [roverPhotos, setRoverPhotos] = useState({data: []})
    const [amountShown, setAmountShown] = useState(12)
    const [visibleDate, setVisibleDate] = useState(new Date("2004-03-01"))
    const [newDate, setNewDate] = useState("2004-03-01")

  
    useEffect(() => {
        fetch(APIlink4)
        .then(res => res.json())
        .then(
            (result) => {
                setRoverPhotos({data: result.photos})
            }
        )
        .catch(error => console.log(error))
    }, [])



    function newRequest(newDate){
        const newDateLink = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${newDate}&api_key=${apiKEY}`
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
        setVisibleDate(date)
        setNewDate(
            date.toISOString().slice(0, 10)
         )
         console.info(newDate)
         newRequest(date.toISOString().slice(0, 10))
    }
    

    
     let min = new Date("2004-01-04")
     const minDate = min.setDate(min.getDate() + 2)
     let max = new Date("2010-02-01")
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
        <div className="rover-container" id="spirit">
                <h1 className="section-title">Mars Rover: Spirit</h1>
                <div className="mission-box">
                    <h3>Start of Mission</h3>
                            <p>Launch date: <span className="launch">July 10th 2003</span><br></br>Landing Date: <span className="launch">January 04th 2004</span></p>
                <h3>End of Mission:</h3>
                            <p>Last Contact: <span className="missing">March 22nd, 2011</span><br></br> Declared: <span className="death">May 25th, 2011</span></p>
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
        <a href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-spirit-mer-spirit/" target="_blank" rel="noopener noreferrer" className="material-icons exit-to-rover">exit_to_app_rounded_icon</a>
        </div>
    )
}

