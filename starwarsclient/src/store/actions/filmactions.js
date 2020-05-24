import * as actionTypes from './actionTypes';

export const fetchfilms = (id) => ({
    apiCall: true,
    path: `/films?searchterm=${id}`,
    successType: actionTypes.FILM_LIST
})