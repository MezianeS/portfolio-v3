import React from 'react'
import './skills.css'
import img1 from "./../../assets/radialbarquatrovingt.svg"
import img2 from "./../../assets/radialbarquatro.svg"
import img3 from "./../../assets/radialbarsept.svg"

const Skills = () => {
  return (
    <div className='container skills__container'>
      <div className="skills__menu">
        <h2>Skills</h2>
        <p>Keen in solving problems and building solutions</p>
        <p>I like to code things from scratch and enjoy bringing ideas to life in browser.</p>
        <div className="skills__menu--carousel">
          <div className='skills__menu--carousel-items1'>
            <img src={img2} alt="" className='skills__menu--img'/>
            <p>Frontend Development</p>
          </div>
          <div className='skills__menu--carousel-items2'>
            <img src={img3} alt="" className='skills__menu--img'/>
            <p>Backend Development</p>
          </div>
          <div className='skills__menu--carousel-items3'>
            <img src={img1} alt="" className='skills__menu--img'/>
            <p>UI Design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills