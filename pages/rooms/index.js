import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import AboutCenterAlignedButtons from '../components/AboutCenterAlignedButtons';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/MainFooter';
import RoomsBanner from '../components/RoomsBanner';
import RoomsTile from '../components/RoomsTiles';
import { Container, Row, Col, Button } from 'reactstrap';

export default function Rooms() {
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
            font-size: 22px;
            margin-right: 100px;
            margin-left: 100px;
          }

          .supportingCopy {
            text-align: center;
            padding-top: 50px;
            font-family: avenir;
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
      <RoomsBanner />
      <Col>
        <Container>
          <div className="supportingCopy">
            <h2>Sponsor a room</h2>
            <div className="copy">
              Each room at our center has its own unique color theme. We invite
              you to explore our Amazon Wishlist for the specific room(s) you're
              interested in sponsoring. Your purchase will make a significant
              contribution to the operation of the Watch Me Grow Community
              Center. As a token of thanks, we'll prominently display your name
              or business in the room. Act now to make a lasting impact on our
              community.
            </div>
            <br></br>
          </div>
        </Container>
      </Col>
      <RoomsTile />

      <Footer />
    </div>
  );
}
