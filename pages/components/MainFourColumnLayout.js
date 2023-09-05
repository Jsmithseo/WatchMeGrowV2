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
          <Col md="12">
            <div className="first-column">
              {/* Content for the first column goes here */}
              <h2>Join Our Newsletter</h2>
              <h5>Our monthly newsletter is more than just a compilation of articles—it's a beacon of hope and a resource kit rolled into one.</h5>
              <br></br>
              <NewsletterForm />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FourColumnLayout;
