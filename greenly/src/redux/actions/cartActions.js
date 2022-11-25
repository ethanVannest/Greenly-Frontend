import axios from 'axios'
import * as requestTypes from '../constants/cartConstants'

const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`${process.env.REACT_APP_GREENLY_BACKEND}api/products/${id}`)

    dispatch({
        type: requestTypes.addCart,
        payload: {
            product: data._id,
            name: data.name,
            price: data.price,
            image: data.image,
            stocked: data.stocked,
            qty
        }
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: requestTypes.removeCart,
        payload: id,
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}
const updateFromCart = (product,qty) => async (dispatch, getState) => {
    //make call to backend for a put route
    //id needs to be stringifyied 
    const { data } = await axios.put(`${process.env.REACT_APP_GREENLY_BACKEND}api/products/update/${product}`)

    dispatch({
        type: requestTypes.cartClear,
        payload: {
            stocked: data.stocked,
            qty
        }
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export {addToCart, removeFromCart, updateFromCart}