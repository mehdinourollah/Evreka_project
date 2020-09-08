import React, { useState, useEffect } from 'react';



import { Container, CardBody } from 'reactstrap';

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardImg, CardText, Row, Col, Media } from 'reactstrap';
import { example_response } from './../data'
import classnames from 'classnames';
import MapView from '../components/MapView';


let markerData = function (location) {
  return {
    "venues": [
      {
        "description": "TEST",
        "name": "NAME",
        "geometry": [
          location.latitude,
          location.longitude
        ]
      },
    ]
  }
}

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  var time = new Date(date).toISOString().split('T')[1].split('.')[0].split(':')

  return [day, month, year].join('.') + ' ' + time[0] + ':' + time[1];
}


const whiteCard = {
  backgroundColor: 'white'
}
const buttonStyle = {
  backgroundColor: '#454F63',
  width: '100%'

}
const buttonStyle2 = {
  backgroundColor: '#3BA935',
  width: '100%'

}

function EventDetail(props) {


  const [detailSection, setDetailSection] = useState('Empty');
  const [activeTab, setActiveTab] = useState('1');
  const [location, setLocation] = useState(0)

  useEffect(() => {
    setLocation(props.detailSection);

  })
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const data = example_response.data

  return (


    <>
      <h1 className="character-style-1">Event Details</h1>
      <br />
      <Container style={whiteCard}>
        <br />
        <Row>
          <Col>
            <Button style={buttonStyle}>No Action Needed</Button>{' '}
          </Col>
          <Col>
            <Button style={buttonStyle2}>Take Action</Button>{' '}
          </Col>
        </Row>
<br />
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                DETAILS
          </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                LOCATION
          </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
              >
                MEDIA
          </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Row>
                    <Col>
                    </Col>
                  </Row>
                  <h4>Tab 1 Contents</h4>
                  {JSON.stringify(props.detailSection.details)}
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">

              <CardBody>
                {location ?
                  <MapView data={location} />
                  : location}
              </CardBody>
            </TabPane>
            <TabPane tabId="3">
              <CardImg top width="100%" src="/images/garbage-bin.png" alt="garbage bin" />


            </TabPane>
          </TabContent>
        </div>

      </Container>
    </>





  );
}

export default EventDetail;
