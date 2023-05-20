import React from 'react'
import './Product.css'
import { Rating } from 'react-simple-star-rating'
import StarRating from 'react-star-rating';
import { Button } from 'bootstrap';

export default function product(props) {
  return (
    <div class="product-div">
        <img className="product-img"
        src={props.image}
        alt="product-img"/>
        <h2 className='product-heading'>{props.name}</h2>
        <p className='product-para'>Price:-{props.price}</p>
        
      <Rating style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'auto',marginLeft:'3vh'}} initialValue={props.star} >{props.star}</Rating>
<button class="product-btn">{props.btn}</button>

    </div>
  )
}


