import * as requestTypes from '../constants/cartConstants'

const cartReducer = (state = { cartItems: [] }, action ) => {
    if (action.type !== requestTypes.addCart){
        return state
    } else {
        const item = action.payload

        const existItem = state.cartItems.find((x) => x.product === item.product)
        if(existItem) {
            return{
                ...state,
                cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x)
            }
        } else {
            return{
                ...state,
                cartItems: [...state.cartItems, item]
            }
        }
    }

}