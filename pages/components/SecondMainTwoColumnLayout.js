import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Image from 'next/image';
import families from '../public/families.jpg';
import youth from '../public/youth.jpg';

const buttonStyle = {
  align: 'center',
};

const mainStyle = {
  marginTop: '0px',
  marginBottom: '10px',
  paddingTop: '50px',
  paddingBottom: '50px',
  backgroundColor: '#efefef',
  display: 'flex',
};

const paraStyle = {
  fontWeight: 'bold',
};

const placeholder = {
  backgroundColor: '#fff',
  height: '260px',
  width: '600px',
  paddingBottom: '20px',
};

const SecondMainTwoColumnLayout = () => {
  return (
    <div style={mainStyle}>
      <Container>
        <Row className="text-center">
          <Col lg="6" md="6" sm="12" xs="12">
            {/* <Image 
        src={families } 
        alt="Description of Image"
        width={500}  
        height={250} 
      /> */}
            <h3>Our Childhood Development Programs</h3>
            <p style={paraStyle}>
              Understanding the monumental significance of these formative
              years, we've designed our childhood development programs as a
              nurturing environment – much like fertile soil – to ensure every
              child's potential is recognized, encouraged, and protected.
            </p>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12">
            {/* <Image 
        src={families} 
        alt="Description of Image"
        width={500}  
        height={250} 
      /> */}
            <h3>Nurturing Families to Nurture Children</h3>
            <p style={paraStyle}>
              By supporting parents and families, we not only enhance their
              quality of life but also ensure a healthier, more stable
              foundation for children to flourish. ensuring they have the tools
              and knowledge to navigate the complexities of parenthood. After
              all, a well-supported parent is in a better position to raise a
              well-adjusted child.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecondMainTwoColumnLayout;
