import React, { useState } from 'react';
import classnames from 'classnames';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/MainFooter';
import ThankYouBanner from '../components/ThankyouBanner';
import Image from 'next/image';
import Link from 'next/link';

import ChildCareLogo from '../public/childcarelogo.PNG';
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChildcareForm from '../components/RegisterChildcare';
import ChildProviderForm from '../components/RegisterProvider';

const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  paddingTop: '50px',
  paddingBottom: '50px',
  textAlign: 'center',
};

export default function Childcare() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div style={MainStyle}>
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
        <Row>
          <Col md="12">
            <center>
              <Link href="/">
                <Image
                  src={ChildCareLogo}
                  alt="Description of Image"
                  width={200}
                  height={175}
                />
              </Link>
            </center>
            <div className="bio-content">
              <div style={copyStyle}>
                Seeking dependable childcare or interested in offering your
                nurturing skills? At Watch Me Grow, you can effortlessly
                register your child for top-notch childcare or enlist to become
                a cherished childcare provider. Join our Watch Me Grow family
                today and discover excellence in childcare solutions.
              </div>
            </div>
          </Col>
          <div className="tabStyle">
            <Nav tabs>
              <NavItem style={{ cursor: 'pointer' }}>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  Childcare
                </NavLink>
              </NavItem>
              <NavItem style={{ cursor: 'pointer' }}>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  Childcare Provider
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <br></br>
          <br></br>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <ChildcareForm />
              <br></br>
              <br></br>
            </TabPane>
            <TabPane tabId="2">
              <ChildProviderForm />
              <br></br>
              <br></br>
            </TabPane>
          </TabContent>
        </Row>
      </Container>
    </div>
  );
}
