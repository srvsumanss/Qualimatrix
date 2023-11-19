import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Component4 from "../Images/Component4.png"
import qualimatrix from "../Images/qualimatrix.png"
import '../components/Header.css'
function Header() {
  return (
    <>
     <Navbar>
        <Container fluid className='navbar-container'>
          <Navbar.Brand className='header' to="/">
            <img style={{width:"240px",height:"80px"}}  src={qualimatrix} alt='/'/>
          </Navbar.Brand>
          <Navbar.Brand to="">Hire Resource   
          <span >
             <img className='toggler' style={{height:"50px",weight:"50px"}} src={Component4} alt='pic.jpg'/>
          </span>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}
export default Header;