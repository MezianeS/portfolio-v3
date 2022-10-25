import React from 'react'
import ImageSlider from './ImageSlider'
import './slider.css'
import img1 from "./../../assets/radialbarquatrovingt.svg"
import img2 from "./../../assets/radialbarquatro.svg"
import img3 from "./../../assets/radialbarsept.svg"

const Slider = () => {
    const slides =[
        {url: "http://localhost:3001/static/media/radialbarquatrovingt.877b63f38bb525e26420137781d95170.svg", title: 'image1'},
        {url: {img2}, title: 'image2'},
        {url: {img3}, title: 'image3'},
    ];

  return (
    <div className="slider__menu">
        <ImageSlider slides={slides} />
    </div>
  )
}

export default Slider