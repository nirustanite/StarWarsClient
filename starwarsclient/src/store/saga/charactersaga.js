import request from 'superagent';
import {baseUrl} from '../../constants';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';

export function* getcharacterslist(action){
    try{
        const response = yield request.get(`${baseUrl}/films/${action.id}/characters`);
        yield put(actions.characterlist(response.body));
    }
    catch(error) {
        console.error(error)
    }
 }
 