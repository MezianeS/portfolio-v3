import React from 'react'
import './projects.css'
import { img1 } from './../../assets/projects/website-1.png'
import { img2 } from './../../assets/projects/website-2.png'
import { img3 } from './../../assets/projects/website-3.png'
import { img4 } from './../../assets/projects/website-4.png'
import { img5 } from './../../assets/projects/website-5.png'
import { img6 } from './../../assets/projects/website-6.png'


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
        <div className='projects-item'>1</div>
        <div className='projects-item'>2</div>
        <div className='projects-item'>3</div>
        <div className='projects-item'>4</div>
        <div className='projects-item'>5</div>
        <div className='projects-item'>6</div>
      </div>
      </div>
    </div>
  )
}

export default Projects