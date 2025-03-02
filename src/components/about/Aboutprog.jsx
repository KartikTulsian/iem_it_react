import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { aboutprog } from '../../dummydata'
import './About.css'

export default function Aboutprog() {
  return (
    <div>
      <section className='program'>
        <Container >
            <h1 className='headline'>About the Program</h1>
            <Row className='justify-content-center'>
                <Col md={10}>
                    <div className="items_prog">
                        {aboutprog.map((val, i) => {
                            return (
                                <div className="item_p flexSB">
                                    <div key={i} className="item_p">
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
            
        </Container>
      </section>
    </div>
  )
}
