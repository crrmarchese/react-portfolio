import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cmarcData from "../../utils/cmarcData";
import './styles.css';

const Projects = () => { 
    return (
        <section id="portfolio" className="my-4 d-flex">
             <Container>
                <Row>
                    <Col className="col-12">
                        <div className="title">
                           <h2 className="mb-3">Latest Work</h2> 
                        </div>
                    </Col>
                    {/* Loop through each project item from cmarcData file */}
                    {cmarcData.projects.map(project => {
                            return (
                                <Col className="col-md-6" key={project.id}>
                                     <div className="project-item">
                                        <a href=".#">
                                            <img src={`/images/${project.projImage}`} alt={`${project.projName}`} className="img-fluid" />
                                        </a>
                                        <div className="content">
                                            <h3>{project.projName}</h3>
                                            <div className="category">

                                                {/* Loop through projCategory array items */}
                                                {project.projCategory.map(category => {
                                                     return (
                                                        <span>{category}</span>
                                                     )
                                                    }
                                                )}
                                                
                                            </div>
                                        </div>
                                        <div className="project-details mt-3">
                                            <p>{project.projDetails}</p>
                                        </div>
                                     </div>          
                                </Col>
                                
                            )
                        })
                    }

                </Row>

            </Container>
        </section>
    )
}

export default Projects