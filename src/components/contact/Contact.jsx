import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import Contactimg from './../../assets/form-img.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sslu73i', 'template_nbhui15', form.current, '-Q7llD49klfap9tVT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <div id='Contact' className='contact__background'>
      <div className="container contact__container">
        <div className="contact__main--img">
          <img src={ Contactimg } alt="Développeur devant son pc" className='contact__main--png'/>
        </div>
        <div className="contact__menu">
          <div className='contact__entete'>
            <h2 className='contact__entete--title'>Get In Touch</h2>
          </div>
          {/* mail */}
          <div className='contact__main--mail'>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder='Name' required/>
              <input type="email" name="email" placeholder='Email address' required />
              <textarea name="message" rows="7" placeholder='Message' required ></textarea>
              <button type="submit" className='contact__main--btn'>Send</button>
            </form> 
          </div>
          {/* end mail */}
        </div>
      </div>
    </div>
  )
}

export default Contact