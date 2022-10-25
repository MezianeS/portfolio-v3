import { useState } from "react"
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'



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
        top: '40%',
        fontSize: "38px",
    };
    const rightArrowStyle = {
        position: 'absolute',
        top: '40%',
        right: '0%',
        fontSize: "38px",
    }
    return (
        <div className="slider__menu--sliderstyle">
            <div style={leftArrowStyle}><AiFillLeftCircle /></div>
            <div style={rightArrowStyle}><AiFillRightCircle /></div>
            <div style={slideStyles} className="slider__menu--slide">
            </div>
        </div>
    )
};

export default ImageSlider