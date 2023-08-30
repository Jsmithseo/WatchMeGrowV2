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

const green = {
  backgroundColor: '#008000',
  color: '#fff',
  textAlign: 'center',
};

const orange = {
  backgroundColor: '#FFA500',
  color: '#fff',
  textAlign: 'center',
};

const ElectricBlue = {
  backgroundColor: '#7df9ff',
  color: '#000',
  textAlign: 'center',
};

const skyBlue = {
  backgroundColor: '#87CEEB',
  color: '#fff',
  textAlign: 'center',
};

const Pink = {
  backgroundColor: '#FFC0CB',
  color: '#fff',
  textAlign: 'center',
};

const white = {
  backgroundColor: '#fff',
  color: '#fff',
  textAlign: 'center',
};

const black = {
  backgroundColor: '#000',
  textAlign: 'center',
};

const yellow = {
  backgroundColor: '#FFFF00',
  textAlign: 'center',
};

const gray = {
  backgroundColor: '#808080',
  textAlign: 'center',
};

function ProgramTiles() {
  return (
    <div className="mainStyle">
      <style jsx>
        {`
    .mainStyle {
      margin-top: 40px;
      margin-buttom: 50px;
      padding-bottom: 50px;
      justify-content: space-between;
    }
  
    .links {
      color: #fff;
      text-decoration: none;
    }

    .Blacklinks {
      color: #000;
    }
          }
          
        `}
      </style>
      <Container>
        <Row>
          <Col md="4" sm="12" xs="12">
            <Card style={green}>
              <CardBody>
                <Link
                  style={{ textDecoration: 'none' }}
                  href="https://www.amazon.com/hz/wishlist/ls/J38RHHM6IY8W?ref_=list_d_wl_lfu_nav_4"
                >
                  <CardTitle>
                    <div className="links">Green | Media/Photo</div>
                  </CardTitle>
                </Link>

                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
            <br></br>
          </Col>
          <Col md="4" sm="12" xs="12">
            <Card style={orange}>
              <CardBody>
                <Link  style={{ textDecoration: 'none' }} href="https://www.amazon.com/hz/wishlist/ls/3RFJ5SY6M0SQP?ref_=list_d_wl_lfu_nav_7">
                  <CardTitle>
                    <div className="links">Orange | Tech/Dance</div>
                  </CardTitle>
                </Link>

                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
            <br></br>
          </Col>

          <Col md="4" sm="12" xs="12">
            <Card style={ElectricBlue}>
              <CardBody>
                <Link
                  style={{ textDecoration: 'none' }}
                  href="https://www.amazon.com/hz/wishlist/ls/2X2R0RMS7KQJ8?ref_=list_d_wl_lfu_nav_5"
                >
                  <CardTitle>
                    <div className="Blacklinks">
                      Electric Blue | Music/Creative Writing
                    </div>
                  </CardTitle>
                </Link>

                {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
            <br></br>
          </Col>
          <Col md="4" sm="12" xs="12">
            <Card style={skyBlue}>
              <CardBody>
                <Link
                  style={{ textDecoration: 'none' }}
                  href="https://www.amazon.com/hz/wishlist/ls/1UPGO73JZZ33W/ref=nav_wishlist_lists_1"
                >
                  <CardTitle>
                    <div className="links">Sky Blue | Zen</div>
                  </CardTitle>
                </Link>
                {/*                
                <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
            <br></br>
          </Col>
          <Col md="4" sm="12" xs="12">
            <Card style={Pink}>
              <CardBody>
                <Link
                  style={{ textDecoration: 'none' }}
                  href="https://www.amazon.com/hz/wishlist/ls/OK3BJNZXYRKS?ref_=list_d_wl_lfu_nav_7"
                >
                  <div className="links"> Pink | Office</div>
                </Link>
                {/*                
                <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
            <br></br>
          </Col>
          <Col md="4" sm="12" xs="12">
            <Card style={black}>
              <CardBody>
                <Link
                  style={{ textDecoration: 'none' }}
                  href="https://www.amazon.com/hz/wishlist/ls/30WO1EGBOF58L?ref_=list_d_wl_lfu_nav_2"
                >
                  <CardTitle>
                    <div className="links">Multi-color | Game Room</div>
                  </CardTitle>
                </Link>
                {/*                
                <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
            <br></br>
          </Col>
          <Col md="4" sm="12" xs="12">
            <Card style={white}>
              <CardBody>
                <Link
                  style={{ textDecoration: 'none' }}
                  href="https://www.amazon.com/hz/wishlist/ls/2HS7UFS2XVCV3?ref_=wl_dp_view_your_list"
                >
                  <CardTitle>
                    <div className="Blacklinks">
                      White | Conference Tutoring
                    </div>
                  </CardTitle>
                </Link>
                {/*                
                <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
            <br></br>
          </Col>
          <Col md="4" sm="12" xs="12">
            <Card style={yellow}>
              <CardBody>
                <Link
                  style={{ textDecoration: 'none' }}
                  href="https://www.amazon.com/hz/wishlist/ls/2IQU6NOKH5BD2?ref_=list_d_wl_lfu_nav_1"
                >
                  <CardTitle>
                    <div className="Blacklinks">Yellow | Bathroom</div>
                  </CardTitle>
                </Link>
                {/*                
                <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
            <br></br>
          </Col>
          <Col md="4" sm="12" xs="12">
            <Card style={gray}>
              <CardBody>
                <Link
                  style={{ textDecoration: 'none' }}
                  href="https://www.amazon.com/hz/wishlist/ls/KAX6LQ4OQ49N?ref_=list_d_wl_lfu_nav_4"
                >
                  <CardTitle>
                    <div className="links">Kitchen</div>
                  </CardTitle>
                </Link>
                {/*                
                <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
              </CardBody>
            </Card>
            <br></br>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProgramTiles;
