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
            <img src="https://media.direct.playstation.com/is/image/sierialto/PS5-front-with-dualsense" alt="Product"/>
            </div>

            <div>
                <p>Product 1</p>
                <p>Price: 500</p>
                <p>Description: dfasdf asffdds snfkn sdfi wwef sdif ao soaisfdiohsafd iasd </p>
            </div>
        </div>
        
        <div>
            <div>
                <p>
                    Price: <span>$500</span>
                </p>
                <p>
                    Status: <span>In Stock</span>
                </p>
                <p>
                    Quantity: 
                    <select>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
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