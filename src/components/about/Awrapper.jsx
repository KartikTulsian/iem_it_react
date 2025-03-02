import React from 'react'
import { Container } from 'react-bootstrap'
import { awrapper } from '../../dummydata'

export default function Awrapper() {
    return (
        <div>
            <section className='awrapper'>
                <Container className='grid'>
                    {awrapper.map((val) => {
                        return (
                            <div className='box flex'>
                                <div className='img'>
                                    <img src={val.cover} alt='' />
                                </div>
                                <div className='text'>
                                    <h1>{val.data}</h1>
                                    <h3>{val.title}</h3>
                                </div>
                            </div>
                        )
                    })}
                </Container>
            </section>
        </div>
    )
}
