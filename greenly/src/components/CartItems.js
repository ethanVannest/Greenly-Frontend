import React from 'react'
import { Link } from 'react-router-dom'
import './CartItems.css'


const CartItems = ({item, qtyChangeHandler, removeHandler}) => {
  return (
    <div className='cartitem'>
        <div className='cartitem__image'>
            <img className='image' src={item.image} alt={item.name}/>
        </div>
        <Link to={`/products/${item.product}`} className='cartItem__name'>
            <p>{item.name}</p>
        </Link>

        <p className='cartitem__price'>${item.price}</p>
        <div className='buttonDiv'>
        <select 
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className='cartItem__select'
        > 
        {[...Array(item.stocked).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
        </select>
        <button className='cartItem__deleteBtn' onClick={() => removeHandler(item.product)}>
            <i className='fas fa-trash'></i>
        </button>
        </div>
    </div>
  )
}

export default CartItems