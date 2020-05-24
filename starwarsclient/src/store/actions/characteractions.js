import * as actionTypes from './actionTypes';

export const fetchcharacters = (id) => ({
    apiCall: true,
    path: `/films/${id}/characters`,
    successType: actionTypes.CHARCTER_LIST
})

export const fetchcharacterssorted = (id, sort) => ({
    apiCall: true,
    path: `/films/${id}/characters?sort=${sort}`,
    successType: actionTypes.CHARCTER_LIST
})