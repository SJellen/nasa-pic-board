import React, {useState, useEffect} from 'react'





const APIlink4 = `https://images-api.nasa.gov/search?q=challenger`



function MediaBoard() {

    const [mediaArr, setMediaArr] = useState([])

    useEffect(() => {
        fetch(APIlink4)
        .then(res => res.json())
        .then(
            (result) => {
                
                
                setMediaArr()
                
                   
            }  
        )
        .catch(error => console.log(error))
    }, [])


   
    
    

    return (

        
        <div className="media-board">
            
          
        </div>
    )
}




export default MediaBoard