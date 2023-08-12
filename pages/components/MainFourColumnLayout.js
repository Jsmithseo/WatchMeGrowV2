import React from 'react';
import { Container, Row, Col, NavItem, Navbar } from 'reactstrap';
import NewsletterForm from './NewsletterForm';
import Link from 'next/link';

const mainStyle = {
  marginTop: '0px',
  marginBottom: '10px',
  paddingTop: '100px',
  paddingBottom: '100px',
};

const NavStyle = {
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
};

function FourColumnLayout() {
  return (
    <div style={mainStyle}>
      <Container>
        <Row className="text-center">
          <Col md="8">
            <div className="first-column">
              {/* Content for the first column goes here */}
              <h2>Join Our Newsletter</h2>
              <NewsletterForm />
            </div>
          </Col>
          <Col md="2" style={NavStyle}>
            <Link href="/about">About Us</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/empower">Empowering Families</Link>
          </Col>
          <Col md="2" style={NavStyle}>
            <Link href="https://www.facebook.com/watchmegrowinc707/">
              Facebook
            </Link>
            <Link href="https://www.instagram.com/p/Cg2hkZfBzV8/?igshid=NmZiMzY2Mjc%3D">
              Instagram
            </Link>
            <Link href="https://www.tiktok.com/@watchmegrowinc?_t=8UajWqmZ9Cw&_r=1">
              Tik Tok
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FourColumnLayout;
