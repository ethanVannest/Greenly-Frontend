import React from 'react'
import CartItems from '../components/CartItems'


export const Cart = () => {
  return (
    <div className='CartPage'>
        <div>
            <h2>Cart</h2>

            <CartItems />
        </div>
        <div>
            <div>
                <p>Subtotal (0)</p>
                <p>500</p>
            </div>
            <div>
                <button type='button'>Proceed To Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cart