import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
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

};

const paypal = {
  backgroundColor: '#1054A8',
  color: '#fff',
  textAlign: 'center',
};

const venmo = {
  backgroundColor: '#0074DE',
  color: '#fff',
  textAlign: 'center',
};

const cashapp = {
  backgroundColor: '#03D54F',
  color: '#fff',
  textAlign: 'center',
};

const zelle = {
  backgroundColor: '#8811E0',
  color: '#fff',
  textAlign: 'center',
};
function ProgramTiles() {
  return (
    <div className="mainStyle">
      <style jsx>
        {`
    .mainStyle {
      margin-top: 100px;
      margin-buttom: 100px;
      padding-bottom: 100px;
    }
  
    .links {
      color: #fff;
    }
          }
          
        `}
      </style>
      <Container>
        <Row>
          <Col md="4" sm="12" xs="12">
            <Card style={paypal}>
              <CardBody>
                <Link href="https://www.paypal.com/paypalme/watchmegrowinc?country.x=US&locale.x=en_US">
                <CardTitle>
                  <div className="links">Paypal</div>
                  </CardTitle>
                </Link>
                
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <Col md="4" sm="12" xs="12">
            <Card style={venmo}>
              <CardBody>
                <Link href="https://account.venmo.com/u/WatchMeGrowInc">
                <CardTitle>
                  <div className="links">Venmo</div>
                  </CardTitle>
                </Link>
                
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>

          <Col md="4" sm="12" xs="12">
            <Card style={cashapp}>
              <CardBody>
                <Link href="https://cash.app/$Jameelahhanif">
                <CardTitle>
                  <div className="links">Cash App</div>
                  </CardTitle>
                </Link>
                
                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>

          {/* <Col md="3" sm="12" xs="12">
            <Card style={zelle}>
              <CardBody>
                <Link href="/">
                <CardTitle>
                  <div className="links">Zelle</div>
                  </CardTitle>
                </Link>
               
                <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default ProgramTiles;
