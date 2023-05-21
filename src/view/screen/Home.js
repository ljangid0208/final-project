import React from 'react'
import Contact from './Contact'
import { Container,Row,Col, Button } from 'react-bootstrap'
import chair from '../image/chair1.png'
// import table from '../image/table-png-31938-removebg-preview.png'

import Services from './Services'
import About from './About'
import ProductSlider from './ProductSlider'
import ProductList from './ProductList'
import Furniture from './Furniture'


import Review from './Review'
import '../style/Home.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function Home() {


  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/furniture');
  };

  return (
    <>
    <div className='homepage'> 
    
        
<Row>
  <Col><h2 className='home_text'><span>Style your home </span>just like you'd want it.</h2></Col>
</Row>


<Row class="row ">
    <Col>
{/* 
<div class="col">


  <Col >
    <img src={chair}  class=" carClick_1" style={{width:'50%',justifyContent:'center',alignItems:'center',margin:'auto',marginBottom:'0rem'}}/>

    </Col>
    </div> */}
    {/* <div class="col">
    <Col>
    <img src={table}  class="carClick_2"  style={{width:'20%',justifyContent:'center',alignItems:'center',margin:'auto',display:'flex',marginBottom:'0rem'}}/>
  </Col>
  </div> */}

<h6 className='h6'>Elevate your home decor with our beautiful furniture pieces.
Browse our collection for stylish and functional designs.
Create your dream home with our affordable prices and exceptional quality.</h6>
</Col>
</Row>




    <Row>
      <Col>

      
      <Button className='explore_btn' onClick={handleButtonClick}>Explore Furniture</Button>
      
</Col>
</Row>
</div>
    
    <About></About>
    <ProductSlider></ProductSlider>
    <ProductList></ProductList>
    <Services></Services>
<Review></Review>
    <Contact/>
    {/* <Footer></Footer> */}
    </>
    
  )
}

export default Home