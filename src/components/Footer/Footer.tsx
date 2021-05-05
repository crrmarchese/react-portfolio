import React from "react";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import './styles.css';

const Footer = (props:any) => {
   
    return (
        <React.Fragment>
            <footer className="footer mt-auto py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <Fade delay={1000} direction="down" cascade> 
                                <ul className="list-group list-group-horizontal footer-social">
                                    <li className="list-group-item"><a href="https://www.linkedin.com/in/catherinemarchese/" title="LinkedIn" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="4x" /></a></li>
                                    <li className="list-group-item"><a href="https://github.com/crrmarchese" title="GitHub" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} size="4x" /></a></li>
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
