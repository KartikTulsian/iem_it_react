import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { peo, po, pso } from '../../dummydata'
import '../about/About.css'

export default function Hprogs() {
  return (
    <div className="hprogs">
      {/* PEO Section */}
      <section className='peo'>
        <Container>
            <h1 className='prog_headline'>Programme Educational Objectives (PEO)</h1>
            <Row className='justify-content-center'>
                <Col md={10}>
                    <div className="p_items">
                        {peo.map((val, i) => (
                            <div key={i} className="p_item">
                              <h2>{val.id}. {val.title}</h2>
                              <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
      </section>

      {/* PO Section */}
      <section className='po'>
        <Container>
            <h1 className='prog_headline'>Program Outcomes (PO)</h1>
            <Row className='justify-content-center'>
                <Col md={10}>
                    <div className="p_items">
                        {po.map((val, i) => (
                            <div key={i} className="p_item">
                              <h2>{val.id}. {val.title}</h2>
                              <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
      </section>

      {/* PSO Section */}
      <section className='pso'>
        <Container>
            <h1 className='prog_headline'>Program Specific Outcomes (PSO)</h1>
            <Row className='justify-content-center'>
                <Col md={10}>
                    <div className="p_items">
                        {pso.map((val, i) => (
                            <div key={i} className="p_item">
                              <h2>{val.id}. {val.title}</h2>
                              <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}
