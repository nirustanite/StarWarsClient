import * as actionTypes from './actionTypes';

export const fetchcharacters = (id) => ({
    type: actionTypes.FETCH_CHARACTERS,
    id
})

export const characterlist = (data) => ({
    type: actionTypes.CHARCTER_LIST,
    data
})
