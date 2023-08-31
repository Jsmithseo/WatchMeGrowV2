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
import { Container } from 'reactstrap';

export default function Privacy() {
  return (
    <div>
      <style jsx>
        {`
          .copy {
            text-align: center;
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 20px;
          }
        `}
      </style>
      <Header />
      {/* <AboutCenterAlignedButtons /> */}
      <Container>
        <br></br>
        <center>
          <h1>Watch Me Grow Privacy Policy</h1>
        </center>
        <br></br>
        <center>
          <h2>General Overview</h2>
        </center>
        <div className="copy">
          This website is operated by Watch Me Grow Inc, a 501(c)(3) non-profit
          organization with its main office located at 1218 Monterey St Vallejo,
          CA 94590. This Privacy Policy pertains to the personal data collected
          when you visit our website, make a donation, register for an event,
          subscribe to our newsletter, or otherwise provide us with information
          through www.watchmegrowinc.com or any other domains controlled by
          Watch Me Grow Inc ("the Website").
        </div>
        <div className="copy">
          We prioritize the privacy of our visitors and employ rigorous measures
          to safeguard it. This Privacy Policy outlines how we collect and
          handle information about our online visitors.
        </div>
        <div className="copy">
          We prioritize the privacy of our visitors and employ rigorous measures
          to safeguard it. This Privacy Policy outlines how we collect and
          handle information about our online visitors.
        </div>
        <center>
          <h2>Information Collection</h2>
        </center>
        <center>
          <h4>Information You Provide Directly</h4>
        </center>
        <div className="copy">
          Watch Me Grow Inc gathers information in different ways across various
          parts of the Website. When you register, donate, or sign up for our
          programs and initiatives, we may collect personal information. This
          data collection also occurs if you contact us for inquiries, report
          issues, or fill out any online forms.
        </div>
        <center>
          <h4>Information Collected Automatically</h4>
        </center>
        <div className="copy">
          We may also use visitor data through Google Analytics, to analyze the
          number of visits, pages viewed, and similar metrics. Cookies may also
          be used to collect data without your express knowledge, helping us to
          improve our services and your experience.
        </div>
        <center>
          <h2>Data Usage</h2>
        </center>
        <center>
          <h4>How We Use Your Information</h4>
        </center>
        <div className="copy">
          Watch Me Grow Inc uses the data collected to improve its services,
          promotional efforts, and website content. Your personal information
          may be shared with third parties who assist us in these efforts.
          Additionally, the information may be used to inform you of new
          services, changes, or promotions.
        </div>
        <center>
          <h2>How We Share Information</h2>
        </center>
        <div className="copy">
          We may share your information with trusted third parties who perform
          tasks on our behalf, like financial institutions that process our
          credit card transactions. Your information may also be shared with
          other reputable non-profit organizations on a limited basis. If you
          wish to be excluded from such activities, please contact us at
          Jameelah@watchmegrowinc.com
        </div>
        <center>
          <h2>Data Integrity and Security</h2>
        </center>
        <div className="copy">
          To secure your personal information, Watch Me Grow employs
          commercially reasonable measures, including the use of Secure Socket
          Layer (SSL) Encryption.
        </div>
        <center>
          <h2>Your Rights</h2>
        </center>
        <div className="copy">You always have the right to:</div>
        <center>
          <li>Access your personal information</li>
          <li>Review your data</li>
          <li>Opt-out of communications</li>
          <li>Request data erasure</li>
        </center>
        <div className="copy">
          Please direct your questions or requests to
          Jameelah@watchmegrowinc.com
        </div>
        <center>
          <h2>Other Sites and Changes to the Policy</h2>
        </center>
        <div className="copy">
          This Privacy Policy applies only to this Website. Other linked
          websites may have different privacy policies, so we encourage you to
          read them. We reserve the right to revise this Privacy Policy at any
          time.
        </div>
        <center>
          <h2>Contact Information</h2>
        </center>
        <div className="copy">
          For any queries regarding this Privacy Policy, please contact us at:
          <br></br>
          <ul>Watch Me Grow Inc</ul>
          <ul>Attn: Legal Department</ul>
          <ul>1218 Monterey St Vallejo, CA 94590 </ul>
          Jameelah@watchmegrowinc.com
        </div>
      </Container>
      <AboutNewsletterForm />
      <Footer />
    </div>
  );
}
