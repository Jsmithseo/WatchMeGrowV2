import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import AboutTwoColumnLayout from '../components/AboutTwoColumnLayout';
import Timeline from '../components/Timeline';
import AboutSecondaryTwoColumnLayout from '../components/AboutSecondTwoColumnLayout';
import AboutCenterAlignedButtons from '../components/AboutCenterAlignedButtons';
import AboutNewsletterForm from '../components/AboutNewsletterForm'
import Footer from '../components/MainFooter'
import InvolvedBanner from '../components/InvolvedBanner';
import VolunteerForm from '../components/Volunteer';

export default function Involved()  {
return (
    <div>
        <Header/>
        <InvolvedBanner/>
        {/* <AboutTwoColumnLayout /> */}
        <h1>Volunteer with Us!</h1>
        <p>We appreciate your interest in volunteering. Please fill out the form below:</p>
        <VolunteerForm />
        <Footer/>
  


     </div>

)

}


