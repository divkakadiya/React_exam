import { all } from "redux-saga/effects";
import { getProductSaga } from "./root/rootProductSaga";

export function* rootSaga() {
    yield all([getProductSaga()])
}