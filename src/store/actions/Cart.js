export const addCart = payload => {
    return {
        type: "ADD_CART",
        payload
    }
}

export const increaseCart = payload => {
	return {
		type:'INCREASE_CART',
		payload
	}
}

export const decreaseCart = payload => {
	return {
		type:'DECREASE_CART',
		payload
	}
}

export const deleteCart = payload => {
	return {
		type:'DELETE_CART',
		payload
	}
}