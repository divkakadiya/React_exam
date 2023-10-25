import productReducer from "./product/reducer/reducer"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    productReducer
})
export default rootReducer