import {useState, useEffect} from 'react'



const apiKEY = process.env.REACT_APP_NASA_API_KEY
// const APIlink1 = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}`

export default function usePhotoDayLogic() {

    const [photoDay, setPhotoDay] = useState({
        link: '',
        title: '',
        explanation: '',
        media_type: ''
    })

    const [today, setToday] = useState()
    // eslint-disable-next-line 
    const [newDate, setNewDate] = useState(new Date().toISOString().slice(0, 10))
    const [visibleDate, setVisibleDate] = useState(null)
    
    useEffect(() => {
        let d = new Date()
        const now = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
        setToday(now)
        
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKEY}`)
        .then(res => res.json())
        .then(
            (result) => {
                

                // let now = new Date().toISOString().slice(0, 10)
                
                
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
        setVisibleDate(date)
        setNewDate(
            date.toISOString().slice(0, 10)
         )
        //  console.info(newDate)
         newRequest(date.toISOString().slice(0, 10))
    }

    
     let min = new Date('1995-06-15')
     const minDate = min.setDate(min.getDate() + 2)
     let max = new Date(today)
     const maxDate = max.setDate(max.getDate() + 1)

     function dateConversion() {
         if (visibleDate !== null) {
        let convertDate = new Date(visibleDate)
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return convertDate.toLocaleString('en-US', options)
         } else {
             return ''
         }

        
    }

   






    return {HandelDatePicker, maxDate, minDate, dateConversion, visibleDate, photoDay}
}