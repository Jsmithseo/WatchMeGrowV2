import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import ContactForm from '../components/ContactUsForm'
import AboutNewsletterForm from '../components/AboutNewsletterForm';
import Footer from '../components/MainFooter';
import ContactUsBanner from '../components/ContactUsBanner';
import { Container } from 'reactstrap';

export default function ContactUs() {
  return (
    <div>
      <style jsx>
        {`
          .copy {
            text-align: center;
            margin-top: 50px;
            margin-bottom: 50px;
            font-size: 20px;
          }
        `}
      </style>
      <Header />
      <ContactUsBanner />
      {/* <AboutCenterAlignedButtons /> */}
      <ContactForm/>
      <Footer />
    </div>
  );
}
