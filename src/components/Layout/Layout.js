import React from 'react'
import Routers from '../../routes/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Carts from '../UI/cart/Carts';
import { useSelector } from 'react-redux';
import ScrollTop from './../ScrollToTop';

const Layout = () => {
  const cartIsVisible = useSelector(state => state.cartUi.cartIsVisible)
  
  return (
    <div>
        <Header/>
        {
          cartIsVisible &&
        <Carts/>
        }
        <div>
          <ScrollTop>
            <Routers/>
          </ScrollTop>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout