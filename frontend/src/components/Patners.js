// CardHighlight.js
import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardHighlight = () => {
  // Assuming your images are in the 'images' folder
  const importAllImages = (r) => r.keys().map(r);
  const images = importAllImages(require.context("../Images/", false, /\.(png|jpe?g|svg)$/));

  const cardData = [
    { id: 1, title: 'Card 1', content: 'Some content for Card 1.' },
    { id: 2, title: 'Card 2', content: 'Some content for Card 2.' },
    { id: 3, title: 'Card 3', content: 'Some content for Card 3.' },
    { id: 4, title: 'Card 4', content: 'Some content for Card 4.' },
    { id: 5, title: 'Card 5', content: 'Some content for Card 5.' },
    { id: 6, title: 'Card 6', content: 'Some content for Card 6.' },
    { id: 7, title: 'Card 7', content: 'Some content for Card 7.' },
    { id: 8, title: 'Card 8', content: 'Some content for Card 8.' },
    { id: 9, title: 'Card 9', content: 'Some content for Card 9.' },
    // Add more cards as needed
  ];

  return (
   <Container className='patners'>
     <Row xs={1} md={3} className="g-4">
      {cardData.map((card, index) => (
        <Col key={card.id}>
          <Card className="highlightable">
            <Card.Img variant="top" src={images[index]} alt={card.title} />
          </Card>
        </Col>
      ))}
    </Row>
   </Container>
  );
};

export default CardHighlight;