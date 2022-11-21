import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { indexOfProductsDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'
import { useParams } from 'react-router-dom'


//DOES NOT READ THE VALUE OF PARAMS FOR AN ID--------------
const ShowProduct = ({match, history}) => {
    
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    
    
    const individualProduct = useSelector(state => state.showProducts)
    
    const {loading, product, error} = individualProduct
    
    const params = useParams()
    useEffect(() => {
    if (product && params.id !== product._id) {
    dispatch(indexOfProductsDetails(params.id))
    }
}, [dispatch, product, match])

// ----------------------
  return (
    <div className='ShowProductPage'>
        {loading ? <h2>Loading...</h2> 
        : error ? <h2>{error}</h2> 
        : (
            <>
             <div>
            <div>
            <img src={product.image
            }alt={product.name}
            />
            </div>

            <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </div>
        </div>
        
        <div>
            <div>
                <p>
                    Price: <span>{product.price}</span>
                </p>
                <p>
                    Status: <span>{product.stocked > 0 ? "In Stock" : "Out of Stock"}</span>
                </p>
                <p>
                    Quantity: 
                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(product.stocked).keys()].map((x) => (
                            <option key={x + 1} value={x+1}>{x + 1}</option>
                        ))}
                    </select>
                </p>
                <p>
                    <button type='button'>Add To Cart</button>
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