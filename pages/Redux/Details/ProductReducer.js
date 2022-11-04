import { GET_PRODUCT_DETAILS, PRODUCT_DETAILS_INFO } from "./Constant"

const initalState = {
    data: ''
}

export const ProductReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAILS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}