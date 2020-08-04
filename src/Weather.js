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
    const [solIndex, setSolIndex] = useState(5)
    const [weather, setWeather] = useState({
        sol: 0,
        maxTemp: 0,
        minTemp: 0,
        windSpeed: 0,
        windDirectionDegrees: 0,
        date: 0
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
    }, [])

        
    
    



   

    // const weatherMap = weather.map((i) => ( <span className="sol-day">{i.AT.mx}</span>))
    
    return (
        <div>
            <h1 className="section-title">Weather On Mars</h1>
            <div className="insight-container">
            <img src="../insight.jpg" alt="insight" className="insight-image"/>

            <div className="weather-box">
                <h2>Sol {weather.sol}</h2>
                <h2>{parseDate(weather.date)}</h2>

                <h3>Temperature</h3>
                <p>Hi:<br></br>
                {Math.round(weather.maxTemp)} &#8451;  {Math.round(weather.maxTemp * 9 / 5 + 32)}&#8457;</p>
                <p>Low:<br></br>
                {Math.round(weather.minTemp)} &#8451;  {Math.round(weather.minTemp * 9 / 5 + 32)}&#8457;</p>

                <h3>Wind</h3>
                <p>{weather.windDirectionDegrees} &#xb0;</p>
                <p>{weather.windSpeed.toFixed(2)} KPH</p>
                
            </div>
            

            </div>
        </div>
    )
}


export default Weather