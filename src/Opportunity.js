import React, {useState, useEffect} from 'react'

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

  



    function handleChange(event) {
        setNewDate(
           event.target.value
        )
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        newRequest(newDate)
        
    }
    
    function handleImageSubmit(event) {
        event.preventDefault()
    }

    function handleImageChange(event) {
        setAmountShown(event.target.value)
    }


    let slice = Object.entries(roverPhotos.data).slice(0,amountShown).map(entry => entry[1])
    
    const photoMap = slice.map((i) => (
       
        <img src={i.img_src} alt="mars rover" key={i.id}/>
    ))



    return (
        <div className="rover-container">
                <h1 className="section-title">Mars Rover: Opportunity</h1>
                <form className="search-box-rover"  onSubmit={handleSubmit}>
            <input type="date" min="2004-01-26" max="2010-01-01" id="date" className="rover-date" onChange={handleChange} />
            <button className="material-icons search">search</button>
        </form>

        <form className="select-box-rover" onSubmit={handleImageSubmit} >
        <label>Number of Images</label>
        <select value={amountShown} onChange={handleImageChange}>
            <option value="10">10</option>
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

        </div>
    )
}











export default Opportunity
