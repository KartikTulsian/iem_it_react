import React from 'react'
import { team } from '../../dummydata'
import '../team/Team.css'
import { Container } from 'react-bootstrap'

export default function Teamcard() {
    return (
        <div>
            <section className='team padding'>
                <Container className='grid4'>
                    {team.map((value, index) => {
                        return (
                            <div className="items shadow">
                                <div className="img">
                                    <img src={value.cover} alt='' />
                                    <div className="overlay">
                                        <i className="fa-brands fa-facebook icon"></i>
                                        <i className="fa-brands fa-instagram icon"></i>
                                        <i className="fa-brands fa-youtube icon"></i>
                                    </div>
                                </div>
                                <div className="details">
                                    <h2>{value.name}</h2>
                                    <p>{value.work}</p>
                                </div>
                            </div>
                        )
                    })}
                </Container>
            </section>

        </div >
    )
}
