import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import AboutTwoColumnLayout from '../components/AboutTwoColumnLayout';
import Timeline from '../components/Timeline';
import AboutSecondaryTwoColumnLayout from '../components/AboutSecondTwoColumnLayout';
import AboutCenterAlignedButtons from '../components/AboutCenterAlignedButtons';
import AboutNewsletterForm from '../components/AboutNewsletterForm';
import Footer from '../components/MainFooter';
import NewsBanner from '../components/NewsBanner';

export default function Prgrams() {
  return (
    <div>
      <Header />
      <NewsBanner />
      <AboutTwoColumnLayout />
      <AboutCenterAlignedButtons />
      <AboutNewsletterForm />
      <Footer />
    </div>
  );
}
