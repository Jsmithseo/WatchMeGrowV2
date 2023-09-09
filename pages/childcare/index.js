import React, { useState } from 'react';
import classnames from 'classnames';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/MainFooter';
import ThankYouBanner from '../components/ThankyouBanner';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../public/logo.png';
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
  paddingBottom: '100px',
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
                src={Logo}
                alt="Description of Image"
                width={200}
                height={150}
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
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  I need childcare
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  I want to be a childcare provider
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <ChildcareForm />
            </TabPane>
            <TabPane tabId="2">
              <ChildProviderForm />
            </TabPane>
          </TabContent>
        </Row>
      </Container>
    </div>
  );
}