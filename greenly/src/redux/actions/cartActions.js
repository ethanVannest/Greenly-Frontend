import axios from 'axios'
import * as requestTypes from '../constants/cartConstants'

const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: requestTypes.addCart,
        payload: {
            product: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            stocked: data.stocked,
            quantity
        }
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: requestTypes.cartClear,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export {addToCart, removeFromCart}