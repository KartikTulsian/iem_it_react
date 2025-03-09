import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "../courses/Courses.css";
import { deptCard } from '../../dummydata';
import Heading from '../Common/heading/Heading';

export default function Habout() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Restore scroll position after navigation
        const savedPosition = sessionStorage.getItem("scrollPosition");
        if (savedPosition) {
            requestAnimationFrame(() => {
                window.scrollTo({ top: parseInt(savedPosition, 10), behavior: "instant" });
            });
        }
    }, [location.key]); // Executes when the page changes

    const handleExplore = (deptName) => {
        // Save the current scroll position before navigating
        sessionStorage.setItem("scrollPosition", window.scrollY);

        if (deptName === "CAMPUS") {
            navigate('/about', window.scrollTo(0, 500));
        } else if (deptName === "PLACEMENT") {
            navigate('/students', window.scrollTo(0, 500));
        } else if (deptName === "FACULTY") {
            navigate('/faculty', window.scrollTo(0, 500));
        } else if (deptName === "DIGITAL LIBRARY") {
            window.open("https://iemgurukul-opac.l2c2.co.in/", "_blank");
        }
    };

    return (
        <div>
            <section className="homeabout">
                <Container>
                    <Heading subtitle='our branch' title='explore our department' />
                    <div className='coursescard'>
                        <div className='grid-container'>
                            {deptCard.map((val, i) => (
                                <div className="card" key={i}>
                                    <div className="icon_img">
                                        <img src={val.cover} alt={val.deptName} />
                                    </div>
                                    <h1>{val.deptName}</h1>
                                    <p>{val.desc}</p>
                                    <button className='explore-btn' onClick={() => handleExplore(val.deptName)}>
                                        EXPLORE !
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
