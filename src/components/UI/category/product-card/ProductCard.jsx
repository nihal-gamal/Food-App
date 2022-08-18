import React from 'react'
// import prodImg from '../../../../assets/images/product_2.1.jpg'
import { Link } from 'react-router-dom';
import'../../../../styles/product-card.css'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/shopping-cart/cartSlice';

const ProductCard = (props) => {
  const dispatch = useDispatch()
  const addToCart =()=>{
    dispatch(cartActions.addItem({
          id,
					title,
					image01,
					price,
					quantity,
					totalPrice,
    }))
  }
  const{id,title,image01,price,quantity,totalPrice}=props.item
  return (
    <div className='product__item'>
      <div className="product__img">
        <img src={image01} alt="img" className='w-50'/>
      </div>
      <div className="product__content">
        <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
        <div className='d-flex align-items-center justify-content-between'>
          <span className='product__price'>${price}</span>
          <button className='add' onClick={addToCart}>Add To Catr</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard