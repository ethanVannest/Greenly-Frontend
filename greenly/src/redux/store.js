import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import { cartReducer } from './reducers/cartReducers'
import { productShowReducer, getProductsReducer } from './reducers/productReducers'


const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    showProducts: productShowReducer
})

// const middleware = {thunk}

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store