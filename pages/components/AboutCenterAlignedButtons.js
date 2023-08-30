import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Link from 'next/link';

const mainStyle = {
  marginTop: '10px',
  paddingTop: '50px',
  paddingBottom: '50px',
};

const firstButton = {
  backgroundColor: ' #DFFFD6',
};

const secondButton = {
  backgroundColor: '#BFEAB7',
};

const thirdButton = {
  backgroundColor: '#9FD598',
};

const fourthButton = {
  backgroundColor: '#7FC079',
};

const fifthButton = {
  backgroundColor: '#278754',
};

function AboutCenterAlignedButtons() {
  return (
    <div style={mainStyle}>
      <Container>
        <div className="text-center">
          <h2>Your gift today can help change a child’s future.</h2>
        </div>
        <br></br>
        <Row className="justify-content-center">
          <Col md="auto" sm="2" xs="2">
            
            <Button style={firstButton} className="mx-2">
            <Link href="https://buy.stripe.com/9AQcNj3KD0pY0Bq9AA" style={{ textDecoration: 'none' ,  color: 'black'}}>
              $25
              </Link>
            </Button>
           

          </Col>
          <Col md="auto" sm="2" xs="2">
            
            <Button style={secondButton} className="mx-2">
            <Link  href="https://buy.stripe.com/6oEdRn0yra0y3NC3cd" style={{ textDecoration: 'none', color: 'black' }}>
              $50
              </Link>
            </Button>
            

          </Col>
          <Col md="auto" sm="2" xs="2">
            
              <Button style={thirdButton} className="mx-2">
              <Link href="https://buy.stripe.com/9AQ5kReph3CafwkdQS" style={{ textDecoration: 'none',  color: 'black' }}>
                $100
                </Link>
              </Button>
            
   
          </Col>
          <Col md="auto" sm="2" xs="2">
            
              <Button style={fourthButton} className="mx-2">
              <Link href="https://buy.stripe.com/4gwaFb3KDc8Gdoc6or" style={{ textDecoration: 'none',  color: 'black' }}>
                $250
                </Link>
              </Button>
            

          </Col>
          <Col md="auto" sm="2" xs="2">
            
              <Button style={fifthButton} className="mx-2">
              <Link href="https://buy.stripe.com/00g3cJgxp3Ca1Fu3cg" style={{ textDecoration: 'none',  color: 'black' }}>
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
