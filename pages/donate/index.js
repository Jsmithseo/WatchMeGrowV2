import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import AboutCenterAlignedButtons from '../components/AboutCenterAlignedButtons';
import AboutNewsletterForm from '../components/AboutNewsletterForm';
import Footer from '../components/MainFooter';
import DonateBanner from '../components/DonateBanner';
import DonatationTile from '../components/DonationTiles';
import { Container, Row, Col, Button } from 'reactstrap';

export default function Donate() {
  return (
    <div>
      <Header />
      <DonateBanner />
      <Col>
        <div>
          Every day, with the help of supporters like you, we work tirelessly to
          make a lasting impact. Your generosity not only fuels our mission but
          also fosters a brighter future for those we serve.
        </div>
      </Col>
      <DonatationTile />

      <Footer />
    </div>
  );
}
