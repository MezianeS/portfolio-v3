import React from 'react'
import './header.css'
import Navbar from '../nav/Navbar'

const Header = () => {
  return (
    <header className="header__portfolio--title">
      <div className='header__title--nav'>
        <h1 className="header__titre">PORTFOLIO</h1>
        <Navbar />
      </div>
      
      <div className="header__moiastronaute">
        <img src={require("../../assets/sofiane.png")}/>
      </div>
    </header>
  )
}

export default Header