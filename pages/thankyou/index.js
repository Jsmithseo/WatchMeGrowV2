import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/MainFooter';
import ThankYouBanner from '../components/ThankyouBanner';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  paddingTop: '100px',
  paddingBottom: '100px'

}



export default function Thankyou() {
  return (
    <div style={MainStyle}>
      <Header />
      <ThankYouBanner />
      <Container>
        <Row>
          <Col md="12">
            <div className="bio-content">
              <div style={copyStyle}>
                We're excited to welcome you to the Watch Me Grow community!
                Thank you for subscribing to our newsletter. It's a step towards
                staying informed, inspired, and engaged with the latest from us.
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
