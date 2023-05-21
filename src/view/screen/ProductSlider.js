import Product from './Product';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import './ProductSlider.css';
import { ProductSliderData } from '../data/data';
import { AllFurnitureData } from '../data/data';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function ProductSlider() {



  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/furniture');
  };


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min:1200 },
          items: 4
        },
        smallLaptops:{
            breakpoint:{max:1200,min:992},
            items:4
        },
        tablet: {
          breakpoint: { max: 992, min:768 },
          items: 3
        },
        phone:{
            breakpoint:{max:768,min:576},
            items: 2
        },
        mobile: {
          breakpoint: { max:576, min:0},
          items: 1.5
          
        }
        
    }
        const pro=AllFurnitureData.map((item)=>(
            <Product productName={item.productName}
            Price={item.Price}
            mrp_rate={item.mrp_rate}
            img={item.img}
            star={item.star}
            btn={item.btn}
            />
        ));
  return (

   
    <div className='App'>

<h1 className='slider-h1'>Product Slider</h1>
<Carousel responsive={responsive} className='carousel'>
 {pro}
</Carousel>
<Button className='probtn' onClick={handleButtonClick}>Explore Furniture</Button>
    </div>
  );

  }
export default ProductSlider;