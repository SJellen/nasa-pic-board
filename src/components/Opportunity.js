import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useOpportunityLogic from '../logic/useOpportunityLogic'


export default function Opportunity() {


    const {HandelDatePicker, maxDate, minDate, dateConversion, visibleDate, handleImageChange, handleImageSubmit, amountShown, photoMap} = useOpportunityLogic()

    
    return (
        <div className="rover-container" id="opportunity">
                <h1 className="section-title">Mars Rover: Opportunity</h1>
                <div className="mission-box">
                    <h3>Start of Mission</h3>
                            <p>Launch date: <span className="launch">July 7th 2003</span><br></br>Landing Date: <span className="launch">January 25th 2004</span></p>
                <h3>End of Mission:</h3>
                            <p>Last Contact: <span className="missing">June 10th, 2018</span><br></br> Declared: <span className="death">February 13th, 2019</span></p>
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
                </div>
        <div className="rover-photo-box">
            {photoMap}
        </div>
        <a href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-opportunity-mer/" target="_blank" rel="noopener noreferrer" className="material-icons exit-to-rover">exit_to_app_rounded_icon</a>
        </div>
    )
}



