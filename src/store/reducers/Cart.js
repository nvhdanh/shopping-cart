const initialState = {
    products: [],
    sum: 0,
    productsInCart: [],
    totalPrice: 0
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            action.payload['quantity'] = 1
            return {
                ...state,
                sum: state.sum + 1,
                products: [...state.products, action.payload],
                productsInCart: [...new Set([...state.productsInCart, action.payload.id])],
                totalPrice: state.totalPrice + action.payload.price
            }
        case 'INCREASE_CART':
            return {
                ...state,
                sum: state.sum + 1,
                products: state.products.map(product => product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product),
                totalPrice: state.totalPrice + action.payload.price

            }
        case 'DECREASE_CART':
            return {
                ...state,
                sum: state.sum - 1,
                products: state.products.map(product => product.id === action.payload.id ? { ...product, quantity: product.quantity - 1 } : product),
                totalPrice: state.totalPrice - action.payload.price

            }
        case 'DELETE_CART':
            let i1 = state.products.findIndex(product => product.id === action.payload.id)
            let i2 = state.productsInCart.findIndex(index => index === action.payload.id)
            return {
                ...state,
                sum: state.sum - 1,
                products: [
                    ...state.products.slice(0, i1),
                    ...state.products.slice(i1 + 1)
                ],
                productsInCart: [
                    ...state.productsInCart.slice(0, i2),
                    ...state.productsInCart.slice(i2 + 1)
                ],
                totalPrice: state.totalPrice - action.payload.price

            }
        default:
            return state
    }
}

export default cartReducer