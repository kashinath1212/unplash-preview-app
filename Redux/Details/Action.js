import { DETAILS_INFO } from "./Constant"

export const ShowDetails = (item, pageno, query) => {
    return{
        type: DETAILS_INFO,
        payload: item,
        pageno,
        query
    }
}