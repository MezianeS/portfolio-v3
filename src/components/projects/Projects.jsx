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
              <a href="#Projects">Plan</a>
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
          <a href="https://www.whaleverse.cc/">
            <img src={ Whalewebsite } alt="Whaleverse.cc" />
            <div className="projects-txt">
              <h4>NFT Showcase</h4>
              <span>Design & Development</span>
            </div>
          </a>
        </div>
        <div className='projects-item'>
          <a href="https://hongkong.mezianesofiane.com/">
            <img src={ HKwebsite } alt="Photo de HongKong" />
            <div className="projects-txt">
              <h4>Hong Kong: photoweb</h4>
              <span>Design & Development</span>
            </div>
          </a>
        </div>
        <div className='projects-item'>
          <a href="https://alaskaproject.mezianesofiane.com/">
            <img src={ Ecrivwebsite } alt="Site pour un écrivain" />
            <div className="projects-txt">
              <h4>Alaska essay</h4>
              <span>Design & Development</span>
            </div>
          </a>
        </div>
        <div className='projects-item'>
          <a href="https://www.bikessels.mezianesofiane.com/">
            <img src={ Bikessels } alt="Site de location de vélo" />
            <div className="projects-txt">
              <h4>Bicycle rental app</h4>
              <span>Design & Development</span>
            </div>
          </a>
        </div>
        <div className='projects-item'>
          <a href="Two">
            <img src={ WordpressStrass } alt="Tourisme Strasbourg" />
            <div className="projects-txt">
              <h4>Strasbourg tourist office</h4>
              <span>Design & Development</span>
            </div>
          </a>
        </div>
        <div className='projects-item'>
          <a href="One">
            <img src={ Webagencywebsite } alt="Web agency" />
            <div className="projects-txt">
              <h4>Web Integration</h4>
              <span>Design & Development</span>
            </div>
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects