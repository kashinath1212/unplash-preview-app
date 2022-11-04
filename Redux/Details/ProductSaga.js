import axios from "axios";
import { put, takeEvery } from "redux-saga/effects"
import { GET_PRODUCT_DETAILS, PRODUCT_DETAILS_INFO } from "./Constant"

function* getProduts(props) {
    const data = yield axios.get(`https://api.unsplash.com/search/photos?page=${props?.pageno}&per_page=30&query=${props?.query}&client_id=fNZxU3j0BwP87u2Fco6aFSZOkn-4S9kmkx9bGH5nq3s`)
    yield put({type: GET_PRODUCT_DETAILS, payload: data})
}

function* ProductSaga() {
    yield takeEvery(PRODUCT_DETAILS_INFO, getProduts)
}

export default ProductSaga