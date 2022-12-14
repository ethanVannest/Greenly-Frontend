import * as requestTypes from '../constants/cartConstants'

const cartReducer = (state = { cartItems: [] }, action ) => {
    switch (action.type){
        case requestTypes.addCart:
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
        case requestTypes.removeCart:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => 
                {
                    console.log('x.product',x)
                   return x.product !== action.payload
                })
            }
            default: 
                return state
    }
    
}


export { cartReducer }