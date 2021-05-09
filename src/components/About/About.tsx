import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import cmarcData from "../../utils/cmarcData";

const About = (props:any) => {
    
    return (
        <section id="about" className="d-flex about">
            <Container>
                <Row>
                    <Col md={6}> 
                    <div className="title">
                        <h2>{cmarcData.aboutme}</h2> 
                    </div>
                    <p>{cmarcData.aboutdetails}</p></Col>
                    <Col md={6}>

                        <Image src={"../../images/" + cmarcData.aboutimage} alt={cmarcData.role} />
                        
                    </Col>
                </Row>

            </Container>
          <div className="test"></div> 
        </section>
    )
}

export default About

