import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import AboutTwoColumnLayout from '../components/AboutTwoColumnLayout';
import Timeline from '../components/Timeline';
import AboutSecondaryTwoColumnLayout from '../components/AboutSecondTwoColumnLayout';
import AboutCenterAlignedButtons from '../components/AboutCenterAlignedButtons';
import AboutNewsletterForm from '../components/AboutNewsletterForm';
import Footer from '../components/MainFooter';
import ProgramBanner from '../components/ProgramBanner';
import ProgramTiles from '../components/ProgramTiles';

const MainStyle = {
  overflowX: 'hidden',
};

export default function Prgrams() {
  return (
    <div style={MainStyle}>
      <Header />
      <ProgramBanner />
      <ProgramTiles />
      <AboutCenterAlignedButtons />
      <AboutNewsletterForm />
      <Footer />
    </div>
  );
}
