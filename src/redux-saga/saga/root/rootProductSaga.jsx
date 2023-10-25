import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PROGRESS } from "../../product/action/action";
import { getManageProduct } from "../manageProduct/manageProduct";

export function* getProductSaga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, getManageProduct)
}