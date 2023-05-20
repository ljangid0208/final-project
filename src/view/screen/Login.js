import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container,Row,Col, Nav } from 'react-bootstrap';
import axios from 'axios';
import './Login.css'
function Details() {

  const navigate=useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


  let submitlogin=async()=>{
    
    let params={
      email:email,
      password:password
    }
    
    console.log(params);
    try {
      let res =await axios.post("login",params).catch(err=>alert(err))
      console.log(res.data);
      
      let {success,message,data} =res.data
      if(success){
      alert(message)
   console.log(data);
   localStorage.setItem('user',true)
      navigate("/")
      window.location.reload(true);
      }
      else{
        alert(message)
       }
       } catch (error) {
      alert(error)
    }
    setEmail("")
    setPassword("")
  }


  return (
    <div className='featured'>
      <Form>
        <div className='text'>User Login</div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type='email' placeholder='Email' className='email' value={email} onChange={(d)=>setEmail(d.target.value)}></Form.Control>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Control type='password' placeholder='Password' className='password' value={password} onChange={(d)=>setPassword(d.target.value)}></Form.Control>
        </Form.Group>
        {/* <div className='forget'><span>Forgot Your Email </span><Link to='/click' className='click'> Click Here</Link></div> */}
        <Button className='login' varient='primary' onClick={submitlogin}>Login Now</Button>
        {/* <div className='or'>Or Login With</div>
        <div className='btns'>
        <button>Google</button>
        <button>FaceBook</button>
        </div>
        <div className='forget'><span>Don't Have An Account </span><Link to='/click' className='click'> Create One</Link></div> */}
      </Form>
    </div>
  )
}

export default Details;