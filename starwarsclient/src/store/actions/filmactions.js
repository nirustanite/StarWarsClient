import * as actionTypes from './actionTypes';

export const fetchfilms = (data) => ({
    type: actionTypes.FETCH_FILMS,
    data
})

export const filmlist = (data) => ({
    type: actionTypes.FILM_LIST,
    data
})
