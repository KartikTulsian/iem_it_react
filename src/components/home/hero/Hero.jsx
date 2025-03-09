import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Hero.css'
import Heading from '../../Common/heading/Heading'
import Stack from './Stack';

export default function Hero() {
    const images = [
        {id:1, img: '../images/bg_1.jpg',},
        {id: 2, img: '../images/bg_2.JPG',},
        {id: 3, img: '../images/bg_3.JPG',},
        {id: 4, img: '../images/bg_4.JPG',}
    ];

    const [currentImage, setCurrentImage] = useState('../images/bg_1.jpg');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => {
                const currentIndex = images.indexOf(prevImage);
                return images[(currentIndex + 1) % images.length]; 
            });
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div>
            {/* <section className='hero' style={{ backgroundImage: `url(${currentImage})` }}> */}
            <section className='hero' >
                <Container>
                    <Row className='inside_hero'>
                        <Col md={6} className='desc_hero'>
                            <Heading subtitle='EXPLORE. LEARN. INNOVATE.' title='Empowering Future IT Leaders' />
                            <p>Dive into a world of cutting-edge technology, where innovation meets knowledge! The Department of IT welcomes you to an immersive learning experience—designed to sharpen your skills, fuel your creativity, and prepare you for the digital revolution.</p>

                            <div className='hero_button'>
                                <button className='primary-btn'>
                                    SIGN IN NOW <i className='fa fa-long-arrow-alt-right'></i>
                                </button>
                                <button className='secondary-btn'>
                                    VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                                </button>
                            </div>
                        </Col>
                    
                    {/* Right Side - Switching Image Section */}
                    <Col md={6} className='switching_section'>
                        {/* <div style={{ backgroundImage: `url(${currentImage})` }} className="switching-image">
                        </div> */}
                        <Stack randomRotation={true}
                            sensitivity={150}
                            sendToBackOnClick={false}
                            cardDimensions={{ width: 700, height: 500 }}
                            cardsData={images}
                            className="stack-cards"
                        />
                    </Col>
                    </Row>
                </Container>
            </section>
            <div className='margin'></div>

        </div>
    )
}
