import React, {useContext} from 'react'
import {Context} from '../Context'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useSpiritLogic from '../logic/useSpiritLogic'
import '../style/Rover.css'

export default function Spirit() {

    const {handleImageSubmit, HandelDatePicker, handleImageChange, maxDate, minDate, dateConversion, visibleDate, amountShown, photoMap} = useSpiritLogic()
    const {currentImage} = useContext(Context)

    return (
        <div className="rover-container" id="spirit" style={{paddingTop: currentImage === undefined ? '' : "0"}}>
                <h1 className="section-title" style={{display: currentImage !== undefined ? 'none' : ''}}>Mars Rover: Spirit</h1>
                <div className="mission-box" style={{display: currentImage !== undefined ? 'none' : ''}}>
                    <h3>Start of Mission</h3>
                            <p>Launch date: <span className="launch">July 10th 2003</span><br></br>Landing Date: <span className="launch">January 04th 2004</span></p>
                <h3>End of Mission:</h3>
                            <p>Last Contact: <span className="missing">March 22nd, 2011</span><br></br> Declared: <span className="death">May 25th, 2011</span></p>
                </div>
                <div className="select-box" style={{display: currentImage !== undefined ? 'none' : ''}}>
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
                    <form className="select-box-rover" onSubmit={handleImageSubmit} style={{display: currentImage !== undefined ? 'none' : ''}}>
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
        <a href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-spirit-mer-spirit/" target="_blank" rel="noopener noreferrer" className="material-icons exit-to-rover" style={{display: currentImage !== undefined ? 'none' : ''}}>exit_to_app_rounded_icon</a>
        </div>
    )
}

