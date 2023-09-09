import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Container,
} from 'reactstrap';
import classnames from 'classnames';
import { Row, Col, Button } from 'reactstrap';
import Link from 'next/link';

const mainStyle = {
  marginTop: '10px',
  paddingTop: '50px',
  paddingBottom: '50px',
};

const firstButton = {
  backgroundColor: ' #DFFFD6',
};

const secondButton = {
  backgroundColor: '#BFEAB7',
};

const thirdButton = {
  backgroundColor: '#9FD598',
};

const fourthButton = {
  backgroundColor: '#7FC079',
};

const fifthButton = {
  backgroundColor: '#278754',
};

function AboutCenterAlignedButtons() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div style={mainStyle}>
      <style jsx>
        {`
          .tabStyle {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <Container>
        <div className="text-center">
          <h2>Your gift today can help change a child’s future.</h2>
        </div>
        <br></br>
        <div className="tabStyle">
          <Nav tabs>
            <NavItem style={{cursor: 'pointer'}}>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}
              >
                One Time
              </NavLink>
            </NavItem>
            <NavItem style={{cursor: 'pointer'}}>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}
              >
                Monthly
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <br></br>
        <br></br>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row className="justify-content-center">
              <Col md="auto" sm="2" xs="2">
                <Button style={firstButton} className="mx-2">
                  <Link
                    href="https://buy.stripe.com/9AQcNj3KD0pY0Bq9AA"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    $25
                  </Link>
                </Button>
              </Col>
              <Col md="auto" sm="2" xs="2">
                <Button style={secondButton} className="mx-2">
                  <Link
                    href="https://buy.stripe.com/6oEdRn0yra0y3NC3cd"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    $50
                  </Link>
                </Button>
              </Col>
              <Col md="auto" sm="2" xs="2">
                <Button style={thirdButton} className="mx-2">
                  <Link
                    href="https://buy.stripe.com/9AQ5kReph3CafwkdQS"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    $100
                  </Link>
                </Button>
              </Col>
              <Col md="auto" sm="2" xs="2">
                <Button style={fourthButton} className="mx-2">
                  <Link
                    href="https://buy.stripe.com/4gwaFb3KDc8Gdoc6or"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    $250
                  </Link>
                </Button>
              </Col>
              <Col md="auto" sm="2" xs="2">
                <Button style={fifthButton} className="mx-2">
                  <Link
                    href="https://buy.stripe.com/00g3cJgxp3Ca1Fu3cg"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    $500
                  </Link>
                </Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="justify-content-center">
              <Col md="auto" sm="2" xs="2">
                <Button style={firstButton} className="mx-2">
                  <Link
                    href="https://buy.stripe.com/9AQ28Fa91goWck83ch"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    $25
                  </Link>
                </Button>
              </Col>
              <Col md="auto" sm="2" xs="2">
                <Button style={secondButton} className="mx-2">
                  <Link
                    href="https://buy.stripe.com/00geVrdlda0y5VKfZ4"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    $50
                  </Link>
                </Button>
              </Col>
              <Col md="auto" sm="2" xs="2">
                <Button style={thirdButton} className="mx-2">
                  <Link
                    href="https://buy.stripe.com/5kAaFb80T4GegAobIP"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    $100
                  </Link>
                </Button>
              </Col>
              <Col md="auto" sm="2" xs="2">
                <Button style={fourthButton} className="mx-2">
                  <Link
                    href="https://buy.stripe.com/eVacNj5SLb4C4RG28g"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    $250
                  </Link>
                </Button>
              </Col>
              <Col md="auto" sm="2" xs="2">
                <Button style={fifthButton} className="mx-2">
                  <Link
                    href="https://buy.stripe.com/7sI14B3KD5Kidoc14d"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    $500
                  </Link>
                </Button>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    </div>
  );
}

export default AboutCenterAlignedButtons;
