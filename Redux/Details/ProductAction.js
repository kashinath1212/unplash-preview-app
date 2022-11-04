import { GET_PRODUCT_DETAILS, PRODUCT_DETAILS_INFO } from "./Constant"

export const ProductDetails = (pageno,query) => {
    return {
        type: PRODUCT_DETAILS_INFO,
        pageno,
        query
    }
}