import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
    return (
        <section id="contact" className="my-4 d-flex contact"> 
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="title">
                           <h2 className="mb-3">Contact</h2>
                           <p>Please reach out on <a href="https://www.linkedin.com" title="LinkedIn" rel="noreferrer">Linkedin</a> to connect.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
