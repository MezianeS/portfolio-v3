import { useState } from "react"


const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentUser] = useState(0)
    return (
        <div>
            <div style={{backgroundImage: `img(${slides[currentIndex].img})`}}>

            </div>
        </div>
    )
};

export default ImageSlider