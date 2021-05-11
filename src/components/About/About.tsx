import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import cmarcData from "../../utils/cmarcData";
import Aboutme from "../../images/who-i-am.png"
import './styles.css';

const About = (props:any) => {
    
    return (
        <section id="about" className="d-flex about test">
            <Container>
                <Row>
                    <Col md={6}> 
                    <div className="title">
                        <h2>{cmarcData.aboutme}</h2> 
                    </div>
                    <p>{cmarcData.aboutdetails}</p></Col>
                    <Col md={6}>

                        <Image src={Aboutme} alt={cmarcData.role} />
                        
                    </Col>
                </Row>
            </Container>
         
        </section>
    )
}

export default About

