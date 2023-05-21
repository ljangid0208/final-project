import React from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import img1 from '../image/Carpenter-PNG-Free-Image.png'
import img2 from '../image/Carpenter-PNG-Image.png'
import img3 from '../image/Carpenter-PNG-Pic.png'

function Repair() {
  return (
    // <Row>
    // <Row style={{width:'100%',height:'50vh' ,backgroundColor:'black'}}>
        /* <div style={{backgroundColor:'whitesmoke',height:'80vh',width:'80%',position:'absolute',marginTop:'5rem',marginLeft:'10%'}}>
            <Row ><Col class='col-lg-6 col-md-6 col-sm-2'><img src={img2} style={{width:'100%',height:'30rem'}}></img></Col>
            <Col  class='col-lg-6 col-md-6' style={{justifyContent:'center',textAlign:'center',alignItems:'center'}}>
                <Col><h2 style={{marginTop:'5rem',fontWeight:'bolder'}}>Furniture Repair Services</h2></Col>
                <Col><p style={{marginTop:'3rem'}}>Furniture repair is an essential service that helps restore the beauty, functionality, and longevity of various pieces of furniture. Whether it's a cherished antique or a modern piece, furniture can experience wear and tear over time. Repairing furniture not only enhances its aesthetic appeal but also ensures its structural integrity.</p></Col>
                <Col><Button style={{width:'9rem',height:'3rem',backgroundColor:'yellow',marginTop:'3rem',color:'black',border:'none',fontWeight:'bolder'}}>Contact Us</Button></Col>
            </Col>
            </Row>
        </div> */
        /* <img src={img1}/>
    </Row>
    
    <Row style={{width:'100%',height:'50vh' ,backgroundColor:'yellow'}}></Row>
  </Row> */

  <Row>
    <Row className='col-lg-6 col-md-6 col-sm-12'>
    <Col ><img src={img1} style={{width:'80%',height:'80vh',display:'flex',margin:'auto',justifyContent:'center',alignItems:'center'}}></img></Col>
    </Row>
    <Row className='col-lg-6 col-md-6 col-sm-12'>
    
    <Col className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        <Col  className='col-lg-12 col-md-12 col-sm-12 col-xs-12' ><h2 style={{marginTop:'3rem',fontWeight:'bolder',textAlign:'center'}}>Furniture Repair Services</h2></Col>
                <Col  className='col-lg-12 col-md-12 col-sm-12 col-xs-12' ><p style={{marginTop:'3rem',paddingLeft:'5vh',paddingRight:'5vh',marginBottom:'5rem'}}>Furniture repair is an essential service that helps restore the beauty, functionality, and longevity of various pieces of furniture. Whether it's a cherished antique or a modern piece, furniture can experience wear and tear over time. Repairing furniture not only enhances its aesthetic appeal but also ensures its structural integrity.</p></Col>
                <Col  className='col-lg-12 col-md-12 col-sm-12 col-xs-12' ><Button style={{width:'9rem',height:'3rem',backgroundColor:'yellow',color:'black',border:'none',fontWeight:'bolder',margin:'auto',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'2rem'}} href='/servicesupport'>Contact Us</Button></Col>
                </Col>
    
    </Row>  
  </Row>

  )
}

export default Repair