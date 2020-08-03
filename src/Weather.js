import React, {useState, useEffect} from 'react'

const apiKEY = process.env.REACT_APP_NASA_API_KEY
const APIlink5 = `https://api.nasa.gov/insight_weather/?api_key=${apiKEY}&feedtype=json&ver=1.0`

function Weather() {
    
    const [weather, setWeather] = useState({data: []})

    useEffect(() => {
        fetch(APIlink5)
        .then(res => res.json())
        .then(
            (result) => {
                setWeather({data: result})
            }
        )
        .catch(error => console.log(error))
    }, [])


    console.log(weather.data[592])
    
    return (
        <div>
            <h1 className="section-title">Weather On Mars</h1>
            <div className="insight-container">
            <img src="../insight.jpg" alt="insight" className="insight-image"/>


            </div>
        </div>
    )
}


export default Weather