import React from 'react'
import './projects.css'
import Webagencywebsite from './../../assets/projects/website-1.png'
import WordpressStrass from './../../assets/projects/website-2.png'
import Bikessels from './../../assets/projects/website-3.png'
import Ecrivwebsite from './../../assets/projects/website-4.png'
import HKwebsite from './../../assets/projects/website-5.png'
import Whalewebsite from './../../assets/projects/website-6.png'


const Projects = () => {
  return (
    <div className='projects__container'>
      <div className="container projects__container">
        <div className='projects__entete'>
          <h2 id="Projects" className='projects__entete--title'>Projects</h2>
          <p className='projects__entete--text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos facere tempora expedita animi repudiandae optio architecto aut illo accusantium natus unde porro non aperiam eligendi, sequi nesciunt dolor deleniti qui!</p>
        </div>
        <div className='projects__menu'>
          <div className="projects__menu--button">
            <div className="nav-item">
              <a href="#">Plan</a>
            </div>
            {/* <div className="nav-item">
              <a href="#">Tab2</a>
            </div>
            <div className="nav-item">
              <a href="#">Tab3</a>
            </div> */}
          </div>
        </div>
      <div className="projects__menu--projectslist">
        <div className='projects-item'>
          <a href="Six">
            <img src={ Whalewebsite } alt="Whaleverse.cc" />
          </a>
        </div>
        <div className='projects-item'>
          <a href="Five">
            <img src={ HKwebsite } alt="Photo de HongKong" />
          </a>
        </div>
        <div className='projects-item'>
          <a href="Four">
            <img src={ Ecrivwebsite } alt="Site pour un écrivain" />
          </a>
        </div>
        <div className='projects-item'>
          <a href="Three">
            <img src={ Bikessels } alt="Site de location de vélo" />
          </a>
        </div>
        <div className='projects-item'>
          <a href="Two">
            <img src={ WordpressStrass } alt="Tourisme Strasbourg" />
          </a>
        </div>
        <div className='projects-item'>
          <a href="One">
            <img src={ Webagencywebsite } alt="Web agency" />
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects