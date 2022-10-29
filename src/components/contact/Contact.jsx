import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

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
    <div className='contact__background'>
      <div className="container contact__container">
        <div className='contact__entete'>
          <h2 id='Contact' className='contact__entete--title'>Contact</h2>
          <p className="contact__entete--text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        {/* mail */}
        <div className='contact__main--mail'>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Full Name' required/>
            <input type="email" name="email" placeholder='Email address' required />
            <textarea name="message" rows="7" placeholder='Message' required ></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form> 
        </div>
        {/* end mail */}
      </div>
    </div>
  )
}

export default Contact