import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { indexOfProductsDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'
import { useParams, useNavigate } from 'react-router-dom'

import '../App.css'


const ShowProduct = ({match, history}) => {
    
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    
    
    const individualProduct = useSelector(state => state.showProducts)
    
    const {loading, product, error} = individualProduct
    
    const params = useParams()

    const navigate = useNavigate()

    useEffect(() => {
    if (product && params.id !== product._id) {
    dispatch(indexOfProductsDetails(params.id))
    }
}, [dispatch, product, match])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        navigate('/cart')
    }
  return (
    <div className='ShowProductPage'>
        {loading ? <h2>Loading...</h2> 
        : error ? <h2>{error}</h2> 
        : (
            <>
             <div className='cartscreen'>
                <div className='product_Right'>
            <img className='product' src={product.image
            }alt={product.name}
            />
            </div>

            <div>
                <p className='product_Name'>{product.name}</p>
                <p className='product_Description'>{product.description}</p>
            </div>
        </div>
        
        <div>
            <div>
                <div className='product_info'>
                <p className='product_price'>
                    Price: $<span>{product.price}</span>
                </p>
                <p className='product_status'>
                    Status: <span>{product.stocked > 0 ? "In Stock" : "Out of Stock"}</span>
                </p>
                <p className='quantity_Dropdown'>
                    Quantity: 
                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(product.stocked).keys()].map((x) => (
                            <option key={x + 1} value={x+1}>{x + 1}</option>
                            ))}
                    </select>
                </p>
                    </div>
                <p className='addToCart'>
                    {product.stocked > 0 ? <button className='addToCartButton'  type='button' onClick={addToCartHandler}>Add To Cart</button> : "Out of Stock"
                }
                </p>
            </div>
        </div>
            </>
        )
        }
       
    </div>
  )
}

export default ShowProduct