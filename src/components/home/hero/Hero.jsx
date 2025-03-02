import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'

import './Hero.css'
import Heading from '../../Common/heading/Heading'

export default function Hero() {

    const [currentImage, setCurrentImage] = useState('../images/bg_1.jpg');

    useEffect(() => {
        const images = [
            '../images/bg_1.jpg',
            '../images/bg_2.JPG',
            '../images/bg_3.JPG',
            '../images/bg_4.webp'
        ];
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
            <section className='hero' style={{ backgroundImage: `url(${currentImage})` }}>
                <Container>
                    <Row>
                    <Heading subtitle='EXPLORE. LEARN. INNOVATE.' title='Empowering Future IT Leaders' />
                        <p>Dive into a world of cutting-edge technology, where innovation meets knowledge! The Department of IT welcomes you to an immersive learning experience—designed to sharpen your skills, fuel your creativity, and prepare you for the digital revolution.</p>

                        <div className='hero_button'>
                            <button className='primary-btn'>
                                SIGN IN NOW <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                            <button>
                                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    </Row>
                </Container>
            </section>
            <div className='margin'></div>

        </div>
    )
}
