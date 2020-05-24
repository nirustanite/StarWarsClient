import * as actionTypes from './actionTypes';

// fetch all the characters 
export const fetchcharacters = (id) => ({
    apiCall: true,
    path: `/films/${id}/characters`,
    successType: actionTypes.CHARCTER_LIST
})

//fetch all the characters with sort
export const fetchcharacterssorted = (id, sort) => ({
    apiCall: true,
    path: `/films/${id}/characters?sort=${sort}`,
    successType: actionTypes.CHARCTER_LIST
})