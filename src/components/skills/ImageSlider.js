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
        content: `${slides[currentIndex].title}`,    
              
    };
    const leftArrowStyle = {
    };
    const rightArrowStyle = {
        cursor: 'pointer',
        color: 'rgba(82, 81, 87, 0.725)',
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
            <div style={leftArrowStyle} onClick={goToPrevious}><AiFillLeftCircle className="slide__menu--left"/></div>
            <div style={rightArrowStyle} onClick={goToNext}><AiFillRightCircle className="slide__menu--right" /></div>
            <div style={slideStyles} className="slider__menu--slide"></div>
            <div className="slider__menu--text">{slideStyles.content}</div>
        </div>
    )
};

export default ImageSlider