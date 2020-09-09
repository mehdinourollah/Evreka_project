import React, { useState, useEffect } from 'react';

import { Table } from 'reactstrap'




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
  backgroundColor: '#454F63'




}



const tableStyle = {
  height: '100px',
  height: '450px',
  overflowY: 'auto',
  overflowX: 'auto'

}

function Events(props) {


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
      <h1 className="character-style-1"> Events</h1>

      <br />
      <Table responsive hover>
        <tbody >
          {data.map(row =>
            <tr onClick={() => {
              setDetailSection(row);

            }}>

              <td>
                <th>
                  Date
            </th>
                {formatDate(row.details.find(x => x.format == 'date').value)}
              </td>
              <td>
                <th>
                  Type
            </th>
                {row.details.find(x => x.format == 'incident_type').value}
              </td>
              <td>
                <th>
                  Bin ID
            </th>
                {row.details.find(x => x.format == 'incident_type').value}
              </td>
              <td>
                <th>
                  Temperature
            </th>
                {row.details.find(x => x.format == 'incident_type').value}
              </td>
              <td>
                <th>
                  Action
            </th>
                {row.details.find(x => x.format == 'incident_type').value}
              </td>

            </tr>
          )}
        </tbody>
      </Table>




    </>





  );
}

export default Events;
