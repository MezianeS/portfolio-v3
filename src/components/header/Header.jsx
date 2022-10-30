import React from 'react'
import './header.css'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

import HeaderPresentation from './HeaderPresentation'

const Header = () => {
  return (
    <header>
      <div className="header__moiastronaute">
        <img src={require("../../assets/sofiane.png")}/>
      </div>
      <div className="container header__title">
        <h1>Portfolio</h1>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <span className="menu-button"></span>
        </label>
        <ul className="header__menu">
          <li><a href="#Home">Home</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="https://github.com/MezianeS" className='header__icon'><BsGithub className='header__icon--params'/></a></li>
          <li><a href="https://www.linkedin.com/in/sofianemeziane/" className='header__icon'><FaLinkedinIn  className='header__icon--params'/></a></li>
          <li><a href="#Contact" className='header__connect'>Let's Connect</a></li>
        </ul>
      </div>
      <HeaderPresentation />
    </header>
  )
}

export default Header