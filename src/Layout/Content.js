import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Table, Row, Col, Button } from 'reactstrap';

import { example_response } from './../data'
import EventDetail from './EventDetail'
import Events from './Events'

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
const divStyle = {
  backgroundColor: 'white'
};
const eventStyle = {
  margin: '20px',
  backgroundColor: 'white'

}
const rowStyle = {
  backgroundColor: 'white',
  border: 'none',
  tr: {
    border: 'none'
  },
  '&:hover': {
    backgroundColor: 'yellow'
  }

}
const buttonStyle = {
  backgroundColor: '#454F63'
}
function Content(props) {
  const [detailSection, setDetailSection] = useState('Empty');

  const data = example_response.data

  return (


    <>
      <Container className="content-area" fluid={true}>
        <Row >
          <Col xs="6" sm="8">

         <Events />

          </Col>
          <Col sm="4">
            <EventDetail detailSection={detailSection} />
          </Col>
        </Row>

      </Container>
    </>

  




  );
}

export default Content;
