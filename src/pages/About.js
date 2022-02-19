import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='section about-section' >
      <h1 className='section-title' >about</h1>
      <p style={{ textAlign:'center'}}>
        Hello! I'm Rafael Molina! This page is a lesson from John Smilga React.js course at Ûdemy.
        <br/>
        <br/>
        <Link to='contact' className='btn'> contact me </Link>
      </p>
    </section>
  )
}

export default About
