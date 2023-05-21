import React from 'react'
import { Container,Row,Col } from 'react-dom';
import { Nav } from 'react-bootstrap';
import sofa from '../image/1000_F_551699573_1wjaMGnizF5QeorJJIgw5eRtmq5nQnzz.jpg'
import dinning  from '../image/jonathan-borba-COzqEKjaxqo-unsplash.jpg'
import bed from '../image/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtNDA0LW1qLTIxYTI0NzRfMS5qcGc.webp'
import table from '../image/wallpaperflare.com_wallpaper.jpg'
import cabinet from '../image/cabinet1.jpg'
import modularKitchen from '../image/ralph-ravi-kayden-JDBVXignFdA-unsplash.jpg'

import { useState } from 'react';

import './ProductList.css'
function ProductList() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
<div class="jumbotron">
  <div class="text-center">
    <h1>Furniture Listing </h1>      
    <p>Mission, Vission & Values</p>
  </div>
</div>

<div class="container">    
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-primary">
        
        <div class="panel-body"><img src={modularKitchen} class="img-responsive" style={{width:"100%",borderRadius:'10px'}} alt="Image"onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>{isHovered && <div className="image-slider__overlay" style={{borderRadius:'10px'}}></div>}</div>
        
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-danger">
        
        <div class="panel-body"><img src={sofa} class="img-responsive" style={{width:"100%",borderRadius:'10px'}} alt="Image" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>{isHovered && <div className="image-slider__overlay" style={{borderRadius:'10px'}}></div>}</div>
        
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-success">
        
        <div class="panel-body"><img src={cabinet} class="img-responsive" style={{width:"100%",borderRadius:'10px'}} alt="Image" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>{isHovered && <div className="image-slider__overlay" style={{borderRadius:'10px'}}></div>}</div>
        
      </div>
    </div>
  </div>
</div><br/>

<div class="container">    
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-primary">
        
        <div class="panel-body"><img src={table} class="img-responsive" style={{width:"100%",borderRadius:'10px'}} alt="Image" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>{isHovered && <div className="image-slider__overlay" style={{borderRadius:'10px'}}></div>}</div>

      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-primary">
        
        <div class="panel-body"><img src={dinning} class="img-responsive" style={{width:"100%",borderRadius:'10px' }}alt="Image"onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>{isHovered && <div className="image-slider__overlay" style={{borderRadius:'10px'}}></div>}</div>
        
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-primary">
        
        <div class="panel-body"><img src={bed} class="img-responsive" style={{width:"100%",borderRadius:'10px'}} alt="Image"onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>{isHovered && <div className="image-slider__overlay" style={{borderRadius:'10px'}}></div>}</div>
        
      </div>
    </div>
  </div>
</div>




    </>
  )
}

export default ProductList;