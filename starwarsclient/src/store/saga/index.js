import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getfilmslist } from './filmsaga';
import { getcharacterslist } from './charactersaga';

export function* watchgetfilmslist(){
    yield takeEvery(actionTypes.FETCH_FILMS, getfilmslist);
}

export function* watchgetcharacterslist(){
    yield takeEvery(actionTypes.FETCH_CHARACTERS, getcharacterslist);
}
