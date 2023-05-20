import React from 'react'
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../image/187.png'
function About() {
  return (
    <>
    
      <Row className='aboutpage'>
        <Col lg={5} md={5} sm={12} className='colImg' > <img src={image1} style={{width:'90%'}} className='aboutImg'/></Col>
        <Col  lg={7} md={7} sm={12}>
            <h1 className='aboutH'>About Us</h1>
            <p className='aboutP'>Welcome to our furniture e-commerce site! We are a family-owned business that has been providing high-quality furniture to our customers for over 30 years. Our passion for furniture and design inspired us to start this business, and we've been committed to offering the best products and customer service ever since. </p>

            <p className='aboutP'>At our company, we believe that furniture is not just a practical necessity, but also an expression of personal style and creativity. We carefully curate our collections to provide our customers with a wide variety of unique and stylish pieces that can transform their homes into personalized and beautiful spaces.
            


            </p>
            <p className='aboutP'>We understand that buying furniture online can be daunting, which is why we are dedicated to providing our customers with a seamless and enjoyable shopping experience. Our team of experts is always available to answer any questions and offer personalized advice to help you find the perfect furniture for your home.</p>
            <p className='aboutP'>We are committed to sustainability and ethical business practices, and we work with suppliers who share our values. We also offer fast and reliable shipping, easy returns, and a price match guarantee, so you can shop with confidence.
            </p>
            <p className='aboutP'>Thank you for choosing us for your furniture needs. We hope you enjoy our collections and our commitment to exceptional customer service.</p>
        </Col>
      </Row>
    </>
  )
}

export default About;