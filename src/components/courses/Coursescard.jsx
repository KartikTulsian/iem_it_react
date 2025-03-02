import React from 'react'
import { Container } from 'react-bootstrap'
import './Courses.css'
import { coursesCard } from "../../dummydata"

export default function Coursescard() {
    return (
        <div>
            <section className='coursescard'>
                <Container className='grid2'>
                    {coursesCard.map((val, i) => {
                        return (
                            <div className="items">
                                <div className="content flex">
                                    <div className="left">
                                        <div className="img">
                                            <img src={val.cover} alt='' />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h1>{val.coursesName}</h1>
                                        <div className='rate'>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <label htmlFor=''>(5.0)</label>
                                        </div>
                                        <div className="details">
                                            {val.courTeacher.map((det,ind) => {
                                                return (
                                                    <div>
                                                        <div className="box">
                                                            <div className="dimg">
                                                                <img src={det.dcover} alt='' />
                                                            </div>
                                                            <div className="para">
                                                                <h4>{det.name}</h4>
                                                            </div>
                                                        </div>
                                                        <span>{det.totalTime}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='price'>
                                    <h3>
                                        {val.priceAll} / {val.pricePer}
                                    </h3>
                                </div>
                                <button className='outline-btn'>ENROLL NOW !</button>
                            </div>
                        )
                    })}
                </Container>
            </section>
        </div>
    )
}
