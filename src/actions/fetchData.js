import fetch from 'isomorphic-fetch';


var PROXY_URL = 'https://cors-anywhere.herokuapp.com/',
    TARGET_URL = 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';

export const REQUEST_EARTHQUAKES = 'REQUEST_EARTHQUAKES';
function requestData(data) {
  return {
    type: REQUEST_EARTHQUAKES,
    data: data
  }
}

export const RECEIVE_EARTHQUAKES = 'RECEIVE_EARTHQUAKES';
function receiveData(data) {
  return {
    type: RECEIVE_EARTHQUAKES,
    data: data
  }
}

export function fetchData() {
  return function (dispatch) {
    dispatch(requestData())
    return fetch(PROXY_URL + TARGET_URL)
     .then(response => response.json())
     .then(json => dispatch(receiveData(json)))
     .catch(error => console.log(error));
  }
};
