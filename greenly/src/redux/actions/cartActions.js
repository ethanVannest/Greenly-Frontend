import axios from 'axios'
import * as requestTypes from '../constants/cartConstants'

const addToCart = (id, quantity) => async (dispatch) => {
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

