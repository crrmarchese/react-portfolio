import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cmarcData from "../../utils/cmarcData";

const About = (props:any) => {
    
    return (
        <section id="about">
            <Container>
                <Row className="py-5 g-5">
                    <Col> 
                    <div className="title">
                        <h2>{cmarcData.aboutme}</h2> 
                    </div>
                    <p>{cmarcData.aboutdetails}</p></Col>
                    <Col>2 of 2</Col>
                </Row>

            </Container>
           
        </section>
    )
}

export default About

