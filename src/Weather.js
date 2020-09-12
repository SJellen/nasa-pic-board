import React, {useState, useEffect} from 'react'

const apiKEY = process.env.REACT_APP_NASA_API_KEY
const APIlink5 = `https://api.nasa.gov/insight_weather/?api_key=${apiKEY}&feedtype=json&ver=1.0`


const parseDate = (date) => {
    return new Date(date).toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long'
    })
}

function Weather() {
    const [solIndex, setSolIndex] = useState(0)
    const [weather, setWeather] = useState({
        sol: 0,
        maxTemp: 0,
        minTemp: 0,
        windSpeed: 0,
        windDirectionDegrees: 0,
        date: "0"
    })
   

    useEffect(() => {
        fetch(APIlink5)
        .then(res => res.json())
        .then(
            (data) => {
                
               const { sol_keys, validity_checks, ...solData } = data
               
               let solDays = Object.entries(solData).map(([sol, data]) => {
                   if (data.HWS === undefined) {
                       return 'Error'

                       
                   } else {
                       return {
                           sol: sol,
                           maxTemp: data.AT.mx,
                           minTemp: data.AT.mn,
                           windSpeed: data.HWS.av,
                           windDirectionDegrees: data.WD.most_common.compass_degrees,
                           date: data.First_UTC
                       }
                   }
               })
               let selectedDay = solDays[solIndex]
              
               setWeather({
                sol: selectedDay.sol,
                maxTemp: selectedDay.maxTemp,
                minTemp: selectedDay.minTemp,
                windSpeed: selectedDay.windSpeed,
                windDirectionDegrees: selectedDay.windDirectionDegrees,
                date: selectedDay.date
               })
            }
        )
        .catch(error => console.log(error))
    }, [solIndex])


  

        
    function handleDecrement() {
        
        if(solIndex >= 0) {
            setSolIndex(solIndex - 1) 
           
        }
        
    }

    function handleIncrement() {
        
        if(solIndex <= 6) {
            setSolIndex(solIndex + 1) 

        }
        
    }
    
    


   

   
    
    return (
        
        <div id="weather">
            <h1 className="section-title" >Latest Weather at Elysium Planitia</h1>
            
            <div className="insight-container">
            <img src="../insight.jpg" alt="insight" className="insight-image"/>
            <div className="weather-word-container">
                <h2 >Insight takes daily weather measurements on the surface of Mars at Elysium Planitia, a plain near the equator of Mars.</h2>
            </div>
            <div className="weather-box">
           
            <div className="sol-box">
                <span className="material-icons left" onClick={handleDecrement} style={{visibility: solIndex === 0 ? 'hidden' : 'visible'}}>keyboard_arrow_left</span>
                <h2>Sol {weather.sol}</h2>
                <span className="material-icons right"  onClick={handleIncrement}  style={{visibility: solIndex === 6 ? 'hidden' : 'visible'}}>keyboard_arrow_right</span>
                
            </div>
               
                <h2>{parseDate(weather.date)}</h2>
                <h3>Temperature</h3>
                <p>Hi:<br></br>
                {Math.round(weather.maxTemp)}&#8451;  {Math.round(weather.maxTemp * 9 / 5 + 32)}&#8457;</p>
                <p>Low:<br></br>
                {Math.round(weather.minTemp)}&#8451;  {Math.round(weather.minTemp * 9 / 5 + 32)}&#8457;</p>

                <h3>Wind</h3>
                <p>{weather.windDirectionDegrees} &#xb0;</p>
                <p>{weather.windSpeed.toFixed(2)} KPH</p>
                
            </div>


            <a href="https://mars.nasa.gov/insight/" target="_blank" rel="noopener noreferrer" className="material-icons exit-to-insight">exit_to_app_rounded_icon</a>
            

            </div>
        </div>
    )
}


export default Weather