import React from 'react'
import './projects.css'
import Webagencywebsite from './../../assets/projects/website-1.png'
import WordpressStrass from './../../assets/projects/website-2.png'
import Bikessels from './../../assets/projects/website-3.png'
import Ecrivwebsite from './../../assets/projects/website-4.png'
import HKwebsite from './../../assets/projects/website-5.png'
import Whalewebsite from './../../assets/projects/website-6.png'


const Projects = () => {
  function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

  return (
    <div className='projects__container'>
      <div className="container projects__container">
        <div className='projects__entete'>
          <h2 id="Projects" className='projects__entete--title'>Projects</h2>
          <p className='projects__entete--text'>These projects are very graphical in order to match up to the hilt the web today. There are a lot of projects I created for customer or studies. I used Javascript, React, Php and Wordpress.</p>
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
      <FadeInSection>
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
            <a href="https://agence-strasbourg.mezianesofiane.com/">
              <img src={ WordpressStrass } alt="Tourisme Strasbourg" />
              <div className="projects-txt">
                <h4>Strasbourg tourist office</h4>
                <span>Design & Development</span>
              </div>
            </a>
          </div>
          <div className='projects-item'>
            <a href="https://webagency.mezianesofiane.com/">
              <img src={ Webagencywebsite } alt="Web agency" />
              <div className="projects-txt">
                <h4>Web Integration</h4>
                <span>Design & Development</span>
              </div>
            </a>
          </div>
        </div>
      </FadeInSection>
      </div>
    </div>
  )
}

export default Projects