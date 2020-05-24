import request from 'superagent';
import {baseUrl} from '../../constants';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';

export function* getfilmslist(action){
    try{
        const response = yield request.get(`${baseUrl}/films`).query({searchterm: action.data});
        yield put(actions.filmlist(response.body));
    }
    catch(error) {
        console.error(error)
    }
 }
 