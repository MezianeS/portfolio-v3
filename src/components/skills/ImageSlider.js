import { useState } from "react"
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'



const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${slides[currentIndex].url})`,
        content: `url(${slides[currentIndex].title})`,    
              
    };
    const leftArrowStyle = {
        position: 'absolute',
        top: '40%',
        fontSize: "38px",
        cursor: 'pointer',
    };
    const rightArrowStyle = {
        position: 'absolute',
        top: '40%',
        right: '0%',
        fontSize: "38px",
        cursor: 'pointer',
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    return (
        <div className="slider__menu--sliderstyle">
            <div style={leftArrowStyle} onClick={goToPrevious}><AiFillLeftCircle /></div>
            <div style={rightArrowStyle} onClick={goToNext}><AiFillRightCircle /></div>
            <div style={slideStyles} className="slider__menu--slide"></div>
            <div>{slideStyles.content}</div>
        </div>
    )
};

export default ImageSlider