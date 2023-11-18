// CardWithForm.js
import React from 'react';
import { Card, Form, Button, CardBody, Container,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import phone from "../Images/phone-call.png";
import email from "../Images/email.png";
// import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';

const CardForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <>
    <Card style={{display:"flex",justifyContent:"center",alignItems:"center" ,border:"none"}}>
      <Card.Body>
        <Card.Title style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"40px"}}><h1>Card with Form</h1></Card.Title>
        <CardBody><p>It's good to reconsider decission while spending Money , But Too much Re-consideration can make your Business Suffer So fill the form ASAP !!</p></CardBody> 
      </Card.Body>
    </Card>

    <Container className='form-container' style={{display:"flex",gap:"20px"}}>
        <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
        
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
           
            <Form.Control type="email" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
           
           <Form.Control type="attachment" placeholder="Attachment" />
         </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
          </Form.Group>
          
        </Form>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
          </Form.Group>
          <Form.Check
        type="checkbox"
        label="I want to protect my data by signing on NDA"

      />
<br/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>

    </Container>

    <Container style={{height:"90px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"blue",borderRadius:"45px 45px 45px 45px"}}>
      
        <Col style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",color:"white",fontWeight:"bold"}}>
        <img style={{width:"35px",height:"35px"}} src={phone} alt='pic.jpg' />
        <p>+91 8103353297</p>
        </Col>
        <Col style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",color:"white",fontWeight:"bold"}}>
        <img style={{width:"35px",height:"35px"}}  src={email} alt='pic.jpg' />
        <p>Support@Qualimatrix.Tech</p>
        </Col>
       
    </Container>
    </>
  );
};

export default CardForm;
