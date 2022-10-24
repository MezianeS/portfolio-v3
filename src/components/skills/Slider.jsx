import React from 'react'
import ImageSlider from './ImageSlider'
import img1 from "./../../assets/radialbarquatrovingt.svg"
import img2 from "./../../assets/radialbarquatro.svg"
import img3 from "./../../assets/radialbarsept.svg"

const Slider = () => {
    const slides =[
        {img: {img1}, title: 'image1'},
        {img: {img2}, title: 'image2'},
        {img: {img3}, title: 'image3'},
    ]
  return (
    <div>
        <ImageSlider slides={slides}/>
    </div>
  )
}

export default Slider