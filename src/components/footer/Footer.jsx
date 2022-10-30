import React from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer__background'> 
      <div className="container footer__container">
        <div className="footer__content">
          <div className="footer__title">
            <h4>Portfolio</h4>
          </div>
          <div className='footer__icons--copy'>
            <div className="footer__icons">
              <ul>
                <li>
                  <a href="https://github.com/MezianeS" className='footer__icons--img'><BsGithub className='footer__icons--params'/></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sofianemeziane/" className='footer__icons--img'><FaLinkedinIn  className='footer__icons--params'/>
                  </a>
                </li>
              </ul>
            </div>
            <div className='footer__copyright'>
              <p>Copyright2022: All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer