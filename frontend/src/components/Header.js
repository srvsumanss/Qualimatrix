import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import control from "../Images/controls.png"
import '../components/Header.css'
function Header() {
  return (
    <>
     <Navbar className="bg-body-tertiary">
        <Container className='navbar-container'>
          <Navbar.Brand className='header' to="/"><span className='logo'>Q</span>uali<span className='logo'>M</span>atrix</Navbar.Brand>
          <Navbar.Brand className='' to="">Hire Resource   
          <span>
             <img src={control} style={{height:"30px",width:"30px",marginLeft:"15px"}} alt='pic.jpg' />
          </span>
          </Navbar.Brand>
          

        </Container>
      </Navbar>
  
     
     
      
  
    </>
  )
}

export default Header;