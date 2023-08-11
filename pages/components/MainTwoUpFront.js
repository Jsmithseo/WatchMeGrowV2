import React from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import YouTube from './Video1'


const mainStyle = {
  marginTop: "0px",
  marginBottom: "2px",
  paddingTop: "50px",
  paddingBottom: "50px",
  backgroundColor: "#F5F0EF"
}
const buttonStyle = {
  marginTop: "30px"
}

const heading = {
  fontSize: "28px",
  fontFamily: "avenir",
  fontWeight: "bold"
}

const paraStyle = {
  fontFamily: "avenir",
  fontSize: "18px",
  fontWeight: "bold"

}


function TwoColumnLayout() {
  return (
    <div style={mainStyle}>
    <Container>
      <Row>
        <Col md="6" sm="12" xs="12">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YSEz2p56i9Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Col>

        {/* Copy Column */}
        <Col md="6" sm="12" xs="12">
          <div style={heading}>Youth Center</div>
          <p style={paraStyle}>
          Introducing the Watch Me Grow, Inc. Youth Center! Building on our commitment to innovative and culturally sensitive support, our new youth center aims to be a beacon for the young generation of Vallejo. Understanding the unique adversities they face, from trauma to misinformation, our center is devoted to filling the gap in essential resources. In collaboration with a myriad of public agencies and private organizations, our center is poised to offer a suite of services, from job placements to mental health support. Join us in our mission to pave a brighter, informed future for the youth of Vallejo!
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="4">
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default TwoColumnLayout;
