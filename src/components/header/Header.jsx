import React from 'react'
import './header.css'
import Navbar from '../nav/Navbar'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

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
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Contact">Contact</a></li>
          <li><a href="#"><BsGithub /></a></li>
          <li><a href="#"><FaLinkedinIn /></a></li>
          <li><a href="#">Contact me</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header