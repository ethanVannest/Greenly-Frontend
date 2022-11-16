import React from 'react'
import { Link } from 'react-router-dom'


const Product = () => {
  return (
    <div>
        <img src="https://media.direct.playstation.com/is/image/sierialto/PS5-front-with-dualsense" alt="Product"/>
        <div className='productInfo'>
            <p className='productTitle'>Product</p>
            <p className='productDescription'>
            ry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            </p>
            <p className='productPrice'>$500</p>
        </div>
        < Link to={`/products/${1111}`}>View</Link>
    </div>
  )
}

export default Product