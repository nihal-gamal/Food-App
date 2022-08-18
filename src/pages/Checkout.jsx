import React,{useState} from 'react'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import '../styles/checkout.css';

function Checkout() {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const shipping = 30
  const totalAmount = cartTotalAmount + shipping 
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredNum, setEnteredNum] = useState('')
  const [enteredCountry, setEnteredCountry] = useState('')
  const [enteredCity, setEnteredCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  

  const submittHandler=(e)=>{
    e.preventDefault()
    const userShippingAdress ={
      name:enteredName,
      email:enteredEmail,
      number:enteredNum,
      country:enteredCountry,
      city:enteredCity,
      postalCode:postalCode
    }
    console.log(userShippingAdress);
  
  }
  
  return (
    <Helmet title='checkout'>
      <CommonSection title='checkout'/>
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className='mb-4'>Shipping Address</h6>
              <form className="checkout__form mb-5" onSubmit={submittHandler}>
                  <div className="form__group">
                    <input type='text' placeholder='Enter your name'
                    required
                    onChange={(e)=>setEnteredName(e.target.value)}/>
                  </div>
                  <div className="form__group">
                    <input type='email' placeholder='Enter your email'
                    required
                    onChange={(e)=>setEnteredEmail(e.target.value)}/>
                  </div>
                  <div className="form__group">
                    <input type='number' placeholder='Phone number'
                    required
                    onChange={(e)=>setEnteredNum(e.target.value)}/>
                  </div>
                  <div className="form__group">
                    <input type='text' placeholder='Country'
                    required
                    onChange={(e)=>setEnteredCountry(e.target.value)}/>
                  </div>
                  <div className="form__group">
                    <input type='text' placeholder='City'
                    required
                    onChange={(e)=>setEnteredCity(e.target.value)}/>
                  </div>
                  <div className="form__group">
                    <input type='number' placeholder='Postal code'
                    required
                    onChange={(e)=>setPostalCode(e.target.value)}/>
                  </div>
                  <button className='add mt-3'>Payment</button>
              </form>
            </Col>
            <Col lg='4'md='6'>
              <div className='checkout__bell'>
              <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal : <span>${cartTotalAmount}</span></h6>
              <h6 className='d-flex align-items-center justify-content-between mb-3'>Shipping : <span>${shipping}</span></h6>
              <div className='checkout__total'>
                <h5 className='d-flex align-items-center justify-content-between'>
                Total : <span>${totalAmount}</span>
                </h5>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout