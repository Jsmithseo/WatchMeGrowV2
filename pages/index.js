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
import Popup from './components/Popup';
import Script from 'next/script'



export default function Index() {
  const MainStyle = {
    overflowX: 'hidden',
  };
  return (
    <div style={MainStyle}>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-XEVZD62TYP" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-XEVZD62TYP');
        `}
      </Script>
      <Header />
      <Banner />
      <MainTwoUpFront />
      <CenterAlignedButtons />
      <ThreeColumnLayout />
      <SecondMainTwoColumnLayout />
      <MainFourColumnLayout />
      <MainFooter />
      <Popup />
    </div>
  );
}
