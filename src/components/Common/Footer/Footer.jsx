import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const savedPosition = sessionStorage.getItem("footerScrollPosition");

        if (savedPosition && location.state?.fromFooter) {
            // Ensuring scroll happens after the page is fully loaded
            setTimeout(() => {
                window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" }); // Default to top on fresh navigation
        }
    }, [location]);

    // Function to handle navigation and store scroll position
    const handleNavigate = (path) => {
        sessionStorage.setItem("footerScrollPosition", window.scrollY);
        navigate(path, window.scrollTo(0, 500)); // Corrected navigate function
    };

    return (
        <div>
            <section className="newletter">
                <Container className="flexSB">
                    <Row className="left">
                        <h1>Newsletter - Stay tuned and get the latest updates</h1>
                        <span>Stay updated with the latest trends and innovations in technology.</span>
                    </Row>
                    <Row className="right">
                        <input type="text" placeholder="Enter email address" />
                        <i className="fa fa-paper-plane"></i>
                    </Row>
                </Container>
            </section>
            <footer>
                <Container className="padding">
                    <div className="box logo">
                        <h2>Department of Computer Science,</h2>
                        <h2>Program Information Technology</h2>
                        <span>Institute of Engineering & Management, Kolkata</span>
                        <p>Dive into a world of cutting-edge technology, where innovation meets knowledge!</p>

                        <i className="fab fa-facebook-f icon"></i>
                        <i className="fab fa-instagram icon"></i>
                        <i className="fab fa-youtube icon"></i>
                    </div>
                    <div className="box link">
                        <h3>Explore</h3>
                        <ul>
                            <li onClick={() => handleNavigate("/about")}>About Us</li>
                            <li onClick={() => handleNavigate("/courses")}>Academics</li>
                            <li onClick={() => handleNavigate("/students")}>Students</li>
                            <li onClick={() => handleNavigate("/faculty")}>Faculty</li>
                            <li onClick={() => handleNavigate("/innovation_initiatives")}>Innovation & Initiatives</li>
                            <li onClick={() => handleNavigate("/team")}>Contact Us</li>
                        </ul>
                    </div>
                    <div className="box link">
                        <h3>Quick Links</h3>
                        <ul>
                            <a href="https://iem.edu.in/"><li>IEM Website</li></a>
                            <a href="https://www.iemlearning.com/"><li>IEM Learning</li></a>
                            <a href="https://iem-iete-students-forum.netlify.app/"><li>IEM-IETE Student's Forum</li></a>
                        </ul>
                    </div>
                    <div className="box last">
                        <h3>Have Questions?</h3>
                        <ul>
                            <li className="address">
                                <i className="fa fa-map"></i>
                                Gurukul, Y-12, Block -EP, Sector-V, Salt Lake Electronics Complex Kolkata – 700 091, West Bengal, India.
                            </li>
                            <li className="email">
                                <i className="fa fa-paper-plane"></i>
                                admissions@iem.edu.in
                            </li>
                        </ul>
                    </div>
                </Container>
                <div className="footer-bottom">
                    <p>© 2025 IEM CSE Department | Innovating technology, transforming futures.</p>
                </div>
            </footer>
        </div>
    );
}
