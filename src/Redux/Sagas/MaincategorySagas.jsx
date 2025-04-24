import {takeEvery} from "redux-saga/effects"
import { CREATE_MAINCATEGORY, CREATE_MAINCATEGORY_RED } from "../Constants"
import { createRecord } from "./Services/index"

function* createSaga (payload){
    let response = yield createRecord("maincategory",payload)
   yield put({type:CREATE_MAINCATEGORY_RED,payload:response})
}

function* getSaga (){
    let response = yield createRecord("maincategory")
   yield put({type:CREATE_MAINCATEGORY_RED,payload:response})
}

export default function* maincategorySagas(){
    yield takeEvery(CREATE_MAINCATEGORY, createSaga)
}