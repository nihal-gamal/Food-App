import React from 'react'
import {Link} from 'react-router-dom';
import {ListGroup} from 'reactstrap';
import CartItem from './CartItem';
import '../../../styles/shopping-cart.css';
// import '../../styles/header.css'
import { useSelector ,useDispatch} from 'react-redux'
import {cartUiActions} from '../../../store/shopping-cart/cartUiSlice'
import {cartActions} from '../../../store/shopping-cart/cartSlice'

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  console.log(cartProducts);
  const toggleCart =()=>{
    dispatch(cartUiActions.toggle())
}
 
    return (
        <div className="cart__container">
          <ListGroup className='cart'>
            <div className="cart__close">
              <span onClick={toggleCart}><i className='ri-close-fill'></i></span>
            </div>
            <div className="cart__item_list">
                  {
                    cartProducts.length === 0 ? 
                    <h6 className='text-center mt-5'>No Items In Cart</h6> : 
                    cartProducts.map((item,i)=>(
                      <CartItem key={i} item={item}/>
                      )
                    )
                  }
            </div>
            <div className="cart__bottom d-flex align-items-center justify-content-between">
              <h6>Subtotal  : <span>${totalAmount}</span></h6>
              <button><Link to='/checkout'>Checkout</Link></button>
            </div>
          </ListGroup>
        </div>
    )
}

export default Carts