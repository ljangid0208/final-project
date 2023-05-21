import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { serviceData } from '../data/data'
import {Card ,Button}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'
import ListGroup from 'react-bootstrap/ListGroup';
import img1 from '../image/240_F_551699573_1wjaMGnizF5QeorJJIgw5eRtmq5nQnzz.jpg'
import img2 from "../image/chair12.png"
import img3 from "../image/69890.png"
 import { useNavigate } from 'react-router-dom';
import Furniture from './Furniture';

function Services() {


  // const nav = useNavigate();
  // const handleButtonClick = () => {
  //   nav('/Support');
  // };
 

  return (
    <>
    <Row>
<h1 class='services_text center'>Our services</h1>
      {/* {
        serviceData.map(function(d)
        {
          return( */}






          <Col class=" col-lg-4 col-md-6 col-sm-12">
            <Card style={{ width: '80%',display:'flex',justifyContent:'center',alignItems:'center' ,marginBottom:'2rem',justifyContent:'space-between' ,marginLeft:'10%',border:'none', boxShadow:'5px 2px 6px 2px lightgray' }}>
              <div style={{width:'50px',height:'50px',background:'orange',marginTop:'1.5rem',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'2rem'}}>
    <Card.Img variant="top" src={img1} style={{width:'35px',height:'35px',display:'flex',justifyContent:'center',alignItems:'center'}}/>

    </div>
      <Card.Body>
        <Card.Title><h4 style={{textAlign:'center'}}>Furniture selling</h4></Card.Title>
        <Card.Text style={{color:'gray',textAlign:'center' ,marginTop:'.5rem'}}>
        Furniture selling has become a popular business in recent years, as more and more people are looking to buy Furniture.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        
        <Card.Link href="#" style={{justifyContent:'center',alignItems:'center',display:'flex',textDecoration:'none',marginTop:'-0.5rem'}}><Button style={{width:'8rem',backgroundColor:'#2c3338',border:'none'}} varient="primary" href="/furniture" >Read More</Button></Card.Link>
      </Card.Body>
      </Card>
          </Col>
          
<Col class=" col-lg-4 col-md-6 col-sm-12">
            <Card style={{ width: '80%',display:'flex',justifyContent:'center',alignItems:'center' ,marginBottom:'2rem',justifyContent:'space-between' ,marginLeft:'10%',border:'none', boxShadow:'5px 2px 6px 2px lightgray' }}>
              <div style={{width:'50px',height:'50px',background:'orange',marginTop:'1.5rem',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'2rem'}}>
    <Card.Img variant="top" src={img2} style={{width:'35px',height:'35px',display:'flex',justifyContent:'center',alignItems:'center'}}/>

    </div>
      <Card.Body>
        <Card.Title><h4 style={{textAlign:'center'}}>Furniture Repair And Maintainance</h4></Card.Title>
        <Card.Text style={{color:'gray',textAlign:'center' ,marginTop:'.5rem'}}>
        Remember that regular maintenance can help extend the life of your Furniture and prevent breakdowns and costly repairs.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        
        <Card.Link  style={{justifyContent:'center',alignItems:'center',display:'flex',textDecoration:'none',marginTop:'-0.5rem'}}><Button style={{width:'8rem',backgroundColor:'#2c3338',border:'none'}} varient="primary" href="/repair">Read More</Button></Card.Link>
      </Card.Body>
      </Card>
          </Col>

<Col class=" col-lg-4 col-md-6 col-sm-12">
            <Card style={{ width: '80%',display:'flex',justifyContent:'center',alignItems:'center' ,marginBottom:'2rem',justifyContent:'space-between' ,marginLeft:'10%',border:'none', boxShadow:'5px 2px 6px 2px lightgray' }}>
              <div style={{width:'50px',height:'50px',background:'orange',marginTop:'1.5rem',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'2rem'}}>
    <Card.Img variant="top" src={img3} style={{width:'35px',height:'35px',display:'flex',justifyContent:'center',alignItems:'center'}}/>

    </div>
      <Card.Body>
        <Card.Title><h4 style={{textAlign:'center'}}>24/7 Support</h4></Card.Title>
        <Card.Text style={{color:'gray',textAlign:'center' ,marginTop:'.5rem'}}>
        Whether you have a question, need assistance with an order, or require immediate help with a furniture emergency, our dedicated support team is available around the clock to assist you.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        
        <Card.Link   style={{justifyContent:'center',alignItems:'center',display:'flex',textDecoration:'none',marginTop:'-0.5rem'}}><Button style={{width:'8rem',backgroundColor:'#2c3338',border:'none'}} varient="primary" href="servicesupport">Read More</Button></Card.Link>
      </Card.Body>
      </Card>
          </Col>

          {/* )
        }
        ) */}
      
{/* } */}
    </Row>
    </>
  )
}

export default Services