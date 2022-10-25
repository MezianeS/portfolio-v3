import { useState } from "react"


const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentUser] = useState(0);

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${slides[currentIndex].url})`,  
              
    };
    const leftArrowStyle = {
        position: 'absolute',
        top: '50%',
    };
    const rightArrowStyle = {
        position: 'absolute',
        top: '50%',
    }
    return (
        <div className="slider__menu--sliderstyle">
            <div style={leftArrowStyle} >(</div>
            <div style={rightArrowStyle}>)</div>
            <div style={slideStyles} className="slider__menu--slide">
            </div>
            
        </div>
    )
};

export default ImageSlider