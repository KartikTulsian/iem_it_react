import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./Footer.css"

export default function Footer() {
    return (
        <div>
            <section className='newletter'>
                <Container className='flexSB'>
                    <Row className='left'>
                        <h1>Newsletter - Stay tune and get the latest update</h1>
                        <span>Stay updated with the latest trends and innovations in technology.</span>
                    </Row>
                    <Row className='right'>
                        <input type='text' placeholder='Enter email address' />
                        <i className='fa fa-paper-plane'></i>
                    </Row>
                </Container>
            </section>
            <footer>
                <Container className='padding'>
                    <div className='box logo'>
                        <h2>Department of Computer Science,</h2>
                        <h2>Program Information Technology</h2>
                        <span>Institute of Engineering & Management, Kolkata</span>
                        <p>Dive into a world of cutting-edge technology, where innovation meets knowledge!</p>

                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-youtube icon'></i>
                    </div>
                    <div className='box link'>
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Courses</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className='box link'>
                        <h3>Quick Links</h3>
                        <ul>
                            <a href='https://iem.edu.in/'><li>IEM Website</li></a>
                            <a href='www.iemlearning.com/'><li>IEM Learning</li></a>
                            <li>Terms & Conditions</li>
                            <li>Privacy</li>
                            <li>Feedbacks</li>
                        </ul>
                    </div>
                    <div className='box last'>
                        <h3>Have a Questions?</h3>
                        <ul>
                            <li>
                                <i className='fa fa-map'></i>
                                West Bengal, India
                            </li>
                            <li>
                                <i className='fa fa-phone-alt'></i>
                                +91 81169 44852
                            </li>
                            <li>
                                <i className='fa fa-paper-plane'></i>
                                kartiktulsian0517@gmail.com
                            </li>
                        </ul>
                    </div>
                </Container>
                {/* <Container className='copyright'>
                    
                </Container> */}
                <div className="footer-bottom">
                    <p>© 2025 IEM CSE Department | Innovating technology, transforming futures.</p>
                </div>
            </footer>
        </div>
    )
}
