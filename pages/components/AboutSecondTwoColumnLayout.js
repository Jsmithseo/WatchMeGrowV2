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

const photoStyle = {
  paddingTop: '5%',
};

const titleStyle = {
  textAlign: 'center',
};

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
              <center style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Image
                  style={imageStyle}
                  src={Jameelah}
                  alt="Description of Image"
                  width={300}
                  height={300}
                />
              </center>

              <div>
              Jameelah has been a resident of Vallejo since 2001. She is a
              single mother of her amazing 10 year old son. Born and raised in
              Oakland, Ca, and experiencing what’s it’s like to grow up in a
              household and community that was trauma filled as the results of
              ACEs (Adverse Childhood Experiences). Ms.Hanif is serious about
              creating safe, healthy, and nurturing environments and communities
              where children can live, learn and play in without fear. She is in
              process of opening Watch Me Grow Community Center, where her
              founding organization, Watch Me Grow, Inc. and partners will
              provide various resources, workshops and job trainings during the
              day and after-school positive youth development programs. This
              will be an establishment that provide wrap-around services for the
              entire community that will contribute to help them from surviving
              to thriving.
              </div>
              <br></br>
              <center><h5>Ms.Hanif Qualifications:</h5>
            <ul>Parent Leader</ul>
            <ul>Emerge California Alumna</ul>
            <ul>Leadership Vallejo Alumna</ul>
            <ul>Licensed Child Care Provider</ul>
            <ul>Certified Positive Parenting Program Facilitator </ul>
            <ul>Emotional Intelligence Consultant</ul>
            <ul>Parent Leadership Training Facilitator </ul>
            <ul>Alternative To Violence Facilitator </ul>
            <ul>Certified Trauma Support Specialist </ul>
            </center>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TwoColumnLayout;
