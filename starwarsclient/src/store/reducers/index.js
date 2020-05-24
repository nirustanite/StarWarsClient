import { combineReducers } from 'redux';
import filmslist from './filmslist';
import characterslist from './characterslist'

export default combineReducers({
    filmslist,
    characterslist
})