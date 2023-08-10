import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';


const mainStyle = {
    marginTop: "10px",
    paddingTop: "100px",
    paddingBottom: "100px"
  }

  const firstButton = {
backgroundColor:" #FBA9B1",
  }

const secondButton = {
backgroundColor: "#F27C8C",
    }

const thirdButton = {
backgroundColor: "#E85065",
}

const fourthButton = {
backgroundColor: "#D9243F",
}

const fifthButton = {
backgroundColor: "#C11C27",

}
                

function AboutCenterAlignedButtons() {
  return (
    <div style={ mainStyle}>
    <Container>
      <div className="text-center">
        <p>7.7 million kids and teens are alone and unsupervised after school while nearly 25 million don't have access to after-school programs.</p>
        <h2>Your gift today can help change a child’s future.</h2>
        </div>
      <Row className="justify-content-center">
        <Col md="auto">
          <Button style={firstButton} className="mx-2">
            $25
          </Button>
        </Col>
        <Col md="auto">
          <Button  style={secondButton} className="mx-2">
            $50
          </Button>
        </Col>
        <Col md="auto">
          <Button style={thirdButton} className="mx-2">
            $100
          </Button>
        </Col>
        <Col md="auto">
          <Button style={fourthButton}   className="mx-2">
            $250
          </Button>
        </Col>
        <Col md="auto">
          <Button style={fifthButton}  className="mx-2">
            $500
          </Button>
        </Col>
      </Row>
    </Container>
</div>
  );
};

export default AboutCenterAlignedButtons;
