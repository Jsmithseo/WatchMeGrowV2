import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ThreeColumnLayout = () => {
  const paragraphStyle = {
    textAlign: 'center',
    fontFamily: 'avenir',
  };

  const heading = {
    fontSize: '36px',
    fontFamily: 'avenir',
    paddingBottom: '10px',
    color: '#fff',
    fontWeight: 'bold',
  };

  const headingCopy = {
    paddingBottom: '60px',
  }

  const mainStyles = {
    backgroundColor: '#C11C27',
    paddingTop: '50px',
    paddingBottom: '50px',
    color: '#fff',
  };

  return (
    <div style={mainStyles}>
      <Container>
        <Row className="text-center">
          <h2 style={heading}>Help Us Cultivate</h2>
          <h5 style={headingCopy}>Our three pillar system forms the bedrock of our approach, built on innovation, collaboration, and sustainable impact</h5>
          <Col md="4" sm="12">
            <h3 className="dummy-box">Educate</h3>
            <h5 style={paragraphStyle}>
            Educating about ACEs illuminates the lasting effects of early adversity on well-being. By spreading awareness, we can foster supportive environments that prioritize healing and resilience.
            </h5>
          </Col>
          <Col md="4" sm="12">
            <h3 className="dummy-box">Encourage</h3>
            <h5 style={paragraphStyle}>
              These moments are more than mere diversions. They reignite hope by
              hinting at brighter days, reinforce resilience as children venture
              into the unfamiliar and grow.
            </h5>
          </Col>
          <Col md="4" sm="12">
            <h3 className="dummy-box">Empower</h3>
            <h5 style={paragraphStyle}>
              We create fresh layers of joy over past pain, each novel
              experience after trauma isn't just an activity; it's a pivotal
              step on their healing journey.
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThreeColumnLayout;
