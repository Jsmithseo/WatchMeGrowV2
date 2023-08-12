import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import AboutTwoColumnLayout from '../components/AboutTwoColumnLayout';
import Timeline from '../components/Timeline';
import AboutSecondaryTwoColumnLayout from '../components/AboutSecondTwoColumnLayout';
import AboutCenterAlignedButtons from '../components/AboutCenterAlignedButtons';
import AboutNewsletterForm from '../components/AboutNewsletterForm';
import Footer from '../components/MainFooter';
import AboutBanner from '../components/AboutBanner';
import AboutMainTwoUpFront from '../components/AboutMainTwoUpFront';
import CenterAlignedButtons from '../components/CenterAlignedButtons';

const MainStyle = {
  overflowX: 'hidden',
};

export default function AboutUs() {
  return (
    <div style={MainStyle}>
      <Header />
      <AboutBanner />
      <AboutMainTwoUpFront />
      <AboutSecondaryTwoColumnLayout />
      <CenterAlignedButtons />
      {/* <AboutNewsletterForm /> */}
      <Footer />
    </div>
  );
}
