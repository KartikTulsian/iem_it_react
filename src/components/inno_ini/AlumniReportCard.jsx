import React from 'react';
import Heading from '../Common/heading/Heading';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Innovation.css'

const alumniTalks = [
  { img: '../images/alumni_talk/Slide1.PNG', title: 'Legacy Builders', desc: 'Empowering the next generation with wisdom and experience.' },
  { img: '../images/alumni_talk/Slide2.PNG', title: 'Innovation & Impact', desc: 'Alumni shaping the future with cutting-edge ideas.' },
  { img: '../images/alumni_talk/Slide3.PNG', title: 'Success Stories', desc: 'Celebrating milestones and achievements.' },
  { img: '../images/alumni_talk/Slide4.PNG', title: 'Networking', desc: 'Connecting minds, building opportunities.' },
  { img: '../images/alumni_talk/Slide5.PNG', title: 'Inspiring Journeys', desc: 'Turning dreams into reality.' },
  { img: '../images/alumni_talk/Slide6.PNG', title: 'Future Leaders', desc: 'Shaping tomorrow’s world today.' }
];

export default function AlumniReportCard() {
  return (
    <div id='alumni-report-section'>
      <Heading title="THE ALUMNI CHRONICLES" subtitle="LEGENDS NEVER GRADUATE!" subtitleClass='alumni-subheading' titleClass='alumni-heading' />
      <Container className='alumni-cards-container'>
        {alumniTalks.map((talk, index) => (
          <motion.div 
            key={index} 
            className='alumni-card' 
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={talk.img} alt={talk.title} className='alumni-card-img' />
            <div className='alumni-card-content'>
              <h3 className='alumni-card-title'>{talk.title}</h3>
              <p className='alumni-card-desc'>{talk.desc}</p>
            </div>
          </motion.div>
        ))}
      </Container>
    </div>
  );
}
