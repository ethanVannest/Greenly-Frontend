import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({name, price, description, productId, image}) => {
  return (
    <div>
        <img src={image} alt= {name}/>
        <div className='productInfo'>
            <p className='productTitle'>{name}</p>
            <p className='productDescription'>{description}</p>
            <p className='productPrice'>${price}</p>
        </div>
        < Link to={`/products/${productId}`}>View</Link>
    </div>
  )
}

export default Product