import React from 'react'
import ImageSlider from './ImageSlider'
import './slider.css'
import img1 from "./../../assets/radialbarquatrovingt.svg"
import img2 from "./../../assets/radialbarquatro.svg"
import img3 from "./../../assets/radialbarsept.svg"

const Slider = () => {
    const slides =[
        {url: "http://localhost:3000/static/media/radialbarquatro.0fb93d427223acc71e2c86cedd8fe2a8.svg", title: 'Frontend Development'},
        {url: "http://localhost:3000/static/media/radialbarsept.a4e61ab30fa3dccc12952265f48f19f2.svg", title: 'image2'},
        {url: "http://localhost:3000/static/media/radialbarquatrovingt.877b63f38bb525e26420137781d95170.svg", title: 'image3'},
    ];

  return (
    <div className="slider__menu">
        <ImageSlider slides={slides} />
    </div>
  )
}

export default Slider