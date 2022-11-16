import React from 'react'
import Product from '../components/Products'


export const Home = () => {
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