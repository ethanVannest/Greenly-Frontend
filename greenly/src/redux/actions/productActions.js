import * as requestTypes from '../constants/productConstants'
import axios from 'axios'

const indexOfProducts = () => async (dispatch) => {
    try {
        dispatch({type: requestTypes.getProducts})

        const { data } = await axios.get(`${process.env.REACT_APP_GREENLY_BACKEND}api/products`)

        dispatch({
            type: requestTypes.getProductsSuccess,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: requestTypes.getProductsFail,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
const indexOfProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: requestTypes.getProduct})

        const { data } = await axios.get(`${process.env.REACT_APP_GREENLY_BACKEND}api/products/${id}`)

        dispatch({
            type: requestTypes.getProductSuccess,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: requestTypes.getProductsFail,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

const removeProducts = () => (dispatch) => {
    dispatch({
        type: requestTypes.getProductClear 
    })
}

export {removeProducts, indexOfProducts, indexOfProductsDetails}