import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Table, Row, Col, Button } from 'reactstrap';

import { example_response } from './../data'
import EventDetail from './EventDetail'


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

            {/* ////////////////////// */}

            <h1 className="character-style-1"> Events</h1>

            <br />
            <div className='flex-vertical'>
              <Table responsive hover className='flags-table'>
                <tbody >
                  {data.map((row, index) =>
                    <tr key={index} onClick={() => {
                      setDetailSection(row);

                    }}>

                      {row.details.map((detail, index) =>
                        (

                          <td key={index}>
                            <b>{detail.title}</b>
                            <br></br>
                            {/* {formatDate(row.details.find(x => x.format == 'date').value)} */}
                            {detail.value}
                          </td>
                        ))}

                      
                        {/* <b>  Type</b>
                        <br></br>

                        {row.details.find(x => x.format == 'incident_type').value}
                      </td>
                      <td>
                        <b>Bin ID</b>
                        <br></br>

                        {row.details.find(x => x.format == 'incident_type').value}
                      </td>
                      <td>
                        <b>Temperature</b>
                        <br></br>


                        {row.details.find(x => x.format == 'incident_type').value}
                      </td>
                      <td>
                        <th>
                          Action
      </th>
                        {row.details.find(x => x.format == 'incident_type').value}
                      </td> */}

                    </tr>
                  )}
                </tbody>
              </Table>
              {/* ///////////////////////////// */}
            </div>
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
