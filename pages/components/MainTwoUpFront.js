import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import YouTube from './Video1';

const mainStyle = {
  marginBottom: '2px',
  paddingTop: '50px',
  paddingBottom: '50px',
  backgroundColor: '#F5F0EF',
};
const buttonStyle = {
  marginTop: '30px',
};

const paraStyle = {
  fontFamily: 'avenir',
  fontSize: '18px',
  fontWeight: 'bold',
};

function TwoColumnLayout() {
  return (
    



    <div>
           <style jsx>
        {`

.Container {
  margin-bottom: 2px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #F5F0EF;
  
  }

  .heading {
    font-size: 28px;
  font-family: avenir;
  font-weight: bold;
  }

          @media (max-width: 600px) {
           
            .video {
              margin-left: -15px;
              margin-top: -50px;
            }

            .heading {
              text-align: center;
              padding-bottom: 10px;
              padding-top: 10px;
            }
          }

     
          
        `}
      </style>
      <div className="Container">
      <Container>
        <Row>
          <Col lg="6" md="12" sm="12" xs="12">
            <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YSEz2p56i9Q"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            </div>
          </Col>

          {/* Copy Column */}
          <Col lg="6" md="12" sm="12" xs="12">
            <div className="heading">Youth Center</div>
            <p style={paraStyle}>
              Introducing the Watch Me Grow, Inc. Youth Center! Building on our
              commitment to innovative and culturally sensitive support, our new
              youth center aims to be a beacon for the young generation of
              Vallejo. Understanding the unique adversities they face, from
              trauma to misinformation, our center is devoted to filling the gap
              in essential resources. In collaboration with a myriad of public
              agencies and private organizations, our center is poised to offer
              a suite of services, from job placements to mental health support.
              Join us in our mission to pave a brighter, informed future for the
              youth of Vallejo!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="4"></Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default TwoColumnLayout;
