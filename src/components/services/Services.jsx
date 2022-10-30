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
    <div className='container services__container'>
      <div className="services__entete">
        <h2 id="Services" className="services__entete--title">
          Services
        </h2>
        <div className="services__entete--text">
          <p>
          {/* Vous pouvez passer commande via le formulaire accessible plus bas, afin d'obtenir des informations et des devis il est aussi possible de laisser un mail. */}
          You can order from the form below, if you want information and quotes it is also possible to send a mail.
          </p>
        </div>
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
             <p>{/*Je construis des applications et sites pour le B2B et B2C, de simples vitrines jusqu'à des sites complexes. */}
              I build applications and websites for B2B and B2C, from simple websites like showcase to multiples pages websites. 
            </p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <CiMobile3 className='s__main-levitate'/>
            <h4>Responsive Design</h4>
          </div>
          <div className="services__main--text">
            <p>{/* Primordial aujourd'hui, je propose de reconstruire votre site en responsive design ET mobilefirst afin d'assurer un SEO optimal. */}
            Important nowadays, I offer to rebuild your applications and websites to responsive design AND mobile-first in order to optimize SEO.
            </p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <SiWeb3Dotjs  className='s__main-levitate'/>
            <h4>Web Design</h4>
          </div>
          <div className="services__main--text">
            <p>
              {/* La conception de votre site web répondra aux normes visuelles et d'accessibilité tout en respectant votre cahier des charges. */}
              Conception of your application or website follow visuals requirements and accessibilites while respecting your specifications.  
            </p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <BiPaint className='s__main-levitate' />
            <h4>Creative Design</h4>
          </div>
          <div className="services__main--text">
            <p>
              {/* Profitez des dernières tendances en terme de design, et du suivi de la maquette jusqu'à la mise en production de votre site web. */}
              Take advantage of the latest design trends and follow-up of the sketch up to the production of your website.
            </p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <FiCoffee className='s__main-levitate' />
            <h4>Quick Support</h4>
          </div>
          <div className="services__main--text">
            <p>
              {/* Le support est fourni lors de mes prestations afin de garantir un accès fluide à votre application et site internet. */}
              Support is provided to ensure smooth access to your applications and websites over time.
            </p>
          </div>
        </div>
        
        <div className='services__main--content'>
          <div className="services__main--title">
            <GiMountaintop className='s__main-levitate' />
            <h4>Branding Identity</h4>
          </div>
          <div className="services__main--text">
            <p>
              {/* I provide une image de marque simple, logique et satisfaisante associant tendance et correspondant aux valeurs de votre marque. */}
              I provide a simple branding identity, satisfying, logical and associating trend and relativing to the values ​​of your brand.
              </p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Services