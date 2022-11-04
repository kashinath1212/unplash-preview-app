import {combineReducers} from 'redux'
import { ProductReducer } from './Details/ProductReducer'
import { DetailReducer } from './Details/Reducer'

export const rootReducer = combineReducers({
    details: DetailReducer,
    products: ProductReducer
})