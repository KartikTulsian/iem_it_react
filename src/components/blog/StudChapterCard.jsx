import React from 'react';
import RollingGallery from './RollingGallery';
import Heading from '../Common/heading/Heading';
import "./Blog.css";

export default function StudChapterCard() {
    return (
        <div id="student-chapter-section">
          {/* Section Header */}
          <Heading 
            title="IEM-IETE STUDENT'S FORUM" 
            subtitle="Empowering Future Engineers." 
            subtitleClass="chap-subheading" 
            titleClass="chap-heading"
          />
    
          {/* About Section */}
          <div className="about-iete">
            <h2>About IEM-IETE</h2>
            <img src="../images/iem_iete/iem-iete.jpg" alt="IEM IETE Forum" />
            <p>
              The Institution of Electronics and Telecommunication Engineers (IETE) 
              is India's leading recognized professional society devoted to the advancement 
              of Science and Technology in Electronics, Telecommunication & IT. 
            </p>
            <p>
              IEM-IETE Students' Branch actively conducts technical seminars, workshops, 
              and conferences, fostering awareness and promoting IETE. The forum was 
              inaugurated on <strong>10th August 2022</strong> at the IETE Kolkata Centre, 
              with the support of Dr. Susovan Jana and the esteemed presence of 
              Dr. Jayanta Kumar Ray (Chairman, IETE Salt Lake Sub Centre) and faculty members.
            </p>
          </div>
    
          {/* Rolling Gallery */}
          <RollingGallery autoplay={true} pauseOnHover={true} />
    
          {/* CTA Link */}
          <div className="link-iete">
            <a 
              href="https://iem-iete-students-forum.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit IEM-IETE Student's Forum
            </a>
          </div>
        </div>
      );
    }
