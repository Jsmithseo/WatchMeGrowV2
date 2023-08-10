import React from 'react';
import Image from 'next/image';
import bannerImage from "../public/bannerImage.jpg";
import { Container, Row, Col, Button} from 'reactstrap';

const BannerStyles = {
  color: "#fff",
  textAlign: "center",
  height: "200x",
  backgroundColor: "#278754",

}

const bannerButton = {
  backgroundColor: "#fff",
  color: "#007bff",
  fontSize: "18px",
  padding: "5px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontFamily: "avenir",
  mariginTop: "10px"

}

const bannerCopy = {
  fontFamily: "avenir",
  alignItems: "center",    
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  paddingTop: "75px",
  paddingBottom: "99px",
  mariginLeft: "100px",
  fontSize: "22px",
  paddingLeft: "20px",
  paddingRight: "20px"

}



function Involved() {
  return (
    <Row>
      <div style={BannerStyles}>
        <Col md={{ size: 3, offset: 1}} style={bannerCopy}>
          <div>Get Involved</div>
        </Col>
        <Col>
      </Col>
   </div>
   </Row>


  );
};

export default Involved
