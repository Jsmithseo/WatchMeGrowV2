import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Link from 'next/link';

const mainStyle = {
  marginTop: '10px',
  paddingTop: '100px',
  paddingBottom: '100px',
};

const firstButton = {
  backgroundColor: ' #FBA9B1',
};

const secondButton = {
  backgroundColor: '#F27C8C',
};

const thirdButton = {
  backgroundColor: '#E85065',
};

const fourthButton = {
  backgroundColor: '#D9243F',
};

const fifthButton = {
  backgroundColor: '#C11C27',
};

function AboutCenterAlignedButtons() {
  return (
    <div style={mainStyle}>
      <Container>
        <div className="text-center">
          <h2>Your gift today can help change a child’s future.</h2>
        </div>
        <Row className="justify-content-center">
          <Col md="auto" sm="2" xs="2">
            
            <Button style={firstButton} className="mx-2">
            <Link href="https://buy.stripe.com/9AQcNj3KD0pY0Bq9AA" style={{ textDecoration: 'none' }}>
              $25
              </Link>
            </Button>
           

          </Col>
          <Col md="auto" sm="2" xs="2">
            
            <Button style={secondButton} className="mx-2">
            <Link href="https://buy.stripe.com/6oEdRn0yra0y3NC3cd" style={{ textDecoration: 'none' }}>
              $50
              </Link>
            </Button>
            

          </Col>
          <Col md="auto" sm="2" xs="2">
            
              <Button style={thirdButton} className="mx-2">
              <Link href="https://buy.stripe.com/9AQ5kReph3CafwkdQS" style={{ textDecoration: 'none' }}>
                $100
                </Link>
              </Button>
            
   
          </Col>
          <Col md="auto" sm="2" xs="2">
            
              <Button style={fourthButton} className="mx-2">
              <Link href="https://buy.stripe.com/4gwaFb3KDc8Gdoc6or" style={{ textDecoration: 'none' }}>
                $250
                </Link>
              </Button>
            

          </Col>
          <Col md="auto" sm="2" xs="2">
            
              <Button style={fifthButton} className="mx-2">
              <Link href="https://buy.stripe.com/00g3cJgxp3Ca1Fu3cg" style={{ textDecoration: 'none' }}>
                $500
                </Link>
              </Button>
           
  
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutCenterAlignedButtons;
