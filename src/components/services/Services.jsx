import React from 'react'
import './service.css'
import { GrReactjs } from 'react-icons/gr'

const Services = () => {
  return (
    <div className='container services__container'>
      <div className="services__entete">
        <h2 id="Services" className="services__entete--title">
          Services
        </h2>
        <p className="services__entete--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam harum necessitatibus praesentium reiciendis non quibusdam illo?
        </p>
      </div>
      <div className="services__main--container">
        <div className='services__main--content'>
          <div className="services__main--title">
            <GrReactjs className='s__main-icons'/>
            <h4>Development</h4>
          </div>
          <div className="services__main--text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, et voluptates itaque ut quos?</p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <h4>Responsive Design</h4>
          </div>
          <div className="services__main--text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, et voluptates itaque ut quos?</p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <h4>Web Design</h4>
          </div>
          <div className="services__main--text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, et voluptates itaque ut quos?</p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <h4>Creative Design</h4>
          </div>
          <div className="services__main--text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, et voluptates itaque ut quos?</p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <h4>Quick Support</h4>
          </div>
          <div className="services__main--text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur, et voluptates itaque ut quos?</p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
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