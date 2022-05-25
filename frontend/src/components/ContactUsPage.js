import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ContactUsPage = () => {
  return (
    <div>ContactUsPage
        
     <div className='mt-5'>
     <div className='container mt-5'>
         <br/><br/><br/><br/>
         <div className="row justify-content-sm-center mb-5 pt-5">
      <div className="col-sm-25 shadow round pb-3">
         <h1 className="text-center pt-3 text-secondary">Contact Us</h1>
         <h3>Have any Questions...?</h3>
    <div class="d-flex justify-content-around">
        
     <Card border="danger" style={{ width: '18rem' }}>
        <Card.Header>Network failuer ?</Card.Header>
        <Card.Body>
        <Card.Title>Shamal Perera</Card.Title>
        <Card.Text>
        <p> <b>  Stitch Wave </b></p>
            <p>Head technician</p>
            <p>Contact Head technician through this details.Only in Network failuer!!</p>
            <p><i class="fa-solid fa-phone"></i> Tel : 071-8655423</p>
            <a href='mailto:teamflex@gmail.com'><Button variant="danger"><i class="fa-solid fa-envelope"></i> Send an Email</Button>{' '}</a>
        </Card.Text>
        </Card.Body>
    </Card>
   
    <Card border="success" style={{ width: '18rem' }}>
        <Card.Header>Important Thing  ?</Card.Header>
        <Card.Body>
        <Card.Title>Devin Bimsara</Card.Title>
        <Card.Text>
            <p> <b>  Stitch Wave </b></p>
            <p>Managing Derector</p>
            <p>Contact managing director through this details.Only important things!!</p>
            <p><i class="fa-solid fa-phone"></i> Tel : 071-2225433</p>
            <a href='mailto:teamflex@gmail.com'> <Button variant="success"><i class="fa-solid fa-envelope"></i> Send an Email</Button>{' '}</a>
        </Card.Text>
        </Card.Body>
    </Card>
  
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Need To Develop ?</Card.Header>
        <Card.Body>
        <Card.Title>Development Team</Card.Title>
        <Card.Text>
            <p><b>  Team Flex  </b> </p>
            <p>System Admin</p>
            <p>If you facing any system dificulties contact me through below details!!</p>
            <p><i class="fa-solid fa-phone"></i> Tel : 076-9876554</p>
           <a href='mailto:teamflex@gmail.com'> <Button variant="primary"><i class="fa-solid fa-envelope"></i> Send an Email</Button>{' '} </a>
        </Card.Text>
        </Card.Body>
    </Card>
    </div>
    </div>
    </div>
   
    </div>
    </div>
    </div>
  )
}

export default ContactUsPage