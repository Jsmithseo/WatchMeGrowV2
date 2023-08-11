  import React from 'react';
  import { Container, Row, Col } from 'reactstrap';

  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0"

  }

const footerLinks = {
  listStyle: "none",
  padding: "0",
  display: "flex",
  justifycontent: "flexEnd",
}

  function MainFooter() {
    return (
<footer style={footerStyle} className="government-footer">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <p>&copy; 2023 Watch Me Grow Inc</p>
      </div>
      <div className="col-md-6">
        <ul style={footerLinks} className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Accessibility</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    );
  };

  export default MainFooter;
  
  
  
  
  
  