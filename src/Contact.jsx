import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css'


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i6b6kqm', 'template_li50e9r', form.current, 'NhjOVASRCvtDgzYYo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (

    <form className='formgroup' ref={form} onSubmit={sendEmail}>
      
      <input type="text" className='form' placeholder='Name' name="user_name" />
      
      <input type="email" className='form' placeholder='Email' name="user_email"  />
      
      <input name="message" className='message' placeholder='Message' />
      <input type="submit" className='send' value="Send" />
    </form>

  
  )
}