import React from "react";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Project = (props:any)  => {
    // console.log(props);
    const project = props.projectWork;

    return (
        <Col md={6}>
                <div className="project-item">
                <a href={`${project.projURL}`}>
                    <img src={`/images/${project.projImage}`} alt={`${project.projName}`} className="img-fluid" />
                </a>
                <div className="content">
                    <div className="category">

                        {/* Loop through projCategory array items */}
                        {project.projCategory.map((category:string, index:number) => {
                                return (
                                <span key={index}>{category}</span>
                                )
                            }
                        )}
                        
                    </div>
                </div>
                <div className="project-details mt-3 px-3 py-2">
                    <h3>{project.projName}</h3>
                    <p>{project.projDetails}</p>
                    {/* TO DO: Conditional Rendering if no GitHub repo */}
                
                    <p><a href={`${project.projCodeURL}`} title="GitHub" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} size="2x" /></a></p>
                </div>
                </div>          
        </Col>
                                
    )
}

export default Project
