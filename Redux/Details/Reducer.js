import { DETAILS_INFO } from "./Constant";
let item
if (typeof window !== 'undefined') {
    const details = localStorage.getItem('itemDetail')
    item = JSON.parse(details)
}

const initial = {
    itemDetails: item,
    pageno: 1,
    query: 'dog'
}

export const DetailReducer = (state = initial, action) => {
    switch (action.type) {
        case DETAILS_INFO:
            return {
                ...state,
                itemDetails: action.payload,
                pageno: action.pageno,
                query: action.query
            }
        default:
            return state
    }
}