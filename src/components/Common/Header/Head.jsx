//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Head() {
  return (
    <div>
      <section className='head'>
        <Container className='flexSB'>
          <div className='logo-tagline'>
            <div className='logo'>
              <img src='../images/iem_logo.jpg' alt='iem_logo' />
            </div>
            <div className='tagline'>
              <h1>Department of Computer Science,</h1>
              <h1>Program Information Technology</h1>
              <span>Institute of Engineering & Management, Kolkata</span>
            </div>
          </div>
          
          <div className="social">
            <i className="fa-brands fa-facebook icon"></i>
            <i className="fa-brands fa-instagram icon"></i>
            <i className="fa-brands fa-youtube icon"></i>

          </div>
        </Container>
      </section>
    </div>
  )
}
