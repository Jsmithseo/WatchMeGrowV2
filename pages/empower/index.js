import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import AboutCenterAlignedButtons from '../components/AboutCenterAlignedButtons';
import AboutNewsletterForm from '../components/AboutNewsletterForm';
import Footer from '../components/MainFooter';
import EmpowerBanner from '../components/EmpowerBanner';
import ResourceTile from '../components/ResourceTiles';
import { Button } from 'reactstrap';
import Link from 'next/link';

const buttonContainer = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '50px',
  paddingBottom: '50px',
};
const buttonStyle = {
  backgroundColor: '#198753',
};

export default function empower() {
  return (
    <div>
      <Header />
      <EmpowerBanner />
      <ResourceTile />
      <div style={buttonContainer}>
        <Link href="/donate">
          <Button style={buttonStyle}>Donate Now</Button>
        </Link>
      </div>
      <AboutNewsletterForm />

      <Footer />
    </div>
  );
}
