import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ThreeColumnLayout = () => {
    const paragraphStyle = {
        textAlign: "center",
        fontFamily: "avenir"
    }

    const heading = {
        fontSize:  "36px",
        fontFamily: "avenir",
        paddingBottom: "30px",
        color: "#fff",
        fontWeight: "bold"
        
    }


    const mainStyles = {
        backgroundColor: "#C11C27",
        paddingTop: "100px",
        paddingBottom: "100px",
        color: "#fff"

    }

  return (
    <div style={mainStyles}>
    <Container>
      <Row className="text-center">
        <h2 style={heading}>Help Us Cultivate</h2>
        <Col md="4" sm="12">
          <h3 className="dummy-box">Expose</h3>
          <h5 style={paragraphStyle}>
          Trauma can cast a shadow over a child's spirit, yet the illuminating power of new experiences lights the way forward.
          </h5>
        </Col>
        <Col md="4" sm="12">
          <h3 className="dummy-box">Transform</h3>
          <h5 style={paragraphStyle}>
          These moments are more than mere diversions. They reignite hope by hinting at brighter days, reinforce resilience as children venture into the unfamiliar and grow.
          </h5>
        </Col>
        <Col md="4" sm="12">
          <h3 className="dummy-box">Empower</h3>
          <h5 style={paragraphStyle}>
          We create fresh layers of joy over past pain, each novel experience after trauma isn't just an activity; it's a pivotal step on their healing journey.
          </h5>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ThreeColumnLayout;
