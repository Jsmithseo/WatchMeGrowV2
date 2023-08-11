import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "./public/logo.png";
import Words from "./public/words.png";
import {Col, Button, Row,Navbar, NavbarToggler, Nav, NavItem, Collapse } from 'reactstrap';



function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const navStyles = {
    backgroundColor: "#C11B27",
  }

  const navLinks = {
    font: 'avenir',
    fontSize: '18px',
    color: "#fff",
    paddingRight: '25px',
    paddingTop:"50px",
    paddingLeft: '25px',
 textDecoration: 'none',
 fontFamily: 'avenir',

  }

  const aboveNavStyles = {
    paddingTop: "30px",
    paddingBottom: "30px",

  }

  const buttonStyle = {
    marginTop: "50px",
  }
  const buttonStyle2 = {
    marginTop: "50px",
    backgroundColor: '#C11C27',

  }
    return (
        <div>
          <Row>
          <Col md={{ size: 4, offset: 2 }}>
            <Link href="/" >
       <Image 
       src={Logo} 
      alt="Description of Image"
      width={150}  
      height={125}
      />
       <Image 
       src={Words} 
      alt="Description of Image"
      width={150}  
      height={125}
      />
      </Link>
      </Col>
           <Col  md={{ size: 4, offset: 1 }}>
   <Link href="/donate"><Button style={buttonStyle}  color="success" size="lg">Donate Now</Button></Link>
   <Button  style={buttonStyle2}  size="lg">Join Newsletter</Button>{' '}
   </Col>
   </Row>

          <Navbar style={navStyles} light expand="md">
          <Col md={{ size: 12, offset: 3 }}>
          <NavbarToggler onClick={toggle} />
          <Collapse  isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link style={navLinks} href="/about/">About</Link>
              </NavItem>
              <NavItem>
                <Link   style={navLinks} href="/empower/">Empowering Families</Link>
              </NavItem>
              <NavItem>
                <Link  style={navLinks} href="/involved/">Get Involved</Link>
              </NavItem>
              <NavItem>
                <Link  style={navLinks} href="/programs/">Programs</Link>
              </NavItem>
            </Nav>
          </Collapse>
          </Col>
         
    

        </Navbar>
   
      </div>

    )
  }
  
  export default Header