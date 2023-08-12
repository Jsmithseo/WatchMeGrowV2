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
                <CardTitle>Haircuts</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Food </CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>

          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Clothing </CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>

          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Housing & Rental Assistance </CardTitle>
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
                <CardTitle>Therapy</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Transportation </CardTitle>
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
                <CardTitle>Mediation </CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>

          <Col md="3" sm="12" xs="12">
            <Card>
              <CardBody>
                <CardTitle>Parent Education</CardTitle>
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
