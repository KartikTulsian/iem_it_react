import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { homeAbout } from '../../dummydata.jsx';
import Awrapper from '../about/Awrapper.jsx';
import '../about/About.css';
import Heading from '../Common/heading/Heading.jsx';
import RoutineCard from './RoutineCard.jsx';
import CurriculumCard from './CurriculumCard.jsx';
import InfrastructureCard from './InfrastructureCard.jsx';

export default function AboutCard() {
    const [showRoutine, setShowRoutine] = useState(false);
    const [showCurriculum, setShowCurriculum] = useState(false);
    const [showInfrastructure, setShowInfrastructure] = useState(false);

    // Function to handle smooth scrolling and show Routine
    const handleRoutineClick = () => {
        setShowRoutine(true);
        setShowCurriculum(false);
        setShowInfrastructure(false) // Hide curriculum if routine is clicked
        setTimeout(() => {
            const routineSection = document.getElementById("routine-section");
            if (routineSection) {
                routineSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };

    // Function to handle smooth scrolling and show Curriculum
    const handleCurriculumClick = () => {
        setShowCurriculum(true);
        setShowRoutine(false);
        setShowInfrastructure(false) // Hide routine if curriculum is clicked
        setTimeout(() => {
            const curriculumSection = document.getElementById("curriculum-section");
            if (curriculumSection) {
                curriculumSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };

    const handleInfrastructureClick = () => {
        setShowCurriculum(false);
        setShowRoutine(false);
        setShowInfrastructure(true) // Hide routine if curriculum is clicked
        setTimeout(() => {
            const curriculumSection = document.getElementById("infrastructure-section");
            if (curriculumSection) {
                curriculumSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };

    return (
        <div>
            <section className="abouthome">
                <Container className='flexSB'>
                    <Row className='left'>
                        <img src='./images/about.webp' alt='About Us' />
                    </Row>
                    <Row className='right'>
                        <Heading subtitle='LEARN ANYTHING' title='Empowering Minds, Shaping Futures' />
                        <div className="items">
                            {homeAbout.map((val, i) => {
                                return (
                                    <div 
                                        key={i} 
                                        className="item flexSB"
                                        onClick={() => {
                                            if (val.title === "Routine") handleRoutineClick();
                                            if (val.title === "Curriculum") handleCurriculumClick();
                                            if (val.title === "Infrastructure") handleInfrastructureClick();
                                        }}
                                        style={{ cursor: val.title === "Routine" || val.title === "Curriculum" || val.title === "Infrastructure" ? "pointer" : "default" }}
                                    >
                                        <div className="img">
                                            <img src={val.cover} alt={val.title} />
                                        </div>
                                        <div className='text'>
                                            <h2>{val.title}</h2>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Row>
                </Container>
            </section>

            {showRoutine && <RoutineCard />}
            {showCurriculum && <CurriculumCard />}
            {showInfrastructure && <InfrastructureCard/>}
            
            <Awrapper />
        </div>
    );
}
