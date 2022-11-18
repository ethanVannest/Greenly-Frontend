import React from 'react'
import { Link } from 'react-router-dom'


const CartItems = () => {
  return (
    <div>
        <div>
            <img src="https://media.direct.playstation.com/is/image/sierialto/PS5-front-with-dualsense" alt="Product"/>
        </div>
        <Link to={`/products/${1111}`}>
            <p>Product 1</p>
        </Link>

        <p>500</p>
        <select> 
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
        </select>
        <button>
            <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default CartItems