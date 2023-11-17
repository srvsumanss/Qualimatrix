import React from 'react'
import Navbar from './Header'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../components/Header.css'
import cartoon from "../Images/cartoon.jpg"
import arrow from "../Images/circle-arrows.png"
import Awards from './Awards';
import Circle from './Circle';
import Technology from './Technology';
import Navigater from './Navigater';

function Home() {
  return (
  <>
  <Navbar/>

  <Container className='container-header'>
      <Row>
        <Col>
        <Card style={{marginTop:"40px",border:"none"}}>
      <Card.Body>
        <Card.Title className='title-data' style={{fontWeight:"bold",fontSize:"40px",fontFamily:"sans-serif" }} ><h1 className='title'>LEVERAGE THE POWER OF QA SERVICES WITH</h1>  <span className='testing'>TESTING EXPERTS</span></Card.Title>
        <Card.Text>
         Whether you require assistance with manual testing, test automation,
         performance testing ,or any other element of software testing,our team of expers has the knowledge and experties to ensure that yourapplications meet the highest quality standard
        </Card.Text>

        <Card.Body className='arrow-area'>
          <Col>
          <img src={arrow} style={{height:"30px",width:"30px"}} alt='pic.jpg'/>
          <Button variant="light">Free Consultation</Button>

          </Col>

        </Card.Body>
      
      </Card.Body>
      </Card> 
        </Col>
        {/* ********* */}
        <Col>
        <Card style={{border:"none"}} >
        <Card.Body>
          <img src={cartoon} style={{width:"100%",height:"100%"}} alt='pic.jpg' />
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
    <Awards/>
    <Circle/>
    <Technology/>
    <Navigater/>
  </>
  )
}

export default Home