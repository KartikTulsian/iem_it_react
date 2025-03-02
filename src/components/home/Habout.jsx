import React from 'react'
import { Container } from 'react-bootstrap'
import "../courses/Courses.css"
import { deptCard } from '../../dummydata'
import Heading from '../Common/heading/Heading'

export default function Habout() {
    return (
        <div>
            <section className="homeabout">
                <Container>
                    <Heading subtitle='our branch' title='explore our department' />
                    <div className='coursescard'>
                        <div className='grid-container'>
                            {deptCard.map((val, i) => {
                                return (
                                    <div className="card">
                                        <div className="icon_img">
                                            <img src={val.cover} alt='' />
                                        </div>
                                        <h1>{val.deptName}</h1>
                                        <p>{val.desc}</p>
                                        <button className='explore-btn'>EXPLORE !</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Container>
                {/* <Onlinecourses/> */}
            </section>
        </div>
    )
}
