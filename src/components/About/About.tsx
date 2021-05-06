import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <section id="about">
            <Container>
                <Row className="py-5 g-5">
                    <Col> 
                    <div className="title">
                        <h2>Who I Am</h2> 
                    </div>
                    <p>In June 2021, I will graduate from the <a href="https://bootcamp.unh.edu/" title="UNH Bootcamp" rel="noreferrer">University of New Hampshire's Full Stack Developer coding boot camp</a>. I have several years experience working with WordPress and I'm looking for a new challenge. I am an analytical, fast learner with the desire to learn and apply new skills. I want my work to matter, and continually improve the work that I do.</p></Col>
                    <Col>2 of 2</Col>
                </Row>

            </Container>
           
        </section>
    )
}

export default About

