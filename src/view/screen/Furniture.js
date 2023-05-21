import React from 'react'
// import { useLocation} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


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

import { AllFurnitureData } from '../data/data';

import { Rating } from 'react-simple-star-rating'
 import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';


function AllFurniture() {

  const nav = useNavigate() 

//   const nav = useNavigate()
//   const loc = useLocation()
//   const[AllFurnitureData, setallfurnituredata] = useState(loc.state)
//   console.log(AllFurnitureData);
//   async function AllFurnitureDataAddToCart(product){
//     let params = {
//         ...product
//     }
//     let res = await axios.post("addtocart",params).catch(e=>alert(e))
//     console.log(res.data);
//     let {message,success} = res.data
//     console.log(success);
//     if(success)
//     {
//         alert(message)
//         nav('/AddttoCart')
//     }
//     else
//     {
//         alert(message)
//     }
// }


  return (



//     <div>
     
//      <MDBContainer fluid className="my-5 text-center" >
//       <h4 className="mt-4 mb-5">
//         <strong style={{fontSize:'xx-large'}}>Best Furniture</strong>
//       </h4>

//       <MDBRow >
      
          
//                 {
// AllFurnitureData.map(function(d)
// {
//     return(
      
      

//     <MDBCol  md="4" lg="3" sm="6" xs="6" className="mb-4">
//         <MDBCard key={d.id}>
//             <MDBRipple
//               rippleColor="light"
//               rippleTag="div"
//               className="bg-image rounded hover-zoom">

//         <MDBCardImage
//         src={d.img}
//         fluid
//         className="w-100" style={{height:'10rem'}}
//       />
//       <a href="#!">
//         <div className="mask">
//           <div class="d-flex justify-content-start align-items-end h-100">
//             <h5>
//               <span className="badge bg-primary ms-2">New</span>
              
//             </h5>
//           </div>
//         </div>
//         <div className="hover-overlay">
//           <div
//             className="mask"
//             style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//           ></div>
//         </div>
//       </a>


//     </MDBRipple>
//     <MDBCardBody>
//       <a href="#!" className="text-reset">
//         <h5 className="card-title mb-3">{d.productName}</h5>
//       </a>

//       <Rating style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'auto',marginLeft:'3vh'}} initialValue={d.star} >{d.star}</Rating>
//       <h6 className="mb-3">
        
//       <strong className="ms-2 text-danger">Price:-{d.price}</strong>
//       </h6>
//       <div style={{justifyContent:'space-between',display:'flex'}}>
//       <Button style={{alignItems:'left',marginLeft:'0px'}} >Add To Cart</Button>

//       {/* value={AllFurnitureData} onClick={()=>AllFurnitureDataAddToCart(AllFurnitureData)} */}



//       <Button style={{width:'7rem'}}>Buy Now</Button>
//       </div>
//       </MDBCardBody>

//           </MDBCard>
//           </MDBCol> 

//       )
//                 }
//                 )
//                 }
               


    

    
             
//       </MDBRow>
//     </MDBContainer>



<MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
    
{

AllFurnitureData.map(function(d)
{
  return(<MDBCol md="12" xl="10">
  <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3" >
    <MDBCardBody>
      <MDBRow>
        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom hover-overlay"
          >
            <MDBCardImage
              src={d.img}
              fluid
              className="w-100" style={{height:'25vh'}}
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>
        <MDBCol md="6">
          <h5>{d.productName}</h5>
          <div className="d-flex flex-row">
            <div className="text-danger mb-1 me-2">
              <MDBIcon fas icon="star" />
              <MDBIcon fas icon="star" />
              <MDBIcon fas icon="star" />
              <MDBIcon fas icon="star" />
            </div>
            <span>{d.stock}</span>
          </div>
          <div className="mt-1 mb-0 text-muted small">
            <span>{d.text}</span>
            <span className="text-primary"> • </span>
            <span>{d.text1}</span>
            <span className="text-primary"> • </span>
            <span>
              {d.text2}
              <br />
            </span>
          </div>
          <div className="mb-2 text-muted small">
            <span>{d.text4}</span>
           
            
          </div>
          <p className="text-truncate mb-4 mb-md-0">
            {d.heading}
          </p>
        </MDBCol>
        <MDBCol
          md="6"
          lg="3"
          className="border-sm-start-none border-start"
        >
          <div className="d-flex flex-row align-items-center mb-1">
            <h4 className="mb-1 me-1">{d.mrp_rate}</h4>
            <span className="text-danger">
              <s>{d.Price}</s>
            </span>
          </div>
          <h6 className="text-success">Free shipping</h6>
          <div className="d-flex flex-column mt-4">
            <MDBBtn color="primary" size="sm" onClick={()=>nav('/details',{state:d})}>
              Details
            </MDBBtn>
            {/* <MDBBtn outline color="primary" size="sm" className="mt-2">
              Add to wish list
            </MDBBtn> */}
          </div>
        </MDBCol>
      </MDBRow>
    </MDBCardBody>
  </MDBCard>
</MDBCol> )
})
}
</MDBRow>
    </MDBContainer>
  )
 }

export default AllFurniture