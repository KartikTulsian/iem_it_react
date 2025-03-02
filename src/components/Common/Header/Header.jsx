import React, { useState } from 'react'
import Head from './Head'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    let [click, setclick] = useState(false);
    return (
        <div>
            <Head/>
            <header>
                <nav className='flexSB'>
                    <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={() => setclick(false)}>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/courses'}>Academics</Link></li>
                        <li><Link to={'/students'}>Students</Link></li>
                        <li><Link to={'/faculty'}>Faculty</Link></li>
                        <li><Link to={'/innovation_initiatives'}>Innovation & Initiatives</Link></li>
                        <li><Link to={'/team'}>Team</Link></li>
                        {/* <li><Link to={'/contact'}>Contact</Link></li> */}
                    </ul>
                    <div className="start">
                        {/* <div className="profile">
                            <div className="user-name">
                                Kartik Tulsian
                            </div>
                            <div className="user-icon">
                                <i class="fa-regular fa-circle-user"></i>
                            </div>
                        </div> */}
                        <div className="button">GET STARTED</div>
                    </div>
                    <button className='toggle' onClick={() => setclick(!click)}>
                    {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header>
        </div>
    )
}
