import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row,NavDropdown,Nav,Navbar,Button,Container, Form } from 'react-bootstrap'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './view/screen/Home'
import Review from './view/screen/Review'
import { menubar } from './view/data/data';
import Contact from './view/screen/Contact';
import Furniture from './view/screen/Furniture'
import Services from './view/screen/Services';
import Login from'./view/screen/Login'
import SignUp from './view/screen/SignUp';
import logo from './view/image/198fc8a2981818511dd4c313c2176ff8-removebg-preview.png'
import About from './view/screen/About';
import Details from './view/screen/Details';
import Payment from './view/screen/Payment'
import Servicesupport from './view/screen/Servicesupport'
import Repair from './view/screen/Repair';
import AddToCart from './view/screen/AddToCart'
import Product from './view/screen/Product';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import Feedback from 'react-bootstrap/esm/Feedback';
import { send } from 'emailjs-com';
import emailjs from 'emailjs-com'

function App() {




  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_ytzpuxf','template_9x8ifd7',e.target,"CQLs6y2eBt3ZUOK2S").then(res=>{
     
      console.log(res);
      alert("Feedback SuccessFully Submitted");
    }).catch(err=>console.log(err));
    e.target.reset()
  
  }
  









const [user,setUser]=useState(localStorage.getItem('user'))
console.log(localStorage.getItem('user'));
  function logout() {
    alert('logout')
    localStorage.setItem('user', false)
    setUser(false)
     localStorage.clear()
  }


  return (
    <>

    <BrowserRouter>
<Navbar bg="light" expand="lg" style={{width:'100%',position:'sticky',zIndex:'999',left:'0',top:'0'}}> 
          <Navbar.Brand href="#home" className='banner_text'><span className='banner_text1'><img src={logo} style={{width:'15vh'}}/>Furni</span><span className='banner_text2'>Beast</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'center',alignItems:'center',flex:'2.5'}}>
            <Nav className="me-auto">
  <Nav.Link href="/" style={{textAlign:'center',}}>Home</Nav.Link>
  
  
  
  
       {  menubar.map(function(d)
    {
      return(
        <Nav.Link href={`/${d}`}  style={{marginLeft:'15px'}}>{d}</Nav.Link>
      )
    })
  }
  

 
            
            </Nav>

            { 
        user ?
                          <Nav.Link> <Link to="/Addtocart" className="text-decoration-none text-secondary cart">🛒</Link></Nav.Link>
                          : null
    
               }
               {user ? null : <>
                  <Button variant="warning" style={{width:'6rem' ,marginRight:'2rem',fontWeight:'bold'}} href='/login' >Login</Button>{' '}
            <Button variant="warning" style={{width:'6rem' ,marginRight:'2rem',fontWeight:'bold'}} href='/signup' >Sign Up</Button>{' '}
   
                      </>
                      }

            {
                      user ? <Button onClick={logout}>Logout</Button> : null
                    }

          
          </Navbar.Collapse>
  
  
          
  
      </Navbar>
  




    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/furniture' element={<Furniture/>}/> */}
      <Route path='/review' element={<Review/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/about' element={<About/>}/>
<Route path="/servicesupport" element={<Servicesupport></Servicesupport>}></Route>
<Route path="/repair" element={<Repair></Repair>}></Route>
<Route path='/addtocart' element={<AddToCart/>}></Route>
<Route path='/payment' element={<Payment></Payment>}></Route>
<Route path='/details' element={<Details/>}></Route>

      {
            user ? null : <>
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/login' element={<Login />} />
            </>

          }
<Route path="/product" element={<Product></Product>}></Route>
          <Route path='/furniture' element ={<Furniture/>}></Route>


    </Routes>
    </BrowserRouter>




    <div class='footer row'>
<footer class="page-footer font-small indigo bg-light" >

  {/* //Footer Links // */}
  <div class="container text-center text-md-left " >

    {/* //Grid row  */}
    <div class="row">

      {/* //Grid column */}
      <div class="col-lg-3 col-md-6 col-sm-6 mx-auto">

        {/* //Links */}
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Our Branches</h5>

        <ul class="list-unstyled" >
          <li>
            <h5 style={{marginBottom:'0vh'}}>Address</h5>
            Jaipur-302019, Rajasthan, India
          </li>
          <li>
            <h5 style={{marginBottom:'0vh'}}>Contact Us</h5>
              EMail:FurniBeast@Gmail.com
          </li>
          
          <li>
            <h5 style={{marginBottom:'0vh'}}>TelePhone</h5>
            Phone: +918949040722
          </li>
        </ul>

      </div>
      
      <hr class="clearfix w-100 d-md-none" style={{marginBottom:'0rem'}}/>

      {/* // Grid column */}
      <div class="col-lg-3 col-md-6 col-sm-6 mx-auto">

        {/* //Links */}
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Luxury Furniture</h5>

        <ul class="list-unstyled">
       <p> It offers a premium and exclusive experience, enhancing the ambiance and creating a luxurious atmosphere. Utilizing luxury furniture in a college project can showcase attention to detail and elevate the overall aesthetic appeal.</p>
        </ul>

      </div>
      {/* //Grid column */}

      <hr class="clearfix w-100 d-md-none" style={{marginBottom:'0rem'}}/>

      {/* // Grid column  */}
      <div class="col-lg-3 col-md-6 col-sm-6 mx-auto">

        {/* // Links */}
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Quick Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="/"><AiOutlineArrowRight className='icon'/>Home</a>
          </li>
          <li>
            <a href="/furniture"><AiOutlineArrowRight className='icon'/>Furniture</a>
          </li>
          <li>
            <a href="/services"><AiOutlineArrowRight className='icon'/>Services</a>
          </li>
          
          <li>
            <a href="review"><AiOutlineArrowRight className='icon'/>Reviews</a>
          </li>
          <li>
            <a href="/contact"><AiOutlineArrowRight className='icon'/>Contact</a>
          </li>
          <li>
            <a href="/about"><AiOutlineArrowRight className='icon'/>About</a>
          </li>
        </ul>

      </div>
      {/* //Grid column */}

      <hr class="clearfix w-100 d-md-none" style={{marginBottom:'0rem'}}/>

{/* // Grid column */}
      <div class="col-lg-3 col-md-6 col-sm-6 mx-auto">

        {/* //Links */}
        <h5 class="font-weight-bold text-uppercase mt-3 mb-2">Feedback
        </h5>

        <ul class="list-unstyled">
          <li>
            leave a feedback
          </li>
          
          <form style={{flexDirection:'row',margin:'0px',padding:'0px'}} onSubmit={sendEmail}>
          <Row style={{flexDirection:'column'}}>
    <Col className="col-lg-12 col-md-12 col-sm-12 ">
        <input type="text" class="form-control" id="exampleInputName1" placeholder="Enter Name" name="name"  autoComplete='off' required style={{margin:'0px'}}/>
        
        </Col>
        <Col className="col-lg-12 col-md-12 col-sm-12 ">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" autoComplete='off' required/>
    </Col>

    <Col className="col-lg-12 col-md-12 col-sm-12">
        
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Message' name="massage" autoComplete='off' required></textarea>
</Col>
        <Button type="submit" value="Send" class="btn btn-primary" className="contactbtn" style={{margin:'auto',display:'flex',justifyContent:'flex',alignItems:'center'}}> Send Feedback</Button>
        </Row> 
      </form>
      
        </ul>

      </div>
      {/* // Grid column */}

    {/* //Grid column  */}

    </div>
    {/* //Grid row  */}

  </div>
  {/* //Footer Link */}

  {/* //Copyright  */}
  <div class="footer-copyright text-center py-3">© Copyright All The Rights Are Reserved By:
    <a href="/" style={{textDecoration:'none',color:'orange'}}><span style={{color:'black'}}>Furni</span>Beast </a>
  </div>
  {/* // Copyright  */}

  <hr style={{border:'2px solid black' ,marginTop:'0px',marginBottom:'2rem'}}></hr>

      </footer>
      </div>

    </>
  )
}

export default App