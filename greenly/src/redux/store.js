import { configureStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({

})

const middleware = {thunk}

const store = configureStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store