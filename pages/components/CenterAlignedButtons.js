import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const mainStyle = {
  paddingTop: '40px',
  paddingBottom: '40px',
};

const firstButton = {
  backgroundColor: '#4FA63C',
};

const secondButton = {
  backgroundColor: '#438C33',
};

const thirdButton = {
  backgroundColor: '#36722A',
};

const fourthButton = {
  backgroundColor: '#295821',
};

const fifthButton = {
  backgroundColor: '#1C3E18',
};

const heading = {
  fontSize: '33px',
  fontWeight: 'bold',
  fontFamily: 'avenir',
};

const paraStyle = {
  fontSize: '18px',
  fontWeight: 'bold',

  fontFamily: 'avenir',
};

const buttonStyle = {
  backgroundColor: '#198753',
  mariginTop: '20px',
};
function CenterAlignedButtons() {
  return (
    <div style={mainStyle}>
      <Container>
        <div className="text-center">
          <p style={paraStyle}>
            In the U.S., approximately 34.8 million children (ages 0-17) —
            almost 50% of the nation's young population — encounter adverse
            childhood experiences (ACEs) which can significantly jeopardize
            their future health and wellness.
          </p>
          <h2 style={heading}>Your gift is empowerment</h2>
          <Link href="/donate">
            <Button style={buttonStyle}>Donate Now</Button>
          </Link>
        </div>
        {/* <Row className="justify-content-center">
        <Col md="auto" sm="auto" xs="12">
          <Button style={firstButton} className="mx-2">
            $25
          </Button>
        </Col>
        <Col md="auto" sm="auto" xs="12">
          <Button  style={secondButton} className="mx-2">
            $50
          </Button>
        </Col>
        <Col md="auto" sm="auto" xs="12">
          <Button style={thirdButton} className="mx-2">
            $100
          </Button>
        </Col>
        <Col md="auto" sm="auto" xs="12">
          <Button style={fourthButton}   className="mx-2">
            $250
          </Button>
        </Col>
        <Col md="auto" sm="auto" xs="12">
          <Button style={fifthButton}  className="mx-2">
            $500
          </Button>
        </Col>
      </Row> */}
      </Container>
    </div>
  );
}

export default CenterAlignedButtons;
