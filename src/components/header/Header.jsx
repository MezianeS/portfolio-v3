import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="header__portfolio--title">
      <h1 className="header__titre">Portfolio</h1>
      <div className="header__moiastronaute">
        <img src={require("./sofiane.png")}/>
      </div>
    </header>
  )
}

export default Header