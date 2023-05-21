import React from 'react'
import './Product.css'
import { Rating } from 'react-simple-star-rating'
import StarRating from 'react-star-rating';
import { Button } from 'bootstrap';



function Product(props) {
  
  return (
    <div>
        <div class="product-div">
        <img className="product-img"
        src={props.img}
        alt="product-img" />
        <h2 className='product-heading' >{props.productName}</h2>
        <p className='product-para' style={{display:'flex',justifyContent:'space-between',padding:'0rem 1rem'}}><span>Price:-</span><span  className='span_1' >${props.Price}</span></p>
        <p className='product-para' style={{display:'flex',justifyContent:'space-between',padding:'.5rem 1rem',fontWeight:'bold'}}><span>Sell-Rate:- </span><span>${props.mrp_rate}</span></p>
        
      <Rating style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'auto',marginLeft:'3vh'}} initialValue={props.star} >{props.star}</Rating>







    </div>
    </div>
  )
}

export default Product;


// export default function product(props) {
//   const navigate = useNavigate();
//   const handleButtonClick=()=>{
//     navigate('/furniture');
//   };
//   return (
//     <div class="product-div">
//         <img className="product-img"
//         src={props.image}
//         alt="product-img"/>
//         <h2 className='product-heading' >{props.name}</h2>
//         <p className='product-para'>Price:-$<span  className='span_1'>{props.price}</span></p>
//         <p className='product-para' >Sell-Rate: ${props.mrp}</p>
        
//       <Rating style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'auto',marginLeft:'3vh'}} initialValue={props.star} >{props.star}</Rating>
// <Button class="product-btn" onClick={handleButtonClick}>{props.btn}</Button>

//     </div>
//   )
// }


