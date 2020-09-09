import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-audio-player';





import { Input, Container, CardBody, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardImg, CardText, Row, Col, Modal, ModalBody, Spinner } from 'reactstrap';


import { example_response } from './../data'
import classnames from 'classnames';
import MapView from '../components/MapView';


const whiteCard = {
  backgroundColor: 'white',
  padding: '20px'
}
const buttonStyle = {
  backgroundColor: '#454F63',
  width: '80%',
  fontWeight: 'bold'

}
const buttonStyle2 = {
  backgroundColor: '#3BA935',
  width: '80%',
  fontWeight: 'bold'

}







function EventDetail(props) {


  const [detailSection, setDetailSection] = useState('Empty');
  const [activeTab, setActiveTab] = useState('1');
  const [activeTabModal, setActiveTabModal] = useState('1');
  const [loadingFinished, setLoadingFinished] = useState(true)
  const [location, setLocation] = useState(0)

  useEffect(() => {
    setLocation(props.detailSection);
    setIsButtonsShown({ id: props.detailSection.id, status: true })

  }, [props.detailSection])
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const toggleTabModal = tabModal => {
    if (activeTabModal !== tabModal) setActiveTabModal(tabModal);
  }




  const modalStyle = {
    padding: '5%'
  }



  const [modal, setModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [OKModal, setOKModal] = useState(false)

  const toggleModal = function () { setModal(!modal); }

  const toggleModalLoading = function () {
    setModalLoading(!modalLoading);
    setTimeout(() => {
      setOKModal(true)
    }, 2500);
  }

  const [isButtonsShown, setIsButtonsShown] = useState({ id: props.detailSection.id, status: true })

  function removeButtons() {
    setIsButtonsShown({ id: props.detailSection.id, status: false })
    // props.detailSection = 
  }

  const openImageModal = function (url) {

  }

  const [buttonResolvedState, setButtonResolvedState] = useState(true)
  const clickOnResolved = function (arg) {
    // console.log({arg})
    if (arg == 1) {

      setButtonResolvedState(!buttonResolvedState)
      // setbuttonAssetState(false)
    } else {
      // setButtonResolvedState(false)
      setbuttonAssetState(!buttonAssetState)
    }
  }

  const [buttonAssetState, setbuttonAssetState] = useState(true)

  const [resolutionText, setResolutionText] = useState()

  const examineText = (text) => {
    console.log({ len: text })
    if (text.length > 300) {
      console.log('err')

    }
    else {
      toggleModalLoading();
      toggleModal()
    }
    // setResolutionText(text.target.value)
    // setResolutionText(text.target.value)
    // toggleModal()
  }

  const setResolutionTextValue = (text) => {
    setResolutionText(text)
    console.log({ text, resolutionText })
  }


  const [name, setName] = useState('Sebastian');

  const buttonResolvedStyle = {
    color: 'red'
  }
  const data = example_response.data

  return (


    <>

      <Container style={whiteCard}>
        <br />
        {props.detailSection.details ? props.detailSection.details.find(x => x.title == 'Aksiyon').value == 'Aksiyon Gerekmiyor' || !isButtonsShown.status ? (<></>) : (
          <>
            <Row>


              <>
                <Col>
                  <Button style={buttonStyle} onClick={removeButtons}>No Action Needed</Button>{' '}
                </Col>
                <Col>
                  <Button style={buttonStyle2} onClick={toggleModal}>Take Action</Button>{' '}
                </Col>
              </>

            </Row>
            <br />
          </>
        ) : (<></>)}

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
                    <Col style={{ textAlign: 'left', margin: '2%'}}>
                      {props.detailSection.details && props.detailSection.details.map((detail, index) => (
                        <div key={index}>
                          <b>{detail.title}</b>

                          <p>{detail.value}</p>
                        </div>
                      ))}
                    </Col>
                  </Row>
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
              <div style={{ padding: '20px' }} >
                {props.detailSection.media ?
                  props.detailSection.media[0].type == 'image' ?
                    (<>

                      <CardImg top width="100%" src={props.detailSection.media[0].url} alt="No Image" onClick={console.log('OKKKKKKKKKKKKKKK')} />
                    </>
                    ) : props.detailSection.media[0].type == 'audio' ?
                      (<>
                        <AudioPlayer
                          src={props.detailSection.media[0].url}
                          autoPlay
                          controls
                        />

                      </>) : (<>
                        No Media Content
                    </>) : (<>
                    No Media Content
                    </>)}
              </div>

            </TabPane>
          </TabContent>
        </div>

      </Container>
      <Modal isOpen={modal} toggle={toggleModal} size="lg">

        <ModalBody style={modalStyle}>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTabModal === '1' })}
                onClick={() => { toggleTabModal('1'); }}
              >
                SELECT ACTION
          </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTabModal === '2' })}

              >
                TAKE ACTION
          </NavLink>
            </NavItem>

          </Nav>
          <TabContent activeTab={activeTabModal}>
            <TabPane tabId="1">
              <br />
              <Row>

                <Card tag="a" style={{
                  cursor: 'pointer',
                  width: '100%',
                  margin: '2%',
                  '&:hover': {
                    backgroundColor: 'grey'
                  }
                }}>
                  <div onClick={() => clickOnResolved(1)}>
                    <CardBody style={{ backgroundColor: buttonResolvedState ? 'white' : '#454F63' }}>
                      <CardTitle><b>Mark As Resolved</b></CardTitle>

                      <CardText>Mark this event as resolved and enter the details of the resolution</CardText>

                    </CardBody>
                  </div>
                </Card>

              </Row>
              <br />
              <Row> <Card tag="a" style={{
                cursor: 'pointer',
                width: '100%',
                margin: '2%',
                ':hover': {
                  backgroundColor: 'grey'
                }
              }}>

                <div onClick={(evt) => clickOnResolved(2)}>
                  <CardBody style={{ backgroundColor: buttonAssetState ? 'white' : '#454F63' }}>
                    <CardTitle><b>Change Asset</b></CardTitle>

                    <CardText>Change the asset with another one</CardText>

                  </CardBody>
                </div>
              </Card></Row>
              <br />
              <Row>
                <Col></Col>
                <Col><Button disabled={buttonAssetState && buttonResolvedState} style={buttonStyle2} onClick={() => { toggleTabModal('2'); }}>NEXT</Button></Col>
                <Col></Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">

              <br />



              <p>
                <b>Mark As Resolved</b>
                <br />

                    Mark this event as resolved and enter the details of the resolution
                    </p>


              <br />
              <b>Resolution Detail*</b>

              <Input type="textarea" name="text" id="exampleText" placeholder="Enter Resolution detail ..." maxLength="300" rows="4" cols="50" value={resolutionText}
                onChange={e => setResolutionText(e.target.value)} />


              <br />
              <Row>
                <Col></Col>

                <Col>   <Button style={buttonStyle} onClick={() => { toggleTabModal('1'); }}>Back</Button>{' '}</Col>
                <Col><Button style={buttonStyle2} onClick={(event) => examineText(resolutionText)}>Take Action</Button>{' '}</Col>

                <Col></Col>
              </Row>

            </TabPane>

          </TabContent>

        </ModalBody>

      </Modal>
      <Modal isOpen={modalLoading} toggle={toggleModalLoading} className="modal-dialog"  >
        <ModalBody style={{
          width: '400px', height: '400px'
        }}>


          <Col></Col>
          <Col>
            {modalLoading && !OKModal ? (
              <Spinner style={{ width: '7rem', height: '7rem', color: '#3BA935', fontSize: '2.5em', margin: '40% 50% 50% 50%' }} />)
              : (<div >
                <br />
                <CardImg style={{ width: '100px', height: '100px', marginLeft: '50%' }} src='/images/checked.png' ></CardImg>
                <br />
                <br />

                <center><h2 style={{ color: '#3DA836', width: '400px' }}>ACTION HAS BEEN TAKEN!</h2></center>

                <br />
                <p>you can see the action details from details tab</p>
              </div>)}

          </Col>
          <Col></Col>



        </ModalBody>
      </Modal>
    </>





  );
}

export default EventDetail;
