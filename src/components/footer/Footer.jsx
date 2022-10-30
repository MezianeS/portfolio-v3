import React from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer__background'> 
      <div className="container footer__container">
        <div className="footer__title">
          <h4>Portfolio</h4>
        </div>
        <div className="footer__icons">
          <ul>
            <li>
              <a href="#" className='header__icon'><BsGithub className='header__icon--params'/></a>
            </li>
            <li>
              <a href="#" className='header__icon'><FaLinkedinIn  className='header__icon--params'/>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer