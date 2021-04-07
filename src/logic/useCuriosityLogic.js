import React, {useState, useEffect, useContext} from 'react'
import {Context} from '../Context'

const apiKEY = process.env.REACT_APP_NASA_API_KEY
const APIlink2 = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-01-01&api_key=${apiKEY}`

export default function useCuriosityLogic() {

    const {currentImage, setCurrentImage, handleImageClick} = useContext(Context)

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
        <img src={i.img_src} alt="mars rover" key={i.id} onClick={(e) => handleImageClick(e)}/>
    ))


    function dateConversion() {
        let convertDate = new Date(visibleDate)
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return convertDate.toLocaleString('en-US', options)
    }





    return {HandelDatePicker, maxDate, minDate, dateConversion, visibleDate, handleImageSubmit, amountShown, handleImageChange, photoMap}
}