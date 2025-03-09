import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../about/About.css'

export default function NaacCert() {
  return (
    <div>
      <section className='naac_acre'>
        <Container>
            <h2 className="naac-title text-center">NAAC Accreditation</h2>
            <Row className='align-items-center naac_section'>
                <Col lg={6} className='txt-section'>
                    <p>
                    The Dept. of Information Technology, at the Institute of Engineering and Management (IEM), Salt Lake, Kolkata came into existence in 1999 with a Vision 
                    “To produce Creators of Creative Technological Solutions” for the benefit of Engineering, Science and Technology and the Nation on a larger scale. 
                    It has always strived to fulfill its Mission to impart Value Based Education and promote Research and Development at the International level. 
                    The Dept. of Information Technology has received Accreditation twice by the NBA and has since been running its programs successfully.
                    </p>
                    <br/><br/>
                    <p>
                    The Dept. of Information Technology began with its first batch of 40 students for the B.Tech Course. 
                    The student intake for the Under Graduate Course gradually increased from 40 to 60 seats in 2001 and presently admits 120. 
                    The Department achieved another feather in its cap with the initiation of the Post Graduate Course (M.Tech) in 2011. Since its inception, 
                    the Dept. of Information Technology has been strengthening its resources and providing state of the art facilities to foster the spirit of learning and development of professional skills.
                    </p>
                    <br/><br/>
                    <p>
                    The IT Dept. makes full utilisation of its 7 Laboratories in its attempt to put into practice theoretical concepts and getting the students industry ready. 
                    It also encourages students to take up challenging projects and internships at the National and International level in order to fine-tune their technical skills. 
                    The Dept provides opportunities for them to join various student chapters such as NEN, SPIE, and OSA etc. in addition to other extracurricular activities. 
                    It has opened avenues to promote Entrepreneurship among students and instill in them the concept of Corporate Social Responsibility. In its attempt to pursue excellence 
                    and explore greener pastures, the Dept. hosts a strong team of qualified and experienced Faculty Members who work in co-ordination with the budding engineers.
                    </p>
                </Col>

                <Col lg={6} className='cert-section'>
                    <img src='../images/naac_certificate.jpg' alt='NAAC Accreditation'/>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}
