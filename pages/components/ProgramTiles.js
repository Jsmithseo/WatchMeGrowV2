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
          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle>Community Education & Awareness</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle>Community Outreach & Community Engagement</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>

          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle>Mentorship & Youth Development</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>

          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle>Community Involvement & Beautification</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle>Youth Civic Engagement</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle>Meditation & Nutrition</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <br />
          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle>Support Groups</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>

          <Col md="3">
            <Card>
              <CardBody>
                <CardTitle>Parent Education</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
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
