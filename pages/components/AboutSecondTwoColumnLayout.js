import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardText,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jameelah from '../public/Jameelah1.jpg';
import Image from 'next/image';

const mainStyle = {
  paddingBottom: '50px',
  backgroundColor: '#F5F0EF',
  fontFamily: 'avenir',
};

const imageStyle = {
  borderRadius: '5%',
};

const photoStyle =  {
  paddingTop: '5%',
}

const titleStyle = {
  textAlign: "center"
}

function TwoColumnLayout() {
  return (
    <div style={mainStyle}>
      <Container>
        <Row>
          <Col md={{ size: 2, offset: 2 }} xs={{ size: 6, offset: 2 }}>
            {/* <Image
              style={imageStyle}
              src={Jameelah}
              alt="Description of Image"
              width={300}
              height={300}
            /> */}
          </Col>
          <Col md="12">
            <div style={photoStyle}>
              <h3 style={titleStyle}>About The Gardener</h3>
              <center style={{ paddingTop: '30px', paddingBottom: '30px'}}>
              <Image
              style={imageStyle}
              src={Jameelah}
              alt="Description of Image"
              width={300}
              height={300}
            />
              </center>
           
              <div>
                
                Jameelah Hanif was born & raised in Oakland, Ca. She has been a
                resident of Vallejo since 2001. She is a single mother of her
                amazing 10 year old son, Brandon Johnson. Jameelah Hanif has
                always been inspired to one day open Watch Me Grow Community
                Development Center, where her organization will provide quality
                child care program during the day, an after school program for
                the youth, along with providing educational opportunities for
                parents and entire community that will contribute to them
                thriving. She found this as a way to strengthen the child,
                family and community Going after her dream, Ms.Hanif first step
                was establishing Watch Me Grow Child Care. In 2012, Ms.Hanif
                established Watch Me Grow Child in the City of Vallejo, where
                she's had great partnerships with organization Child Start, Inc.
                In 2016, as a single mother and successful business owner,
                Ms.Hanif decided to return to school to finish what she started.
                At 34 years old, Jameelah returned to Contra Costa College to
                play her second year of basketball and obtain her A.S. In Child
                Development & Family Services with specializations in Infant
                toddler care & development and violence intervention and
                counseling.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TwoColumnLayout;
