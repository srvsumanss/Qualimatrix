import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigater() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">QA Tech</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Frontend</Nav.Link>
            <Nav.Link href="">BAckend</Nav.Link>
            <Nav.Link href="">Mobile App</Nav.Link>
            <Nav.Link href="">UI/Ux</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigater