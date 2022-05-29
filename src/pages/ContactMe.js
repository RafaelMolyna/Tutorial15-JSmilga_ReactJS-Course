import React from 'react'
import { BsWhatsapp, BsLinkedin } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import ImageMe from '../present.jpeg'
import './contact.css'

const ContactMe = function() {
  return (
    <section className='section about-section' >
      <h1 className='section-title contact-title' >
        Hello! I am Rafael Molina
      </h1>
      <div className='image-contact'></div>
      <div className='center'>
        <p> I'm an Electrical Engineering Student at Unicamp. I'm on the second half of my graduation, graduating in Dec 2023 / Jul 2024. </p>
        <p> I'm a Web Development learner looking for my first job as a Dev. If you want to know more about me, please contact me:</p>
        <h3 className='contact-info'>
          <FiMail /> rafaelogallas@gmail.com
        </h3>
        <h4 className='contact-info'>
          <BsWhatsapp /> +55 19 9 8915-9781
        </h4>
        <a target='_blank' href="https://www.linkedin.com/in/rafael-ogallas-b48075191/">
          <h4 className='contact-info'>
            <BsLinkedin /> Linkedin
          </h4>
        </a>
      </div>
    </section>
  )
}

export default ContactMe;
