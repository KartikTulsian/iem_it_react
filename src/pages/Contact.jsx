import React from 'react'
import Header from '../components/Common/Header/Header'
import Back from '../components/Common/back/Back'
import { Container, Row } from 'react-bootstrap'
import '../components/contact/Contact.css'
import Footer from '../components/Common/Footer/Footer'

export default function Contact() {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231277325!2d88.26495090163961!3d22.53540637448262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1721920064905!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '

  return (
    <div>
      {/* <Header/> */}
      {/* <Back title='Contact Us' image="../images/contact_us.jpg"/> */}
      <section className='contacts padding'>
        <Container className='shadow flexSB'>
          <Row className='left'>
            <iframe src={map}></iframe>
          </Row>
          <Row className='right'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>West Bengal, India</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> kartiktulsian0517@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 81169 44852</p>
              </div>
            </div>

            <form action='' id='form_det'>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK INSTAGRAM YOUTUBE</span>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>
  )
}
