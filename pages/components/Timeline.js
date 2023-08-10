import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

function Timeline() {
  const timelineData = [
    {
      title: 'Event 1',
      description: 'Description for event 1'
    },
    {
      title: 'Event 2',
      description: 'Description for event 2'
    },
    {
      title: 'Event 3',
      description: 'Description for event 3'
    },
  ];


  const MainStyle = {
    padding: "20px"
  }


  const timelineItem = {
    marginBottom: "20px",
    position: "relative"

  }

  const timelineCard = {
    borderLeft: "3px solid #007bff",
    borderRadius: "0"
  

  }
  



  return (

    <div style={MainStyle} className="timeline-container">
      {timelineData.map((event, index) => (
        <div  style={timelineItem} className="timeline-item" key={index}>
          <Row>
            <Col xs="2">
              <div  className="timeline-icon"></div>
            </Col>
            <Col xs="10">
              <Card className="timeline-card">
                <CardBody>
                  <CardTitle tag="h5">{event.title}</CardTitle>
                  <CardText>{event.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Timeline
