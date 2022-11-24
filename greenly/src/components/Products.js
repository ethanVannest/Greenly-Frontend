import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const Product = ({name, price, description, productId, image}) => {
  return (
    <div className='product'>
        <img src={image} alt= {name}/>
        <div className='product__info'>
            <p className='info__name'>{name}</p>
            <p className='info__description'>{description}</p>
            <p className='info__price'>${price}</p>
        </div>
        < Link to={`/products/${productId}`} className="info__button">View</Link>
    </div>
  )
}

export default Product