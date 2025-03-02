import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../about/About.css'

export default function Hodmsg() {
  return (
    <div>
      <section className="msg_hod">
        <Container className="hod_det">
          <h2 className="section-title text-center">Message from HOD</h2>
          <Row className="align-items-center position-relative">
            {/* HOD Image Section */}
            <Col lg={4} className="hod_img-section">
              <div className="hod-img-wrapper">
                <img
                  src="./images/hod_img.jpg"
                  alt="HOD"
                  className="hod-img img-fluid rounded shadow"
                />
                <p className="hod-quote">
                  <i>
                    "I invite you to explore our website and get more information about our distinguished academic programs, 
                    state of the art facilities, and dedicated faculty members. It will give you our clear intention and commitment 
                    towards excellence and quality. Thanks to the efforts of our researchers, teachers, and our students too, we persevere 
                    to play a primary role in our discipline, both nationally and internationally."
                  </i>
                </p>
              </div>
            </Col>

            {/* HOD Message Section */}
            <Col lg={8} className="msg-section">
              <div className="details">
                <h3 className="hod-name">Prof. Dr. Moutushi Singh, PhD</h3>
                <p className="hod-info">
                  Head of the Department of Computer Science<br />
                  Institute of Engineering and Management<br />
                  Y-12 Salt Lake Electronics Complex, Sector – V, Kolkata – 700091<br />
                  <span>Email ID:</span> <a href="mailto:moutushi.singh@iem.edu.in">moutushi.singh@iem.edu.in</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="thanking">
          <Row>
            <Col md={12}>
              <p className="hod-message">
                It gives me immense pride and pleasure to introduce the Department of Information Technology. 
                The Department of Information Technology was founded in 1999.
                <br />
                The Bachelor degree program was started in 1999. The Master degree program was started in 2011.
                <br />
                Currently, the Master degree program run by the department is Computer Science & Business Systems. 
                The bachelor degree program is accredited by the National Board of Accreditation (NBA), New Delhi. 
                All the academic programs are periodically reviewed and updated to incorporate the latest trends in 
                information technology-driven society.
                <br />
                We are proud of our strong academic programs, which are based on theoretical and practical knowledge 
                and match well with the requirements and demands of the industry. We are committed to students by offering 
                short-term courses and pre-placement training classes that foster critical and analytical thinking and 
                build the necessary skills to succeed in the industry. Sitting squarely in an Engineering Faculty, the 
                Department of Information Technology is focused on devising innovative, correct solutions to hard problems, 
                while ensuring that the solutions execute optimally with the aspiration to create patents. We regularly conduct 
                entrepreneurship development programs that aim to train engineering graduates in the essentials of conceiving, 
                planning, initiating, and launching an economic activity or an enterprise successfully.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
