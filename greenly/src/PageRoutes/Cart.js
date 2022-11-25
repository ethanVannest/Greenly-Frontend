import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import('dotenv').config()
import axios from 'axios'


import CartItems from '../components/CartItems'

import { addToCart, removeFromCart, updateFromCart } from '../redux/actions/cartActions'

export const Cart = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    useEffect(() => {}, []);
  
    const qtyChangeHandler = (id, qty) => {
      dispatch(addToCart(id, qty));
    };
  
    const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
    };
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };
  
    const getCartSubTotal = () => {
      return cartItems
        .reduce((price, item) => price + item.price * item.qty, 0)
        .toFixed(2);
    };

    const proceedToCheckoutHandler = (id, qty) => {
        for (let i in cartItems) {
            cartItems[i].stocked = cartItems[i].stocked - parseInt(cartItems[i].qty)
            //AXIOS CALL
            dispatch(updateFromCart(cartItems[i].product, qty))
            console.log('total Stock',cartItems[i].stocked)
        }
            
    }
  return (
    <>
      <div className="cartscreen">
        <div className='cartscreen__left'>
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItems
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className='cartscreen__right'>
          <div className='cartscreen__info'>
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button className='checkoutButton' onClick={proceedToCheckoutHandler}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart