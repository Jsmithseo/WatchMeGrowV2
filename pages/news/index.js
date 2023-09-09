import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import AboutTwoColumnLayout from '../components/AboutTwoColumnLayout';
import Timeline from '../components/Timeline';
import AboutSecondaryTwoColumnLayout from '../components/AboutSecondTwoColumnLayout';
import AboutCenterAlignedButtons from '../components/AboutCenterAlignedButtons';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/MainFooter';
import NewsBanner from '../components/NewsBanner';
import { Container } from 'reactstrap';

export default function News() {
  return (
    <div className="mainStyle">
      <style jsx>
        {`
          .mainStyle {
            overflow: hidden;
          }

          .copy {
            text-align: center;
            margin-top: 50px;
            margin-bottom: 50px;
            font-size: 20px;
          }
        `}
      </style>
      <Header />
      <NewsBanner />
      {/* <AboutCenterAlignedButtons /> */}
      <Container>
        <div className="copy">
          Welcome to the Newsletter Updates section of Watch Me Grow, your
          trusted source for information and advocacy on Adverse Childhood
          Experiences (ACEs). We understand the crucial role that awareness and
          education play in preventing and mitigating the impact of ACEs. That's
          why we're delighted to invite you to become a part of our committed
          community. By subscribing to our newsletter, you're taking an
          important step in fostering resilience and facilitating healing for
          affected children and families<br></br>
          <br></br>
          Our monthly newsletter is more than just a compilation of
          articles—it's a beacon of hope and a resource kit rolled into one.
          You'll gain access to enlightening studies, hear from experts in the
          field, and learn about the meaningful impact of our outreach programs.
          Moreover, you’ll be the first to know about upcoming events,
          fundraising opportunities, and how you can get involved directly to
          make a difference. Subscribe today, and be a part of a movement that
          aims to transform lives through ACEs awareness.
        </div>
      </Container>
      <div style={{marginBottom: "7em", textAlign: "center"}}>
      <NewsletterForm />
      </div>
      <Footer />
    </div>
  );
}
