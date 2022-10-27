import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <div className='projects__container'>
      <div className="container projects__container">
        <div className='projects__entete'>
          <h2 className='projects__entete--title'>Projects</h2>
          <p className='projects__entete--text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos facere tempora expedita animi repudiandae optio architecto aut illo accusantium natus unde porro non aperiam eligendi, sequi nesciunt dolor deleniti qui!</p>
        </div>
        <div className='projects__menu'>
          <div className="projects__menu--button">
            <div className="nav-item">
              <a href="#">Tab1</a>
            </div>
            <div className="nav-item">
              <a href="#">Tab2</a>
            </div>
            <div className="nav-item">
              <a href="#">Tab3</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects