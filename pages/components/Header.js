import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.png';
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
          <Link href="/">
            <Image
              src={Logo}
              alt="Description of Image"
              width={150}
              height={125}
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
          <Button className="mobileButton" style={buttonStyle2} size="lg">
            Join Newsletter
          </Button>{' '}
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
               
               <Link href="/home/">
               <div className='navLinks'>
                 Home 
                 </div>
               </Link>
           
             </NavItem>
              <NavItem>
               
                <Link href="/about/">
                <div className='navLinks'>
                  About
                  </div>
                </Link>
            
              </NavItem>
              <NavItem>
              <Link  href="/empower/">
                <div className='navLinks'>
                  Empowering Families
               
                </div>
                </Link>
              </NavItem>
              <NavItem>
              <Link href="/involved/">
                <div className='navLinks'>
                  Get Involved
                </div>
                </Link>
              </NavItem>
              <NavItem>
                
                <Link href="/programs/">
                <div className='navLinks'>
                  Programs
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
