import {useState} from 'react'

export default function useToggler(defaultOnValue = false) {
    const [isToggledOn, setIsToggledOn] = useState(defaultOnValue)
    function toggle() {
        setIsToggledOn(prev => !prev)
    }
    return [isToggledOn, toggle]
}

