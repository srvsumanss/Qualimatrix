// src/RotatingCircle.js
import React from 'react';
import '../components/Header.css'
import { Container,Row } from 'react-bootstrap';
import qa from "../Images/car.png"
import girl from "../Images/girl.jpeg"


const Circle = () => {
  return (
    <>
<Container className='our-services'>
    <Row> <h1>Our Services</h1></Row>
</Container>

<Container>
<div className="rotating-circle">
      <div className="dot">
        <img style={{height:"140px",width:"140px"}} src={girl}  alt='girl.jpg'/>
      </div>
      <h3>QA Series</h3>
      <div className="element" id="element1">
        <img src={qa} alt='pic.jpg' />
      </div>
      <h3>Mobile App</h3>
      <div className="element" id="element2">
      <img src={qa} alt='pic.jpg' />
      </div>
      <h3>UI/UX</h3>
      <div className="element" id="element3">
      <img src={qa} alt='pic.jpg' />
      </div>
      <h3>CYBER SECURITY</h3>
      <div className="element" id="element4">
      <img src={qa} alt='pic.jpg' />
      </div>
      <h3>WEB APP</h3>
      <div className="element" id="element5">
      <img src={qa} alt='pic.jpg' />
      </div>
      <div className="element" id="element6">
      <img src={qa} alt='pic.jpg' />
      </div>
    </div>

</Container>
   
    </>
  );
};

export default Circle;
