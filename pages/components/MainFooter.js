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
          <Col>
            The Official Site of Watch Me Grow  Inc&copy; All Rights
            Reserved. WMG is a 501(c)3 (nonprofit) organization and donations
            are tax deductible.
          </Col>
          <Col md="6">
            {/* <Link href="" style={{ textDecoration: 'none' }}>
              Donor Privacy | &nbsp;
            </Link> */}
            <Link href="/privacy" style={{ textDecoration: 'none' }}>
              Privacy Policy | &nbsp;
            </Link>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
              Contact Us
            </Link>
          </Col>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
