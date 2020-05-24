import request from 'superagent';
import { baseUrl } from '../../constants';

export const API_LOADING = '@API/LOADING';
export const API_DONE = '@API/DONE';
export const API_ERROR = '@API/ERROR';

const defaults = {
  apiCall: true,
  method: 'get',
  path: '/',
  body: null,
  loadingType: API_LOADING,
  errorType: API_ERROR,
  doneType: API_DONE,
  successType: '@API/SUCCESS_NOT_HANDLED',
}

export default store => next => action => {
  if (!action.apiCall) {
    return next(action);
  }

  const requestAction = { ...defaults, ...action};

  const {method, path, body} = requestAction;

  store.dispatch({
    type: requestAction.loadingType,
    request: requestAction,
  });

  // making a request to the Api
  request[method](`${baseUrl}${path}`)
    .send(body)
    .then(response => {
      store.dispatch({
        type: requestAction.successType,
        payload: response.body
      });

      store.dispatch({
        type: requestAction.doneType,
        request: requestAction
      });
    })
    .catch(err => {
      console.error(err);

      next({
        type: requestAction.errorType,
        error: err.message,
        request: requestAction,
      });
    });
}