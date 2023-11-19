import React from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/iso.jpeg";
import topTesting from "../Images/topTesting.png";
import esc from "../Images/esc-member.png";
import "../components/Header.css";

function Awards() {
  return (
    <Container className="awards">
      <Row  className="row-award">
        <Col 
          style={{
            backgroundColor: "#33C1FE",
            color: "white",
            display: "flex",
            alignItems: "center,",
            justifyContent: "center",
           
             borderRadius: "0px 80px 80px 0px"

          }}
        >
          <h1 style={{marginLeft:"20px"}}>AWARDS & RECOGNITION</h1>
        </Col>
        <Col>
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img className="w-10" src={logo} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-10" src={topTesting} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-10" src={esc} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Awards;
