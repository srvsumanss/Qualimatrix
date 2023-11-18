import React from 'react'
import { CardHeader, Container,Card ,Col,Row, CardTitle, CardText,Form} from 'react-bootstrap'
import '../components/Header.css'
import facebook from "../Images/facebook.png"
import instagram from "../Images/instagram.png"
import twitter from "../Images/twitter.png"
import linkedin from "../Images/linkedin-logo.png"

function Footer() {
  return (
   <>
   <Container style={{backgroundColor:"rgb(230, 237, 244)"}}>
   <Container>
    <Card className="footer">
        <CardHeader style={{border:"none",marginTop:"20px"}} ><h1>QualiMatrix</h1></CardHeader>
    </Card>
   </Container>
   <Container>
    <Row className="grid-with-vertical-line">
        <Col>
        <Card className='footerData'>
            <CardTitle>Company</CardTitle>
            <CardText>About</CardText>
            <CardText>Contact US</CardText>
            <CardText>Privacy Policy</CardText>         
        </Card>       
        </Col>
        <Col>
        <Card className='footerData'>
            <CardTitle>FEATURES</CardTitle>
            <CardText>Blogs</CardText>
            <CardText>Career</CardText>
            <CardText>Case Study</CardText>            
        </Card>
        </Col>
        <Col>
        <Card className='footerData'>
            <CardTitle>CARRIER</CardTitle>
            <CardText>Fron-End Devops</CardText>
            <CardText>Graphics Designer</CardText>
            <CardText>Digital Marketing</CardText>
            
        </Card>
        </Col>
        <Col>
        <Card className='footerData'>
            <CardTitle>NEWSLETTER</CardTitle>
            <CardText>Hey Technocart ! Drop yourEmail here !</CardText>
            
            <Form.Group className="mb-3"  controlId="formEmail">
           
            <Form.Control type="email" style={{borderRadius:"80px 80px 80px 80px"}}  placeholder="Email" />
          </Form.Group>
            
        </Card>
        </Col>
    </Row>
   </Container>
   <Container className='social-media' style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"30px" }}>
    <img src={facebook} alt='pic.jpg' />
    <img src={instagram} alt='pic.jpg' />
    <img src={twitter} alt='pic.jpg' />
    <img src={linkedin} alt='pic.jpg' />
   </Container>
   </Container>

   <Container style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}><p>@ All Right Reserved QualiMatrix</p></Container>
 
   </>
  )
}

export default Footer