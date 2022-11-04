import { DETAILS_INFO } from "./Constant"

export const ShowDetails = (item) => {
    return{
        type: DETAILS_INFO,
        payload: item
    }
}