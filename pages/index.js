import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import MainFooter from './components/MainFooter';
import 'bootstrap/dist/css/bootstrap.css';
import MainTwoUpFront from './components/MainTwoUpFront';
import CenterAlignedButtons from './components/CenterAlignedButtons';
import ThreeColumnLayout from './components/ThreeColumnLayout';
import SecondMainTwoColumnLayout from './components/SecondMainTwoColumnLayout';
import MainFourColumnLayout from './components/MainFourColumnLayout';
import AboutCenterAlignedButtons from './components/AboutCenterAlignedButtons';

export default function Index() {
  const MainStyle = {
    overflowX: 'hidden',
  };
  return (
    <div style={MainStyle}>
      <Header />
      <Banner />
      <MainTwoUpFront />
      <CenterAlignedButtons />
      <ThreeColumnLayout />
      <SecondMainTwoColumnLayout />
      <MainFourColumnLayout />
      <MainFooter />
    </div>
  );
}
