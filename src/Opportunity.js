import React, {useState, useEffect} from 'react'

const apiKEY = process.env.REACT_APP_NASA_API_KEY
const APIlink3 = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=2009-07-01&api_key=${apiKEY}`

function Opportunity() {

    const [roverPhotos, setRoverPhotos] = useState({
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: '',
        img6: '',
        img7: '',
        img8: '',
        img9: '',
        img10: '',
        img11: '',
        img12: '',
        img13: '',
        img14: '',
        img15: '',
        img16: '',
        img17: '',
        img18: '',
        img19: '',
        img20: '',
        img21: '',
        img22: '',
        img23: '',
        img24: '',
        img25: ''
    })

    
    const [newDate, setNewDate] = useState("2010-01-01")


    useEffect(() => {
        fetch(APIlink3)
        .then(res => res.json())
        .then(
            (result) => {
                
               
                setRoverPhotos({
                    img1: result.photos[0].img_src,
                    img2: result.photos[1].img_src,
                    img3: result.photos[2].img_src,
                    img4: result.photos[3].img_src,
                    img5: result.photos[4].img_src,
                    img6: result.photos[5].img_src,
                    img7: result.photos[6].img_src,
                    img8: result.photos[7].img_src,
                    img9: result.photos[8].img_src,
                    img10: result.photos[9].img_src,
                    img11: result.photos[10].img_src,
                    img12: result.photos[11].img_src,
                    img13: result.photos[12].img_src,
                    img14: result.photos[13].img_src,
                    img15: result.photos[14].img_src,
                    img16: result.photos[15].img_src,
                    img17: result.photos[16].img_src,
                    img18: result.photos[17].img_src,
                    img19: result.photos[18].img_src,
                    img20: result.photos[19].img_src,
                    img21: result.photos[20].img_src,
                    img22: result.photos[21].img_src,
                    img23: result.photos[22].img_src,
                    img24: result.photos[23].img_src,
                    img25: result.photos[24].img_src
                })
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
                setRoverPhotos({
                    img1: result.photos[0].img_src,
                    img2: result.photos[1].img_src,
                    img3: result.photos[2].img_src,
                    img4: result.photos[3].img_src,
                    img5: result.photos[4].img_src,
                    img6: result.photos[5].img_src,
                    img7: result.photos[6].img_src,
                    img8: result.photos[7].img_src,
                    img9: result.photos[8].img_src,
                    img10: result.photos[9].img_src,
                    img11: result.photos[10].img_src,
                    img12: result.photos[11].img_src,
                    img13: result.photos[12].img_src,
                    img14: result.photos[13].img_src,
                    img15: result.photos[14].img_src,
                    img16: result.photos[15].img_src,
                    img17: result.photos[16].img_src,
                    img18: result.photos[17].img_src,
                    img19: result.photos[18].img_src,
                    img20: result.photos[19].img_src,
                    img21: result.photos[20].img_src,
                    img22: result.photos[21].img_src,
                    img23: result.photos[22].img_src,
                    img24: result.photos[23].img_src,
                    img25: result.photos[24].img_src

                })

            }
        )
        .catch(error => console.log(error))
    }

  










    function handleChange(event) {
        setNewDate(
           event.target.value
        )
        console.log(newDate)
    }

    function handleSubmit(event) {
        event.preventDefault()
        newRequest(newDate)
        
    }



    return (
        <div className="rover-container">
                <h1 className="section-title">Mars Rover: Opportunity</h1>



                <form className="search-box-rover"  onSubmit={handleSubmit}>
            <input type="date" min="2004-01-26" max="2010-01-01" id="date" className="rover-date" onChange={handleChange} />
            <button className="material-icons search">search</button>
        </form>

        <div className="rover-photo-box">


            
            <img src={roverPhotos.img1}  alt="mars rover"/>
            <img src={roverPhotos.img2 } alt="mars rover"/>
            <img src={roverPhotos.img3} alt="mars rover"/>
            <img src={roverPhotos.img4} alt="mars rover"/>
            <img src={roverPhotos.img5} alt="mars rover"/>
            <img src={roverPhotos.img6} alt="mars rover"/>
            <img src={roverPhotos.img7} alt="mars rover"/>
            <img src={roverPhotos.img8} alt="mars rover"/>
            <img src={roverPhotos.img9} alt="mars rover"/>
            <img src={roverPhotos.img10} alt="mars rover"/>
            <img src={roverPhotos.img11} alt="mars rover"/>
            <img src={roverPhotos.img12} alt="mars rover"/>
            <img src={roverPhotos.img13} alt="mars rover"/>
            <img src={roverPhotos.img14} alt="mars rover"/>
            <img src={roverPhotos.img15} alt="mars rover"/>
            <img src={roverPhotos.img16} alt="mars rover"/>
            <img src={roverPhotos.img17} alt="mars rover"/>
            <img src={roverPhotos.img18} alt="mars rover"/>
            <img src={roverPhotos.img19} alt="mars rover"/>
            <img src={roverPhotos.img20} alt="mars rover"/>
            <img src={roverPhotos.img21} alt="mars rover"/>
            <img src={roverPhotos.img22} alt="mars rover"/>
            <img src={roverPhotos.img23} alt="mars rover"/>
            <img src={roverPhotos.img24} alt="mars rover"/>
            <img src={roverPhotos.img25} alt="mars rover"/>
            

        </div>

        </div>
    )
}











export default Opportunity
