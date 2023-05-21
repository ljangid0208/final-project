import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation ,useNavigate} from 'react-router-dom';
import emailjs from 'emailjs-com'
const Payment = () => {
  const nav = useNavigate()
  const location = useLocation();
  const selectedProducts = location.state?.selectedProducts ?? [];
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    email:'',
    name:'',
    user_number:'',
    address:'',
    cvv: '',
    cardname: '',
  });
  const handleInputChange = (event) => { 
    const { name, value } = event.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Here you could handle submitting the payment information to a server
    // and show a confirmation message to the user




    if(paymentInfo.address!==''&&paymentInfo.email!==''&&paymentInfo.cardname!==''&& paymentInfo.cardNumber!==''&& paymentInfo.cvv!==''&&paymentInfo.name){
      
    
    
    let res = await axios.post('removecartitem', {}).catch(e=>console.log(e))
    console.log(res?.data);
            emailjs.sendForm('service_cbi2nc8','template_ium0q6g',event.target,"_Q98PnACJodjplskt").then(res=>{
              
              window.alert('Order successful! Thank you for your purchase.');
            nav('/')
            })
              
    // nav('/home')
    }
    else{
      window.alert('Fill all Input.');
      
    }
    
    
  };
  

  return (
      <div className="container my-5">
      <h1 className="mb-3">Payment</h1>
      <div className="card">
        <div className="card-header">
          <h5>Order Summary</h5>
        </div>
        <div className="card-body">

          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="cardNumber">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                autoComplete='off'
                placeholder='Enter Your Name'
                value={paymentInfo.name}
                onChange={handleInputChange}
              />
              </div>
              <div className='form-group'>
               <label htmlFor="cardNumber">Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="user_number"
                name="user_number"
                autoComplete='off'
                placeholder='Enter Your Phone Number'
                value={paymentInfo.user_number}
                onChange={handleInputChange}
              />
              
            </div>
<div className='form-group'>
               <label htmlFor="cardNumber">E-Mail </label>
              <input
                type="email"
                className="form-control"
                id="email"
                autoComplete='off'
                name="email"
                placeholder='Enter Your Name'
                value={paymentInfo.email}
                onChange={handleInputChange}
              />
              
            </div>
            <div className='form-group'>
            <label htmlFor="cardNumber">Full Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                autoComplete='off'
                placeholder='Enter Your Address'
                value={paymentInfo.address}
                onChange={handleInputChange}
              />
              </div>
          <div className="form-group">
              <label htmlFor="cardNumber">Card Holder's Name</label>
              <input
                type="text"
                className="form-control"
                id="cardname"
                name="cardname"
                autoComplete='off'
                placeholder="Enter Card Holder's Name"
                value={paymentInfo.cardname}
                onChange={handleInputChange}
              />
            </div>
          <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="number"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                autoComplete='off'
                placeholder='Enter Card Number'
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                className="form-control"
                id="cvv"
                name="cvv"
                autoComplete='off'
                placeholder='Enter CVV'
                value={paymentInfo.cvv} 
                 onChange={handleInputChange}
              />
            </div>
            
            <br />
            <button type="submit" className="btn btn-primary">
              Submit Payment
            </button>
            <Link to="/Addtocart" className="btn btn-secondary ml-2">
              Back to Products
            </Link>
            </form>
        </div>
      </div>
    </div>


  );
};
export default Payment;