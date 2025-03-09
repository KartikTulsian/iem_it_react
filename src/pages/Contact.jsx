import React from 'react'
import Header from '../components/Common/Header/Header'
import Back from '../components/Common/back/Back'
import { Container, Row } from 'react-bootstrap'
import '../components/contact/Contact.css'
import Footer from '../components/Common/Footer/Footer'
import GoToTop from '../components/Common/GotoTop/GoToTop'

export default function Contact() {
  const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1713845801505!2d88.43479857507775!3d22.572692479491664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751153ddb371%3A0x816e6fee5a5aac55!2sIEM%20Gurukul%20Building!5e0!3m2!1sen!2sin!4v1741456318600!5m2!1sen!2sin"

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
                <p>Gurukul, Y-12, Block -EP, Sector-V, Salt Lake Electronics Complex
                Kolkata – 700 091, West Bengal, India.</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> admissions@iem.edu.in</p>
              </div>
              {/* <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 81169 44852</p>
              </div> */}
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
      <GoToTop/>
      {/* <Footer/> */}
    </div>
  )
}
