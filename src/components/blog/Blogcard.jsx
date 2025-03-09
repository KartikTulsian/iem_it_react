import React, { useState } from 'react'
import { blog } from '../../dummydata'
import { Container } from 'react-bootstrap'
import PlacementCard from './PlacementCard';
import Awrapper from '../about/Awrapper';
import StudyMaterialsCard from './StudyMaterialsCard';
import StudentAchieveCard from './StudentAchieveCard';
import StudChapterCard from './StudChapterCard';

export default function Blogcard() {
    const [showPlacemants, setShowPlacements] = useState(false);
    const [showStuChap, setShowStuChap] = useState(false);
    const [showStudMats, setShowStudMats] = useState(false);
    const [showStudAchieve, setShowStudAchieve] = useState(false);

    const handlePlacementsClick = () => {
        setShowPlacements(true);
        setShowStuChap(false);
        setShowStudAchieve(false); 
        setShowStudMats(false) // Hide curriculum if routine is clicked
        setTimeout(() => {
            const placementSection = document.getElementById("placement-section");
            if (placementSection) {
                placementSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };

    const handleStuChapClick = () => {
        setShowStuChap(true);
        setShowPlacements(false);
        setShowStudAchieve(false); 
        setShowStudMats(false) // Hide curriculum if routine is clicked
        setTimeout(() => {
            const stuChapSection = document.getElementById("student-chapter-section");
            if (stuChapSection) {
                stuChapSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };
    const handleStudMatsClick = () => {
        setShowStuChap(false);
        setShowPlacements(false);
        setShowStudAchieve(false); 
        setShowStudMats(true) // Hide curriculum if routine is clicked
        setTimeout(() => {
            const stdMatsSection = document.getElementById("materials-section");
            if (stdMatsSection) {
                stdMatsSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };
    const handleStudAchieveClick = () => {
        setShowStuChap(false);
        setShowPlacements(false);
        setShowStudMats(false);
        setShowStudAchieve(true) // Hide curriculum if routine is clicked
        setTimeout(() => {
            const stdAchieveSection = document.getElementById("achievement-section");
            if (stdAchieveSection) {
                stdAchieveSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };

    return (
        <div>
            <section className='blog'>
            <Container className='grid2'>
                {blog.map((val, i) => {
                    return (
                        <div className='blog-card shadow' key={i}
                        onClick={() => {
                            if (val.title === "Placements") handlePlacementsClick();
                            if (val.title === "Student Chapter") handleStuChapClick();
                            if (val.title === "Study Materials and Assignments") handleStudMatsClick();
                            if (val.title === "Students Achievement") handleStudAchieveClick();
                        }}
                        style={{ cursor: val.title === "Placements" || val.title === "Student Chapter" || val.title === "Study Materials and Assignments" || val.title === "Students Achievement"? "pointer" : "default" }}
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
        {showStuChap && <StudChapterCard/>}
        {showStudMats && <StudyMaterialsCard/>}
        {showStudAchieve && <StudentAchieveCard/>}
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