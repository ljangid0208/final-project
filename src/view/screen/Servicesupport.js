import './Servicesupport.css'
import React from 'react'
import { Button,Row,Col } from 'react-bootstrap'
import emailjs from 'emailjs-com'
function Servicesupport() {
  
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_ytzpuxf','template_28write',e.target,"CQLs6y2eBt3ZUOK2S").then(res=>{
      
      console.log(res);
      alert("Problem SuccessFully Send");
    }).catch(err=>console.log(err));
    e.target.reset()
  }
  


  return (
    
<Row class="row ">

<Row className="col-lg-6 col-md-12 col-sm-12 ">

<Col style={{justifyContent:'center',alignContent:'center',margin:'auto'}}className="servicerow">
    
        <div class="text-center touch"  >
          <h2 style={{color:'white'}}>Contact US</h2>
          </div>
        <form onSubmit={sendEmail}>
        <div class="form-group">
    
        <input type="text" class="form-control" id="exampleInputName1" name='name' placeholder="Enter Your Name" required autoComplete='off' style={{backgroundColor:'transparent', border:'none',borderBottom:'2px solid dodgerBlue',marginTop:'-5vh'}}/>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email'  required autoComplete='off' style={{backgroundColor:'transparent', border:'none',borderBottom:'2px solid dodgerBlue',color:'dodgerblue'}}/>
          <small id="emailHelp" class="form-text text-muted" style={{marginLeft:'0px' ,color:'dodgerBlue'}}>We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          
          <input type="password" class="form-control" id="exampleInputPassword1" name='password' placeholder="Enter Your Password"  required autoComplete='off' style={{backgroundColor:'transparent', border:'none',borderBottom:'2px solid dodgerBlue',color:'dodgerBlue'}}/>
          </div>
        <div class="form-group">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Problem' name='massage'  required autoComplete='off' style={{backgroundColor:'transparent', border:'none',borderBottom:'2px solid dodgerBlue',color:'dodgerBlue'}}></textarea>
        </div>
        <Button type="submit" class="btn btn-primary " className='servicebtn' style={{marginTop:'5vh'}}>SUBMIT </Button>
      </form>
      
      </Col>
        </Row>
             
    

    <Row className="col-lg-6 col-md-12 col-sm-12">

<Col className="col-lg-12 col-md-12 col-sm-12"  >

  
 <h3 style={{marginTop:'5vh',textAlign:'center',fontSize:'6vh'}}>24/7 Support for Furniture Services</h3>
 </Col>
 <Col  className="col-lg-12 col-md-12 col-sm-12">
 <h5  style={{marginTop:'2vh',textAlign:'left',fontSize:'2.5vh',marginLeft:'3vh'}}>At FurniBeast, we understand that furniture-related issues can arise at any time, and we are committed to providing exceptional customer service whenever you need it. That's why we offer 24/7 support for all your furniture service needs. Whether you have a question, need assistance with an order, or require immediate help with a furniture emergency, our dedicated support team is available around the clock to assist you.</h5>
 </Col>
 <Col  className="col-lg-12 col-md-12 col-sm-12">
 <h5 style={{marginLeft:'3vh'}}>Here's how our 24/7 support for furniture services works:</h5>
 </Col>
 <Col  className="col-lg-12 col-md-12 col-sm-12">
 <p style={{marginLeft:'3vh',fontSize:'2.2vh',marginRight:'3vh'}}>Phone Support: You can reach our customer support representatives via phone at any time, day or night. Simply dial our support hotline, and one of our friendly and knowledgeable agents will be there to assist you. Whether you need help with product information, order tracking, scheduling a service appointment, or resolving any issues, our team will provide prompt and reliable assistance.</p>
 </Col>
 <Col  className="col-lg-12  col-md-12 col-sm-12">
 <p style={{marginLeft:'3vh',fontSize:'2.2vh',marginRight:'3vh'}}>Live Chat: We also offer live chat support through our website. If you prefer to communicate online, simply visit our website and click on the live chat option. Our support team will respond promptly, addressing any inquiries or concerns you may have regarding our furniture services.</p>
 </Col>
 <Col  className="col-lg-12 col-md-12 col-sm-12">
 <p style={{marginLeft:'3vh',fontSize:'2.2vh',marginRight:'3vh'}}>Email Support: If your matter is not urgent or you prefer written communication, you can send us an email at any time. Our support team monitors our inbox 24/7, and they will respond to your email as quickly as possible, providing the information or assistance you need.</p>
 </Col>
 <Col  className="col-lg-12 col-md-12 col-sm-12">
 <p style={{marginLeft:'3vh',fontSize:'2.2vh',marginRight:'3vh'}}>Emergency Services: We understand that emergencies can happen with furniture, such as a broken piece or an urgent repair. In such cases, we have a dedicated emergency response team available 24/7. Simply contact our support hotline, and we will dispatch a technician to address the issue promptly and efficiently.</p>
 </Col>
 <Col  className="col-lg-12 col-md-12 col-sm-12">
  <h6 style={{marginLeft:'3vh'}}>With our 24/7 support for furniture services, we aim to ensure that you receive the help you need whenever you need it. Our goal is to provide you with a seamless and stress-free experience, from the moment you contact us to the resolution of your furniture-related issues.</h6>
 </Col>
 <Col  className="col-lg-12 col-md-12 col-sm-12">
  <h6 style={{marginLeft:'3vh'}}>At [Company Name], customer satisfaction is our top priority. We are committed to delivering exceptional support around the clock, so you can rely on us for all your furniture service needs.</h6>
 </Col>

</Row>
</Row>
  )
}

export default Servicesupport;