import React, {useState} from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {

    const [currentImage, setCurrentImage] = useState()

    function handleImageClick(e) {
        if (currentImage !== undefined) {
            setCurrentImage()
        }
        else if (e.target !== currentImage) {
            setCurrentImage(e.target)
            window.scrollTo(0, 0)
        } else {
            setCurrentImage()
        }
    }

    return (
        <Context.Provider value={{currentImage, setCurrentImage, handleImageClick}} >
            { children }
        </Context.Provider>
    )
}

export { ContextProvider, Context}