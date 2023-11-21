import React, { useState, useTransition } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Techo.css";
import image1 from "./TechnologyImage/image1.png";
import image2 from "./TechnologyImage/image2.png";
import image3 from "./TechnologyImage/image3.png";
import image4 from "./TechnologyImage/image4.png";
import image5 from "./TechnologyImage/image5.png";
import image6 from "./TechnologyImage/image6.png";
import image7 from "./TechnologyImage/image7.png";
import image8 from "./TechnologyImage/image8.png";
import image9 from "./TechnologyImage/image9.png";
import image10 from "./TechnologyImage/image10.png";
import image11 from "./TechnologyImage/iamge11.png";
import image12 from "./TechnologyImage/image12.png";
import image13 from "./TechnologyImage/image10.png";
import image14 from "./TechnologyImage/image2.png";
import image15 from "./TechnologyImage/image2.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];


function Technology() {
  const [selectedCol, setSelectedCol] = useState(null);
  const [clickedItems, setClickedItems] = useState([]);
  const [hover, sethover] = useState(false)
  const [selectedIndex ,setSelectedIndex] = useState(-1);

  const toggleColor = (index) => {
    setClickedItems((prevClickedItems) => {
      const newClickedItems = [...prevClickedItems];
      newClickedItems[index] = !newClickedItems[index];
      return newClickedItems;
    });
  };
  const handleColClick = (index) => {
    setSelectedCol(index);
  };
  const [hoveredItems, setHoveredItems] = useState([]);


  const GridItem = ({ imageUrl, onClick, onHover, onHoverEnd, isClicked, index }) => (
    <div
      className={`grid-item ${isClicked ? "clicked" : ""}`}
      onClick={onClick}
      onMouseEnter={() => setSelectedIndex(index) }
      onMouseLeave={() => setSelectedIndex(index)}
    >
      <img
        src={imageUrl}
        alt="Grid Item"
        style={{
          filter: isClicked ? "grayscale(0%)" : "grayscale(100%)",
          transform:  selectedIndex === index ? "scale(1.5)" : "scale(1.0)",
          transition: "transform 1.2s ease", // Add a smooth transition
          cursor:"pointer"
        }}
      />
    </div>
  );

  // const handleHover = (index) => {
  //   setHoveredItems((prevHoveredItems) => {
  //     const newHoveredItems = [...prevHoveredItems];
  //     newHoveredItems[index] = true;
  //     return newHoveredItems;
  //   });
  // };
  const handleHover = (index) => {
    setHoveredItems((prevHoveredItems) => {
      const newHoveredItems = [...prevHoveredItems];
      newHoveredItems[index] = true;
      // alert(newHoveredItems)
      return newHoveredItems;
    });
  };

  const handleHoverEnd = (index) => {
    setHoveredItems((prevHoveredItems) => {
      const newHoveredItems = [...prevHoveredItems];
      newHoveredItems[index] = false;
      return newHoveredItems;
    });
  };
  return (
    <>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row>
          {" "}
          <div className="technology-div">TECHNOLOGY</div>
        </Row>
      </Container>
      <Container className="technology-p">
        <Row>
          <p>
            {" "}
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </Row>
      </Container>
      {/* <Container>
      <Row style={{border:"1px solid black" , borderRadius:"80px 80px 80px 80px",backgroundColor:"rgb(230, 237, 244)",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Col>QA Tech</Col>
        <Col>FrontEnd</Col>
        <Col>Back End</Col>
        <Col>Mobile App</Col>
        <Col>UI/UX</Col>
      </Row>
    </Container> */}
      <Container>
        <Row className="ContainerRow">
          <Col
            onClick={() => handleColClick(0)}
            className={`CustomCol ${selectedCol === 0 ? "Selected" : ""}`}
          >
            QA Tech
          </Col>
          <Col
            onClick={() => handleColClick(1)}
            className={`CustomCol ${selectedCol === 1 ? "Selected" : ""}`}
          >
            FrontEnd
          </Col>
          <Col
            onClick={() => handleColClick(2)}
            className={`CustomCol ${selectedCol === 2 ? "Selected" : ""}`}
          >
            Back End
          </Col>
          <Col
            onClick={() => handleColClick(3)}
            className={`CustomCol ${selectedCol === 3 ? "Selected" : ""}`}
          >
            Mobile App
          </Col>
          <Col
            onClick={() => handleColClick(4)}
            className={`CustomCol ${selectedCol === 4 ? "Selected" : ""}`}
          >
            UI/UX
          </Col>
        </Row>
      </Container>

      {/* <Container className="grid-container">
      {images.map((imageUrl, index) => (
        <GridItem
          key={index}
          imageUrl={imageUrl}
          onClick={() => toggleColor(index)}
          isClicked={clickedItems[index]}
        />
      ))}
    </Container> */}
      <Container className="grid-container">
        {images.map((imageUrl, index) => (
          <GridItem
            key={index}
            imageUrl={imageUrl}
            onClick={() => toggleColor(index)}
            // onHover={() => handleHover(index)}
            onHoverEnd={() => handleHoverEnd(index)}
            isClicked={clickedItems[index]}
            index = {index}
          />
        ))}
      </Container>
    </>
  );
}

export default Technology;