import React, { useState, useEffect } from 'react';
import { Container, Card, CardBody } from 'reactstrap';
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


function Content(props) {
  const [detailSection, setDetailSection] = useState('Empty');
  const [isDetailShown, setIsdetailShown] = useState(false)
  const [data, setData] = useState(example_response.data)
  const [selectedRow, setSelectedRow] = useState({})

  const setSelected = (row, index) => {
    // console.log({ row, index })
    setSelectedRow({ id: row.id })
  }


  const actionDictionary = [
    { tr: 'Aksiyon Gerekmiyor', en: 'No Action Needed' },
    { tr: 'Çözüm Bildir', en: 'Report a Solution' }, { tr: '-', en: '-' }
  ]

  function handleDataChange(newValue) {
    console.log({ newValue })
    setData(newValue)


  }


  useEffect(() => {
    // setData(data)
  }, [data])

  return (


    <>
      <Container className="content-area" fluid={true}>
        <Row >
          <Col xs="6" sm="8">

            {/* ////////////////////// */}

            <h1 className="character-style-1"> Events</h1>

            <br />
            <div  >



              <div id="dialog-window">

                <div id="scrollable-content">

                  {data.map((row, index) =>
                    <Card style={{ marginBottom: '10px' }}>
                      <CardBody key={index} onClick={() => {
                        setDetailSection(row);
                        setSelected(row, index)
                        setIsdetailShown(true)
                      }}
                        style={{
                          backgroundColor: selectedRow.id == row.id ? '#E9CF3088' : 'white',
                          borderLeft: '15px solid #E9CF30',

                        }}>
                        <Row>

                          <Col style={{ textAlign: 'left' }}>
                            <b>Date</b>
                            <br></br>
                            {formatDate(row.details.find(x => x.title == 'Tarih').value)}
                          </Col>
                          <Col style={{ textAlign: 'left' }}>
                            <b>Type</b>
                            <br></br>
                            {row.details.find(x => x.title == 'Tip').value}
                          </Col>
                          <Col style={{ textAlign: 'left' }}>
                            <b>Driver ID</b>
                            <br></br>
                            {row.id}
                          </Col>
                          <Col style={{ textAlign: 'left' }}>
                            <b>Category</b>
                            <br></br>
                            {row.details.find(x => x.title == 'Kategori').value}
                          </Col>
                          <Col style={{ textAlign: 'left' }}>
                            <b>Action</b>
                            <br></br>
                            {actionDictionary.find(x => x.tr == row.details.find(x => x.title == 'Aksiyon').value).en}
                          </Col>

                        </Row>


                      </CardBody>
                    </Card>

                  )}

                </div>

                <div id="footer">
                </div>

              </div>




              {/* <Table responsive hover >
                <tbody >
                  {data.map((row, index) =>
                    <tr key={index} onClick={() => {
                      setDetailSection(row);
                      setSelected(row, index)
                      setIsdetailShown(true)
                    }}
                      style={{
                        backgroundColor: selectedRow.id == row.id ? '#E9CF3088' : 'white',
                        borderLeft: '15px solid #E9CF30'

                      }}>

                      {row.details.map((detail, index) =>
                        (

                          <td key={index} style={{ marginBottom: '10px' }}>
                            <b>{detail.title}</b>
                            <br></br>
                            {detail.title == 'Tarih' ? (<>
                              {formatDate(detail.value)}
                            </>) : (
                                <>                     {detail.value}</>
                              )}
                          </td>
                        ))}
                    </tr>
                  )}
                </tbody>
              </Table> */}

            </div>
          </Col>
          <Col sm="4">
            <h1 className="character-style-1">Event Details</h1>
            <br />
            {isDetailShown && (
              <EventDetail data={data} onChange={handleDataChange} detailSection={detailSection} />
            )}
          </Col>
        </Row>

      </Container>
    </>






  );
}

export default Content;
