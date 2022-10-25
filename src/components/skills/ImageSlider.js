import { useState } from "react"


const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentUser] = useState(0);

    const slideStyles = {
        borderRadius: "10px",
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${slides[currentIndex].url})`,        
    }
    return (
        <div className="slider__menu--sliderstyle">
            <div style={slideStyles} className="slider__menu--slide">
            </div>
            
        </div>
    )
};

export default ImageSlider