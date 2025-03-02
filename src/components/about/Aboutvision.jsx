import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

export default function Aboutvision() {
  return (
    <section className='vision-mission-section'>
      <Container>
        <Row className='align-items-center vision-section'>
          <Col lg={6} className='text-section'>
            <h2 className='section-title'>VISION OF THE PROGRAM</h2>
            <p className='section-text'>
              The Department of Information Technology at IEM Kolkata strives to achieve excellence in academics, 
              innovation, research, and student development. It is well-equipped to tackle novel challenges in this 
              fast-evolving era of Information Technology through research and entrepreneurial initiatives, thereby 
              creating true value for society.
              <br /><br />
              The department is internationally recognized in distinctive areas of education and research, driven by a 
              professional and technology-oriented focus, based on a culture of innovation and excellence.
            </p>
          </Col>
          <Col lg={6} className='image-section'>
            <img src='./images/vision.jpg' alt='Vision' className='img-fluid rounded shadow' />
          </Col>
        </Row>

        <Row className='align-items-center mission-section'>
          <Col lg={6} className='image-section'>
            <img src='./images/mission.jpg' alt='Mission' className='img-fluid rounded shadow' />
          </Col>
          <Col lg={6} className='text-section'>
            <h2 className='section-title'>MISSION OF THE PROGRAM</h2>
            <p className='section-text'>
              To assist students in understanding and enjoying the seamless nature of knowledge, encouraging them to 
              apply acquired knowledge to practical use, ensuring they become socially responsible individuals sought 
              after for their leadership qualities.
              <br /><br />
              To foster creativity, innovation, and excellence through an example-based teaching-learning process imparted 
              in the most simple and understandable way.
              <br /><br />
              To continuously upgrade knowledge bases, improve infrastructure, adopt the latest technological tools, and 
              update curricula based on periodic stakeholder feedback, enabling students to meet professional requirements 
              and expectations.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}