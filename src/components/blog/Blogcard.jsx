import React, { useState } from 'react'
import { blog } from '../../dummydata'
import { Container } from 'react-bootstrap'
import PlacementCard from './PlacementCard';
import Awrapper from '../about/Awrapper';
import StuChapCard from './StuChapCard';

export default function Blogcard() {
    const [showPlacemants, setShowPlacements] = useState(false);
    const [showStuChap, setShowStuChap] = useState(false);

    const handlePlacementsClick = () => {
        setShowPlacements(true);
        setShowStuChap(false); // Hide curriculum if routine is clicked
        setTimeout(() => {
            const placementSection = document.getElementById("placement-section");
            if (placementSection) {
                placementSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };

    const handleStuChapClick = () => {
        setShowStuChap(true);
        setShowPlacements(false); // Hide curriculum if routine is clicked
        setTimeout(() => {
            const stuChapSection = document.getElementById("student_chapter-section");
            if (stuChapSection) {
                stuChapSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };
    return (
        <div>
            <section className='blog padding'>
            <Container className='grid2'>
                {blog.map((val, i) => {
                    return (
                        <div className='blog-card shadow' key={i}
                        onClick={() => {
                            if (val.title === "Placements") handlePlacementsClick();
                            if (val.title === "Student Chapter") handleStuChapClick();
                        }}
                        style={{ cursor: val.title === "Placements" || val.title === "Student Chapter" ? "pointer" : "default" }}
                        >
                            <div className='blog-img'>
                                <img src={val.cover} alt='' />
                                <div className='img-overlay'></div>
                            </div>
                            <div className='blog-text'>
                                <h1>{val.title}</h1>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </Container>
        </section>
        {showPlacemants && <PlacementCard/>}
        {showStuChap && <StuChapCard/>}
        <Awrapper/>
        </div>
        
    )
}



{/* <div className='admin flexSB'>
                                        <span>
                                            <i className='fa fa-user'></i>
                                            <label htmlFor=''>{val.type}</label>
                                        </span>
                                        <span>
                                            <i className='fa fa-calendar-alt'></i>
                                            <label htmlFor=''>{val.date}</label>
                                        </span>
                                        <span>
                                            <i className='fa fa-comments'></i>
                                            <label htmlFor=''>{val.com}</label>
                                        </span>
                                    </div> */}