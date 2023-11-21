import React from "react";
import Navbar from "./Header";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "../components/Home.css";
import cartoonGirl from "../Images/cartoonGirl.png";
import Component3 from "../Images/Component3.png";
import Awards from "./Awards";
import Circle from "./Circle";
import Technology from "./Technology";
import CardForm from "./CardForm";
// import Patners from "./Patners";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Container fluid className="container-header">
        <Row className="home-background">
          <Col >
            <div className="" style={{ marginTop: "70px" }}>
              <Card.Body>
                <Card.Title
                  className="title-data"
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    fontFamily: "sans-serif",
                    padding:"20px"
                  }}
                >
                  <h1 className="title">
                    LEVERAGE THE POWER OF
                     QA SERVICES WITH
                  </h1>
                  <span className="testing">TESTING EXPERTS</span>
                </Card.Title>
                <Card.Text className="body-text">
                  Whether you require assistance with manual testing, test
                  automation, performance testing ,or any other element of
                  software testing,our team of expers has the knowledge and
                  experties to ensure that yourapplications meet the highest
                  quality standard
                </Card.Text>

                <Card.Body className="arrow-area">
                  <Col>
                    <img
                      src={Component3}
                      style={{
                        height: "55px",
                        width: "180px",
                        marginTop: "90px",
                        paddingLeft:"20px"
                      }}
                      alt="pic.jpg"
                    />
                  </Col>
                </Card.Body>
              </Card.Body>
            </div>
          </Col>
          {/* ********* */}
          <Col>
            <div style={{ border: "none" }}>
              <div>
                <img
                  src={cartoonGirl}
                  style={{ width: "300px", height: "500px", marginTop: "40px" }}
                  alt="pic.jpg"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Awards />
      <Circle />
      <Technology />
      {/* <Patners /> */}
      <CardForm />
      <Footer />
      {/* <Navigater/> */}
    </>
  );
}

export default Home;
