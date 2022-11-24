import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import('dotenv').config()
import axios from 'axios'


import CartItems from '../components/CartItems'

import { addToCart, removeFromCart } from '../redux/actions/cartActions'

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

    const proceedToCheckoutHandler = async () => {
        for (let i in cartItems) {
            console.log(cartItems[i])
            //Grab single product
            //grab ID, Qty, Stocked
            cartItems[i].stocked = cartItems[i].stocked - parseInt(cartItems[i].qty)
            //AXIOS CALL
            console.log(cartItems[i].stocked)
            const res = await axios ({
                params: {id: cartItems[i].product},
                url: '/api/products/update/',
                method: 'PUT',
                data: {stocked: cartItems[i].stocked}
            })
            console.log('res',res)
                //url: await Process.env.REACT_APP_GREENLY_BACKEND
                //method: 'PUT'
                //data: {
            //  }, 
        }
            
    }
  return (
    <>
      <div className="cartscreen">
        <div>
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

        <div>
          <div>
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button onClick={proceedToCheckoutHandler}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart