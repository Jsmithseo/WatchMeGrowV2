import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import AboutCenterAlignedButtons from '../components/AboutCenterAlignedButtons';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/MainFooter';
import DonateBanner from '../components/DonateBanner';
import DonatationTile from '../components/DonationTiles';
import { Container, Row, Col, Button } from 'reactstrap';


export default function Donate() {
  return (
    <div className="mainStyle">
  <style jsx>

    {`

      .mainStyle {
        overflow-x: hidden;
      }

      .copy {
        text-align: center;
        font-family: avenir;
        padding-top: 50px;
        font-size: 22px;
        margin-right: 100px;
        margin-left: 100px;
  
      }

      @media (max-width: 600px) {
           
        .copy {
          margin-right: 5px;
          margin-left: 5px;
          padding-top: 20px;
          margin-bottom: -40px;

        }

      }
      
    `}
  </style>
      <Header />
      <DonateBanner />
      <Col>
        <div className="copy">
          Every day, with the help of supporters like you, we work tirelessly to
          make a lasting impact. Your generosity not only fuels our mission but
          also fosters a brighter future for those we serve.
        </div>
      </Col>
      <DonatationTile />
      <AboutCenterAlignedButtons/>
      <Footer />
    </div>
  );
}
