import React from 'react'
import './service.css'
import { GrReactjs } from 'react-icons/gr'
import { CiMobile3 } from 'react-icons/ci'
import { SiWeb3Dotjs } from 'react-icons/si'
import { BiPaint } from 'react-icons/bi'
import { FiCoffee } from 'react-icons/fi'
import { GiMountaintop } from 'react-icons/gi'

const Services = () => {
  return (
    <div id="Services" className='container services__container'>
      <div className="services__entete">
        <h2 className="services__entete--title">
          Services
        </h2>
        <p className="services__entete--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam harum necessitatibus praesentium reiciendis non quibusdam illo?
        </p>
      </div>
      <div className="services__main--container">
        <div className='services__main--content'>
          <div className="services__main--title">
            <div className='s__main-levitate'>
              <GrReactjs className='s__main-icons'/>
            </div>
            <h4>Development</h4>
          </div>
          <div className="services__main--text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, et voluptates itaque ut quos?</p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <CiMobile3 className='s__main-levitate'/>
            <h4>Responsive Design</h4>
          </div>
          <div className="services__main--text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, et voluptates itaque ut quos?</p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <SiWeb3Dotjs  className='s__main-levitate'/>
            <h4>Web Design</h4>
          </div>
          <div className="services__main--text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, et voluptates itaque ut quos?</p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <BiPaint className='s__main-levitate' />
            <h4>Creative Design</h4>
          </div>
          <div className="services__main--text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, et voluptates itaque ut quos?</p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <FiCoffee className='s__main-levitate' />
            <h4>Quick Support</h4>
          </div>
          <div className="services__main--text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, et voluptates itaque ut quos?</p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <GiMountaintop className='s__main-levitate' />
            <h4>Branding Identity</h4>
          </div>
          <div className="services__main--text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, et voluptates itaque ut quos?</p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Services