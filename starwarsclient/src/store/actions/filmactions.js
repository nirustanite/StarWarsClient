import * as actionTypes from './actionTypes';

//fetch all the films
export const fetchfilms = (id) => ({
    apiCall: true,
    path: `/films?searchterm=${id}`,
    successType: actionTypes.FILM_LIST
})