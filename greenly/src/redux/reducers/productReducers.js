import * as requestTypes from '../constants/productConstants'

const getProductsReducer = (state = { products: [] }, action ) => {
    switch (action.type){
        case requestTypes.getProducts:
            return {
                loading: true,
                products: []
            }
        case requestTypes.getProductsSuccess:
            return {
                loaidng: false,
                products: action.payload
            }
        case requestTypes.getProductsFail:
            return{
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}

const productShowReducer = (state = { product: {}}, action) => {
    switch(action.type) {
        case requestTypes.getProduct:
            return{
                loading: true,

            }
        case requestTypes.getProductSuccess:
            return {
                loading: false,
                product: action.payload
            }
        case requestTypes.getProductFail:
            return {
                loading: false,
                error: action.payload
            }
        case requestTypes.getProductClear:
            return{
                product: {},
            }
        default:
            return state
    }
}

export {getProductsReducer, productShowReducer}