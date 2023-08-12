import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import YouTube from './Video1';

const mainStyle = {
  marginTop: '0px',
  marginBottom: '2px',
  paddingTop: '50px',
  paddingBottom: '50px',
};
const buttonStyle = {
  marginTop: '30px',
};

const heading = {
  fontSize: '28px',
  fontFamily: 'avenir',
  fontWeight: 'bold',
  textAlign: 'center',
};

const paraStyle = {
  fontFamily: 'avenir',
  fontSize: '18px',
  textAlign: 'center',
};

function TwoColumnLayout() {
  return (
    <div style={mainStyle}>
      <Container>
        <Row>
          <Col md="12">
            <div style={heading}>How We Nurture Our Garden</div>
            <p style={paraStyle}>
              Watch Me Grow, Inc. embraces an innovative and culturally
              sensitive approach to meet the gaps in resources/services,
              consultant with organizations/businesses and effectively provide
              quality childcare while engage low-income parents/guardians in
              early childhood education and advocacy. Watch Me Grow, Inc.
              supports parents who suffer from trauma and misinformation, and
              connect them with the proper resources and services offered by
              various public agencies and private organizations within Solano
              County, such as job placement, childcare alternative payment,
              rental assistance, mental health services... just to name a few.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TwoColumnLayout;
