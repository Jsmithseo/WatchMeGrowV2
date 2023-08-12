import { Main } from 'next/document';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const mainStyle = {
  marginTop: '0px',
  marginBottom: '10px',
  paddingTop: '100px',
  paddingBottom: '100px',
  backgroundColor: '#efefef',
};

function AboutTwoColumnLayout() {
  return (
    <div style={mainStyle}>
      <Container>
        <Row>
          {/* Left Column */}
          <Col md="6">
            <div>
              {/* Content for the left column goes here */}
              <h2>Left Column</h2>
              <p>
                This column spans 6 units on medium-sized screens and above.
              </p>
            </div>
          </Col>

          {/* Right Column */}
          <Col md="6">
            <div>
              {/* Image for the right column goes here */}
              <img src="your-image.jpg" alt="Image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutTwoColumnLayout;
