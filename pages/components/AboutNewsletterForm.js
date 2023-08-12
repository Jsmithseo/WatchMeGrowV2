import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

const mainStyle = {
  marginTop: '0px',
  marginBottom: '4px',
  paddingTop: '100px',
  paddingBottom: '100px',
  backgroundColor: '#F5F0EF',
};

function AboutNewsletterForm() {
  return (
    <div style={mainStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col md="7">
            <p>STAY INFORMED WITH NEWS & UPDATES</p>
            <Form>
              <InputGroup>
                <FormControl type="email" placeholder="Enter your email" />
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutNewsletterForm;
