import{useLocation, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";

import { Rating } from 'react-simple-star-rating';
import {Col,Container,Row} from "react-bootstrap";
 import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
 import './Details.css'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
  } from "mdb-react-ui-kit";
  

import {AllFurnitureData} from "../data/data";
function Details() {


  const nav = useNavigate()
  const loc = useLocation()
  const[AllFurnitureData, setallfurnituredata] = useState(loc.state)
  console.log(AllFurnitureData);
  async function AllFurnitureDataaddtocart(product){
    let params = {
        ...product
    }
    let res = await axios.post("addtocart",params).catch(e=>alert(e))
    console.log(res.data);
    let {message,success} = res.data
    console.log(success);
    if(success)
    {
        alert(message)
        nav('/Addtocart')
    }
    else
    {
        alert(message)
    }
}

  
  return (
    // <Container>
    //   <Row>
    //     <Col lg={6} >
    //       <div className='w-75 px-3'>
    //     <img src={AllFurnitureData.img} alt="" className='productimg'/></div>
    //     </Col>
    //     <Col lg={6}>
    //     <div>
    //       <p  className='details-text2'>{AllFurnitureData.text2}</p>
    //       <p className='details-text3'>{AllFurnitureData.text3}</p>
    //       <p>{AllFurnitureData.Text4}</p>
    //       <div className='sell'>
    //       <p>{AllFurnitureData.mrp_rate}</p>
    //       <p className='mrp'>{AllFurnitureData.Price}</p>
    //      </div>
    //      <div className='sell1'> 
    //      <p>{AllFurnitureData.mrp_rate}</p>
    //       <p className='mrp'>{AllFurnitureData.Price}</p>
    //      </div>
    //       <div className='details-button'>
    //       <button className='details-button1' value={AllFurnitureData} onClick={()=> AllFurnitureDataaddtocart(AllFurnitureData)} style={{height:'3rem',width:'10rem'}}>Add To Cart</button>
    //         <Link className='butnow' to={"/Payment"}>  <button className='details-button1' style={{height:'3rem',width:'10rem'}}>Buy Now</button></Link>
        
    //       </div>
    //     </div>
    //     </Col>
  
    //   </Row>
    // </Container>



    <div class="container">
      <div class="col-lg-12 border p-3 mt-2 main-section bg-white">
        <div class="row hedding mt-3  pt-0 pb-3 col-lg-12 col-md-12">
            Furniture Product Detail Design
        </div>
        <div class="row m-0">
            <div class="col-lg-4 left-side-product-box pb-3">
                <img src={AllFurnitureData.img} class="border p-3 w-100"/>
                
            </div>
            <div class="col-lg-8">
                <div class="right-side-pro-detail border p-3 m-0">
                    <div class="row">
                        <div class="col-lg-12">
                            
                            <p class="m-0 p-0" style={{textAlign:'center'}}>{AllFurnitureData.productName}</p>
                        </div>
                        <div class="row ">

                        <div class="col-lg-6 " style={{display:'flex'}}>
                        <Rating style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'auto',marginLeft:'3vh'}} initialValue={AllFurnitureData.star} className="mt-4">{AllFurnitureData.star}</Rating>
                        </div>
                        
                        <div class="col-lg-6 " style={{display:'flex'}}>
                            <p class="mt-4  p-0 price-pro price">${AllFurnitureData.Price}</p>
                            <p class="mt-5 p-0 price-pro">${AllFurnitureData.mrp_rate}</p>
                            <hr class="p-0 m-0"/>
                        
                        
                        </div>
                    </div>
                    <div class="col-lg-6 pt-2">
                            <h5>Product Detail</h5>
                        <div class="row">   
                             <div class="col-lg-6 pt-2"> 
                            <span>-{AllFurnitureData.text1}</span><br></br>
                            <span>-{AllFurnitureData.text2}</span><br></br>
                            <span>-{AllFurnitureData.text_3}</span><br></br>
                            <span>-{AllFurnitureData.text4}</span><br></br>
                            <span>-{AllFurnitureData.text5}</span><br></br>
                            </div>
                            <div class="col-lg-6 pt-2">
                            <span>-{AllFurnitureData.heading}</span>
                            </div>

                        </div>
                        <hr class="m-0 pt-2 mt-2"/>                        
                        <div class="col-lg-12 mt-3">
                        <div class="row">
                            <div class="col-lg-6 pb-2">
                                    <Button  value={AllFurnitureData} onClick={()=> AllFurnitureDataaddtocart(AllFurnitureData)} class="btn btn-danger w-100" style={{width:'10rem',height:'2.5rem'}}>Add To Cart</Button>
                            </div>
                            <div class="col-lg-6">
                                    <Button  class="btn btn-success w-100" href="/Payment"  style={{width:'10rem',height:'2.5rem'}}>Shop Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
                   </div>
    </div>

</div>

  
  )
}

export default Details