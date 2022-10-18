import React from 'react'
import './header.css'
import Navbar from '../nav/Navbar'

const Header = () => {
  return (
    <header>
      <div className="header__moiastronaute">
        <img src={require("../../assets/sofiane.png")}/>
      </div>
    </header>
  )
}

export default Header