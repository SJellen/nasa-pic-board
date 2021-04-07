import React, {useState, useEffect, useContext} from 'react'
import {Context} from '../Context'

const apiKEY = process.env.REACT_APP_NASA_API_KEY
const APIlink3 = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=2009-07-01&api_key=${apiKEY}`

export default function  useOpportunityLogic() {

    const {handleImageClick} = useContext(Context)

    const [roverPhotos, setRoverPhotos] = useState({data: []})
    const [amountShown, setAmountShown] = useState(12)
    const [visibleDate, setVisibleDate] = useState(new Date("2010-01-01"))
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
        setVisibleDate(date)
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
       
        <img src={i.img_src} alt="mars rover" key={i.id} onClick={(e) => handleImageClick(e)}/>
    ))

    function dateConversion() {
        let convertDate = new Date(visibleDate)
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return convertDate.toLocaleString('en-US', options)
    }



    return {HandelDatePicker, maxDate, minDate, dateConversion, visibleDate, handleImageChange, handleImageSubmit, amountShown, photoMap}
    
}