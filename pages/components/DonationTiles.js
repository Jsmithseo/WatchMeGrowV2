import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


const MainStyle = {
    marginTop: "100px",
    marginBottom: "100px"
}

const paypal = {
  backgroundColor: "#1054A8",
  color: "#fff",
  textAlign: "center"
}

const venmo = {
  backgroundColor: '#0074DE',
  color: "#fff",
  textAlign: "center"

}


const cashapp = {
  backgroundColor: "#03D54F",
  color: "#fff",
  textAlign: "center"

}


const zelle = {
  backgroundColor: "#8811E0",
  color: "#fff",
  textAlign: "center"

}
function ProgramTiles() {
  return (
    <div style={MainStyle}>
    <Container>
        <Row>
        <Col md="3" sm="12" xs="12">
        <Card style={paypal}>
        <CardBody>
          <CardTitle>Paypal</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
        </CardBody>
      </Card>
        </Col>
        <Col md="3" sm="12" xs="12">
        <Card style={venmo}>
        <CardBody>
          <CardTitle>Venmo</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
        </CardBody>
      </Card>
        </Col>

        <Col md="3" sm="12" xs="12">
        <Card style={cashapp}>
        <CardBody>
          <CardTitle>Cash App</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
        </CardBody>
      </Card>
        </Col>

        <Col md="3" sm="12" xs="12">
        <Card style={zelle}>
        <CardBody>
          <CardTitle>
Zelle</CardTitle>
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
};

export default ProgramTiles
