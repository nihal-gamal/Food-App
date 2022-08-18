import React,{useState} from 'react'
import { Container, Row, Col } from 'reactstrap';
import products from '../assets/fake-data/products'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from './../components/UI/common-section/CommonSection';
import '../styles/product-details.css'
import {useParams} from 'react-router-dom';
import ProductCard from '../components/UI/category/product-card/ProductCard';
import { useDispatch } from 'react-redux';
import{cartActions} from '../store/shopping-cart/cartSlice'

function FoodDetails() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReiewMsg] = useState('')
  const submittHandler=(e)=>{
    e.preventDefault()
    // setEnteredName("")
    // setEnteredEmail('')
    // setPrevImg('')
  }

  const addItemToCart = () =>{
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price
    }))
  }
  const product = products.find(product => product.id === id)
  const{title,image01,price,category,desc} = product
  const [tab, setTab] = useState('desc')
  const [prevImg, setPrevImg] = useState(product.image01)
  const relatedProducts = products.filter(item => item.category === product.category)

  





  return (
    <Helmet title='product-Details'>

      <CommonSection title={product.title}/>
      <section>
        <Container>
          <Row>
            <Col lg='2 ' md='2'>
              <div className="product__images">
                <div className="img__item mb-3" onClick={()=>setPrevImg(product.image01)}>
                  <img src={product.image01} alt= '' className='w-50'/>
                </div>
                <div className="img__item mb-3" onClick={()=>setPrevImg(product.image02)}>
                  <img src={product.image02} alt= '' className='w-50'/>
                </div>
                <div className="img__item" onClick={()=>setPrevImg(product.image03)}>
                  <img src={product.image03} alt= '' className='w-50'/>
                </div>
              </div>
            </Col>
            <Col lg='4 ' md='4'>
              <div className="product__main__img mb-5">
              <img src={prevImg} alt= '' className='w-100 mb-5 '/>
              </div>
            </Col>
            <Col lg='6 ' md='6'>
              <div className="single__product__content">
                <h2 className='product__title mb-3'>{title}</h2>
                <p className='product__price'>Price : <span>${price}</span></p>
                <p className='category mb-5'>Category : <span>{category}</span></p>
                <button className='add' onClick={addItemToCart}>Add To Cart</button>
              </div>
            </Col>
            <Col lg='12'>
              <div className="tabs d-flex align-items-center gap-5 py-2">
                <h6 className={tab ==="desc" ? 'tab__active' : ""} onClick={()=>setTab('desc')}>Description</h6>
                <h6 onClick={()=>setTab('rev')} className={tab ==="rev" ? 'tab__active' : ""}>Review</h6>
              </div>
              {
                tab === "desc" ? 
                <div className="tab__content">
                  <p>{desc}</p>
                
                </div>
              :              
              <div className="tab__form mb-5">
                <div className="review pt-5">
                  <p className="user__name mb-0">
                    {enteredName}
                  </p>
                  <p className="user__email ">
                  {enteredEmail}
                  </p>
                  <p className='review__text mt-2'>{reviewMsg}</p>
                </div>
                <div className="review">
                  <p className="user__name mb-0">
                    Jhon Deo
                  </p>
                  <p className="user__email ">
                    Jhon@gmail.com
                  </p>
                  <p className='review__text mt-2'>great product</p>
                </div>
                <div className="review">
                  <p className="user__name mb-0">
                    Jhon Deo
                  </p>
                  <p className="user__email ">
                    Jhon@gmail.com
                  </p>
                  <p className='review__text mt-2'>great product</p>
                </div>
                <form className='form' onSubmit={submittHandler}>
                  <div className='form__group'>
                    <input type='text' placeholder='Enter your name'
                    onChange={(e)=> setEnteredName(e.target.value)} 
                    value={enteredName}
                    required/>
                  </div>
                  <div className='form__group'>
                    <input type='text' placeholder='Enter your email'
                    value={enteredEmail}
                    onChange={(e)=> setEnteredEmail(e.target.value)} required/>
                  </div>
                  <div className='form__group'>
                    <textarea rows={5} type='text' placeholder='Enter your review'
                    onChange={(e)=> setReiewMsg(e.target.value)}
                    value={reviewMsg} required/>
                  </div>
                  <button className='add' type='submit'>Submit</button>

                </form>
              </div>
              }

            </Col>
            <Col lg='12' className='mb-5'>
              <h4>You might also like</h4>
            </Col>
            {
              relatedProducts.map(item => (
                <Col lg='3' md='4' sm='6'xs='6' key={item.id} className="mb-3">
                  <ProductCard item={item} />

                </Col>
              ))
            }
          </Row>
        </Container>
      
      </section>
    </Helmet>
    
  )
}

export default FoodDetails