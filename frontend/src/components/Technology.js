import React from 'react'
import {Container, Row,Col} from "react-bootstrap"
import '../components/Header.css'

function Technology() {
  return (
    <>
    <Container style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
      <Row> <h1>TECHNOLOGY</h1></Row>
      </Container>
      <Container className='technology-p'>
      <Row><p> lorem Ipsum as their default model text, and a search for 'lorem ipsum'</p></Row>
    </Container>
    <Container>
      <Row style={{border:"1px solid black" , borderRadius:"80px 80px 80px 80px",backgroundColor:"rgb(230, 237, 244)",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Col>QA Tech</Col>
        <Col>FrontEnd</Col>
        <Col>Back End</Col>
        <Col>Mobile App</Col>
        <Col>UI/UX</Col>
      </Row>
    </Container>
    
    </>
  )
}

export default Technology