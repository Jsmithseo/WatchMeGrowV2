import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
};

const footerLinks = {
  listStyle: 'none',
  padding: '0',
  display: 'flex',
  justifycontent: 'flexEnd',
};

function MainFooter() {
  return (
    <footer style={footerStyle} className="government-footer">
      <div className="container">
        <div className="row">
          <Col md="5">
            The Official Site of Watch Me Grow  Inc &copy; All Rights
            Reserved. WMG is a 501(c)3 (nonprofit) organization and donations
            are tax deductible.
          </Col>
          <Col md="4">
            {/* <Link href="" style={{ textDecoration: 'none' }}>
              Donor Privacy | &nbsp;
            </Link> */}
            <Link href="/privacy" style={{ textDecoration: 'none' }}>
              Privacy Policy | &nbsp;
            </Link>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
              Contact Us | &nbsp;
            </Link>
            <Link href="https://www.facebook.com/watchmegrowinc707/" style={{ textDecoration: 'none' }}>
              Facebook | &nbsp;
            </Link>
            <Link href="https://www.instagram.com/p/Cg2hkZfBzV8/?igshid=NmZiMzY2Mjc%3D" style={{ textDecoration: 'none' }}>
              Instagram
            </Link>
          </Col>
          <Col md="3">
            Powered By <Link href="https://calendly.com/softwaresmitty/15min">Onyx Creative Labs</Link>
          </Col>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
