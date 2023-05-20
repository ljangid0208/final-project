import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { serviceData } from '../data/data'
import {Card ,Button}from 'react-bootstrap';
import './Services.css'
import ListGroup from 'react-bootstrap/ListGroup';

import ServiceSupport from '../Service/ServiceSupport';

import { useNavigate } from 'react-router-dom';

function Services() {


  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/furniture');
  };
  
  return (
    <>
    <Row>
<h1 class='services_text center'>Our services</h1>
      {
        serviceData.map(function(d)
        {
          return(

          <Col class=" col-lg-4 col-md-6 col-sm-12">
            <Card style={{ width: '80%',display:'flex',justifyContent:'center',alignItems:'center' ,marginBottom:'2rem',justifyContent:'space-between' ,marginLeft:'10%',border:'none', boxShadow:'5px 2px 6px 2px lightgray' }}>
              <div style={{width:'50px',height:'50px',background:'orange',marginTop:'1.5rem',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'2rem'}}>
    <Card.Img variant="top" src={d.icons} style={{width:'35px',height:'35px',display:'flex',justifyContent:'center',alignItems:'center'}}/>

    </div>
      <Card.Body>
        <Card.Title><h4 style={{textAlign:'center'}}>{d.title}</h4></Card.Title>
        <Card.Text style={{color:'gray',textAlign:'center' ,marginTop:'.5rem'}}>
          {d.text}
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        
        <Card.Link href="#" style={{justifyContent:'center',alignItems:'center',display:'flex',textDecoration:'none',marginTop:'-0.5rem'}}><Button style={{width:'8rem',backgroundColor:'#2c3338',border:'none'}} varient="primary" >Read More</Button></Card.Link>
      </Card.Body>
      </Card>
          </Col>
          
          )
        }
        )
      
}
    </Row>
    </>
  )
}

export default Services