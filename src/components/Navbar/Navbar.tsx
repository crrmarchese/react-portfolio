import React from "react";
import Sticky from "react-stickynode";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import './styles.css';


const NavbarNav = (props:any) => {
 
  return (
    <React.Fragment>
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">

      <header className="shadow-sm">
          <Navbar collapseOnSelect className="test" variant="light" expand="lg">
            <Container>
              <Navbar.Brand href="./" className="logo_h"> 
               <img src={"../../images/" + props.mainlogo} alt="Personal logo"  />
             </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <ul className="nav navbar-nav m-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="/"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="/contact"
                      spy={true}
                      smooth={true}
                      offset={-86}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Container>
            
          </Navbar>
        </header> 

      </Sticky>
    </React.Fragment>
  )
}

export default NavbarNav