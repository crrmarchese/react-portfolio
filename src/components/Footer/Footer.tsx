import React from "react";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = (props:any) => {
   
    return (
        <React.Fragment>
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container test">
                    <div className="row">
                        <div className="col-12">

                            <Fade delay={1000} direction="down" cascade> 
                                <ul className="list-group list-group-horizontal footer-social">
                                    <li className="list-group-item"><FontAwesomeIcon icon={faLinkedin} size="2x" /></li>
                                    <li className="list-group-item"><FontAwesomeIcon icon={faGithubSquare} size="2x" /></li>
                                </ul>
                            </Fade>
                            
                        </div>
                    </div>
                </div>
            </footer>


        </React.Fragment>
        
    )
}

export default Footer
