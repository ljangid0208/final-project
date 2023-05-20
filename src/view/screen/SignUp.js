import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container,Row,Col} from 'react-bootstrap';
import './SignUp.css'
function SignUp() {
  // console.log(name);
  // console.log(email);
  // console.log(password);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [file,setFile]=useState("");
  const [fileName,setFileName]=useState("");
  const navigate=useNavigate();



  let submitregister=async()=>{
    console.log(file);
    console.log(fileName);
    
      const formdata= new FormData();
      formdata.append("file",file)
      formdata.append("filename",fileName)
      let data =JSON.stringify( Object.fromEntries(formdata));
    
    console.log(data);
      let params={
      username:name,
      email:email,
      password:password,
      image:file
    }
    console.log(params);
    try {
        let res =await axios.post("register",params).catch(err=>alert(err))
        console.log(res.data);
        let {success,message} =res.data
        if(success){
          alert(message)
          navigate("/Login");
        }
        else{
          alert(message)
        }
      } catch (error) {
        console.log("error==",error);
        alert(error)
      }
    
    setEmail("")
    setPassword("")
    setName("")
    }





  return (
    <div className='SignUp'>
      <Form>
        <div className='text_'>User SignUp</div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type='text' placeholder='Name' className='_1' value={name} onChange={d=>setName(d.target.value)}></Form.Control>
        <Form.Control type='email' placeholder='Email'  className='_2' value={email} onChange={(d)=>setEmail(d.target.value)}></Form.Control>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

        <Form.Control type='password' placeholder='Password' className='_3' value={password} onChange={(d)=>setPassword(d.target.value)}></Form.Control>
        </Form.Group>
        {/* <input type='password' placeholder='Re-Password' className='_4'></input>
        <div className='forget'><span>Forgot Your Email </span><Link to='/click' className='click'> Click Here</Link></div> */}
        <Button className='login' varient='primary' onClick={submitregister}>Sign Up</Button>
        {/* <div className='or'>Or Sign Up With</div> */}
        {/* <div className='btns'>
        <button>Google</button>
        <button>FaceBook</button>
        </div> */}
        {/* <div className='forget'><span>Already Have An Account </span><Link to='/click' className='click'> Go To Login</Link></div> */}
      </Form>
    </div>
  )
}

export default SignUp;