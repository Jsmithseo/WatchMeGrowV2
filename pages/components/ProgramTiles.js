import React from 'react';
import Image from 'next/image';
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
import Photo1 from '../public/Education.jpg';
import Photo2 from '../public/photo2.jpg';
import Photo3 from '../public/photo3.jpg';
import Photo4 from '../public/photo4.jpg';
import Photo5 from '../public/photo5.jpg';
import Photo6 from '../public/photo6.jpg';
import Photo7 from '../public/photo7.jpg';
import Photo8 from '../public/photo8.jpg';
import Photo10 from '../public/photo10.jpg';

const MainStyle = {
  marginTop: '50px',
};

const copy = {
  textAlign: 'center',
  paddingBottom: '30px',
  fontSize: '22px',
  fontFamily: 'avenir'
}

function ProgramTiles() {
  return (
    <div style={MainStyle}>
      <Container>
        <center><h4>Personalized Paths to Healing at Watch Me Grow, Inc.</h4></center>
        <div style={copy}>At Watch Me Grow Inc, we're dedicated to addressing the deep emotional echoes of trauma. Our programs are handcrafted with heart, ensuring everyone gets the personal touch they need on their healing journey. Instead of a one-size-fits-all approach, we embrace the unique stories of those we serve. And beyond individual sessions, our community groups are a haven—a space for shared stories and mutual healing. Simply put, we're here to walk alongside every person, from past pain to a brighter tomorrow.</div>
        <Row>
          <Col md="3">
            <Card>
              <CardBody>
                <Image
                  src={Photo1}
                  alt="Description of Image"
                  width={275}
                  height={150}
                />

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
                <Image
                  src={Photo7}
                  alt="Description of Image"
                  width={275}
                  height={150}
                />
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
              <Image
                  src={Photo8}
                  alt="Description of Image"
                  width={275}
                  height={150}
                />
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
              <Image
                  src={Photo4}
                  alt="Description of Image"
                  width={275}
                  height={150}
                />
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
              <Image
                  src={Photo5}
                  alt="Description of Image"
                  width={275}
                  height={150}
                />
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
              <Image
                  src={Photo3}
                  alt="Description of Image"
                  width={275}
                  height={150}
                />
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
              <Image
                  src={Photo10}
                  alt="Description of Image"
                  width={275}
                  height={150}
                />
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
              <Image
                  src={Photo6}
                  alt="Description of Image"
                  width={275}
                  height={150}
                />
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
