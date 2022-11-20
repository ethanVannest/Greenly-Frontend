import React from 'react'
import Product from '../components/Products'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {indexOfProducts} from '../redux/actions/productActions'


const Home = () => {

    const dispatch = useDispatch()

    const grabProduct = useSelector(state => state.grabProduct)

    // const {products, loading, error} = grabProduct

    useEffect(() => {
        dispatch(indexOfProducts())
    }, [dispatch])

    return (
        <div className='HomePage'>Home
            <h2>Featured Items</h2>
            <div>
                <Product />
            </div>
        </div>
    )
}

export default Home