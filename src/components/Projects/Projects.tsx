import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cmarcData from "../../utils/cmarcData";
import Project from "../Project/Project"
import './styles.css';

const Projects = () => { 
    return (
        <section id="portfolio" className="my-4 d-flex">
             <Container>
                <Row>
                    <Col xs={12}>
                        <div className="title">
                           <h2 className="mb-3">Latest Work</h2> 
                        </div>
                    </Col>
                    {/* Loop through each project item from cmarcData file */}
                    {cmarcData.projects.map(project => {
                            return (
                                // projectWork = is the props from Project.tsx
                                // {project} is from the map above line 20
                               <Project key={project.id} projectWork={project}   /> 
                            )
                        })
                    }

                </Row>

            </Container>
        </section>
    )
}

export default Projects