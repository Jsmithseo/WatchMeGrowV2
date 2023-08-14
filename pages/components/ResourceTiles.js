import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const MainStyle = {
  marginTop: '50px',
};

function ProgramTiles() {
  return (
    <div style={MainStyle}>
      <Container>
        <Row>
          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Education</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Rec</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>

          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Mental Health</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>

          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Youth Development</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Civic Engagement</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Senior Services </CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <br />
          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Veterans </CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>

          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Basic Needs</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProgramTiles;
