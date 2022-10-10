import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='portfolio__navbar--menu'>
      <ul className='portfolio__navbar--list'>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar