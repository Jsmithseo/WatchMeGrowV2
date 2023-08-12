import React from 'react';
import Image from 'next/image';
import bannerImage from '../public/bannerImage.jpg';
import { Container, Row, Col, Button } from 'reactstrap';
import Link from 'next/link';

const BannerStyles = {
  backgroundImage: `url('${bannerImage.src}')`,
  backgroundColor: 'rgba(255, 0, 0, 0.3)',
  color: '#fff',
  textAlign: 'center',
  height: '40%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const bannerButton = {
  backgroundColor: '#fff',
  color: '#007bff',
  fontSize: '18px',
  padding: '5px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontFamily: 'avenir',
  mariginTop: '10px',
};

const bannerCopy = {
  fontFamily: 'avenir',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  paddingTop: '75px',
  paddingBottom: '99px',
  mariginLeft: '100px',
  fontSize: '22px',
  paddingLeft: '20px',
  paddingRight: '20px',
};

function Banner() {
  return (
    <Row>
      <div style={BannerStyles}>
        <Col md={{ size: 3, offset: 1 }} style={bannerCopy}>
          <div>
            Watch Me Grow, Inc. empowers Solano County families by providing
            vital resources, uniting and strengthening communities for a
            brighter future.
          </div>

          <Link href="/about">
            {' '}
            <button style={bannerButton}>Learn More</button>
          </Link>
        </Col>
        <Col></Col>
      </div>
    </Row>
  );
}

export default Banner;
