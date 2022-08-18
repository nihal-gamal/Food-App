import React from 'react'
import {  ListGroupItem } from 'reactstrap';
// import productItem from  '../../../assets/images/product_01.1.jpg'
import '../../../styles/shopping-cart.css'
import { useSelector ,useDispatch} from 'react-redux'

import {cartActions} from '../../../store/shopping-cart/cartSlice'

const CartItem = (props) => {
  const{id,title,image01,quantity,totalPrice,price}=props.item
  console.log(props.item);
  const dispatch = useDispatch();
  const increaseQuantity=()=>{
    dispatch(cartActions.addItem({
          id ,
					title,
					image01,
					price,
					quantity,
					totalPrice
    }))
  }
  const decreaseItem=()=>{
    dispatch(cartActions.decreaseQuan(id))
  }
  const removeItem=()=>{
    dispatch(cartActions.removeItem(id))
  }
  
  return (
    <ListGroupItem className='border-0 cart__item'>
        <div className="cart__item__info d-flex gap-2">
            <img src={image01} alt='img' />
            <div className="cart__product__info w-100 d-flex align-items-center gap-4 justify-content-between">
              <div className=''>
                <h6 className='cart__product__title'>
                  {title}
                </h6>
                <p className='cart__product__price d-flex align-items-center gap-5'>{quantity}x <span>${totalPrice}</span></p>
                <div className='d-flex align-items-center justify-content-between increase__decrease__btn'>
                  <span className='increase__btn' onClick={increaseQuantity}><i className='ri-add-line'></i></span>
                  <span className='quantity'>{quantity}</span>
                  <span className='decrease__btn' onClick={decreaseItem}><i className='ri-subtract-line'></i></span>
                </div>
              </div>
                <div>
                  <span className='delete__btn' onClick={removeItem}><i className='ri-close-line'></i></span>
                </div>
            </div>
        </div>
    </ListGroupItem>
  )
}

export default CartItem