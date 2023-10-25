import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../../product/action/action";
import { getProductApi } from "../../product/api/api";
import { call, put } from 'redux-saga/effects'

export function* getManageProduct(action) {
    try {
        const res = yield call(getProductApi, action)
        const data = res.data
        const status = res.status

        if (status == 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data })
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data })
        }
    } catch (err) {
        yield put({ type: GET_PRODUCT_ERROR, err })
    }
}