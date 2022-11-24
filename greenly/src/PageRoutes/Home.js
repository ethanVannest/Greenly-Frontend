import React from 'react'
import Product from '../components/Products'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {indexOfProducts} from '../redux/actions/productActions'
import '../App.css'

const Home = () => {

    const dispatch = useDispatch()

    const grabProduct = useSelector(state => state.getProducts)

    const {products, loading, error} = grabProduct

    useEffect(() => {
        dispatch(indexOfProducts())
    }, [dispatch])

    return (
        <div className='homescreen'>
            <h2 className='homescreen__title'>Featured Items</h2>
            <div className='homescreen__products'>
                {loading ? (<h2> Loading...</h2>)
                : error ? (<h2> {error} </h2>)
                :products.map((product) => (<Product 
                key={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                productId={product._id}
                /> 
                ))} 
            </div>
        </div>
    )
}
export default Home
