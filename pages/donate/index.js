import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import AboutCenterAlignedButtons from '../components/AboutCenterAlignedButtons';
import AboutNewsletterForm from '../components/AboutNewsletterForm';
import Footer from '../components/MainFooter';
import DonateBanner from '../components/DonateBanner'
import DonatationTile from '../components/DonationTiles'

export default function Donate()  {
return (
    <div>
        <Header/>
        <DonateBanner />
        <DonatationTile/>

        <Footer/>


     </div>

)

}