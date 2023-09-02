import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.png';
import Name from '../public/logo_name.png';
import {
  Col,
  Button,
  Row,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const aboveNavStyles = {
    paddingTop: '30px',
    paddingBottom: '30px',
  };

  const buttonStyle = {
    marginTop: '50px',
  };
  const buttonStyle2 = {
    marginTop: '50px',
    backgroundColor: '#C11C27',
  };

  return (
    <div>
      <style jsx>
        {`

        
          .mobileNav {
            background-color: #C11B27;

          }

          
          .navLinks {
            font-size: 18px;
            color: white;
            padding-right: 25px;
            padding-top: 20px;
            padding-left: 25px;
            text-decoration: none;
            font-family: avenir;
          }

          
          
          @media (max-width: 1000px) {
            .mobileButton {
              display: none;
            }
        
          }
          
        `}
      </style>
      <span className='mobileButton'>

      <Row>
        <Col md={{ size: 4, offset: 2 }}>
          <Link  href="/">
            <Image
              src={Logo}
              alt="Description of Image"
              width={150}
              height={125}
            />
          </Link>
          <Link href="/">
          <Image
              src={Name}
              alt="Description of Image"
              width={180}
              height={50}
            />
          </Link>
        </Col>
        <Col md={{ size: 4, offset: 1 }}>
          
          <Link href="/donate">
            <Button
              style={buttonStyle}
              color="success"
              size="lg"
            >
              Donate Now
            </Button>
          </Link>
          <Link href="/news"> 
          <Button className="mobileButton" style={buttonStyle2} size="lg">
            Join Newsletter
          </Button>{' '}
          </Link>
        </Col>
      </Row>
      </span>
      <div className='mobileNav'>
      <Navbar expand="md">
        <Col md={{ size: 12, offset: 3 }}>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
               
               <Link href="/" style={{ textDecoration: 'none' }}>
               <div className='navLinks'>
                 Home 
                 </div>
               </Link>
           
             </NavItem>
              <NavItem>
               
                <Link href="/about/" style={{ textDecoration: 'none' }}>
                <div className='navLinks'>
                  About
                  </div>
                </Link>
            
              </NavItem>
              <NavItem>
              <Link  href="/empower/" style={{ textDecoration: 'none' }}>
                <div className='navLinks'>
                  Resources               
                </div>
                </Link>
              </NavItem>
              <NavItem>
              <Link href="/involved/" style={{ textDecoration: 'none' }}>
                <div className='navLinks'>
                Volunteer
                </div>
                </Link>
              </NavItem>
              <NavItem>
                
                <Link href="/programs/" style={{ textDecoration: 'none' }}>
                <div className='navLinks'>
                  Events & Programs
                  </div>
                </Link>
               
              </NavItem>
            </Nav>
          </Collapse>
        </Col>
      </Navbar>
      </div>
    </div>
  );
}

export default Header;
