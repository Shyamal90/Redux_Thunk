import {combineReducers} from 'redux'
import { productReducer,selectedProductReducer } from './productReducer'

export const rootReducers = combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer
})