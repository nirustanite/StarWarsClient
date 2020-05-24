import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getfilmslist } from './filmsaga';

export function* watchgetfilmslist(){
    yield takeEvery(actionTypes.FETCH_FILMS, getfilmslist);
}
