import * as request from 'superagent';

function getApiLink(endpoint) {
  return API_Config.root + '/' + API_Config.urlPrefix + '/' + endpoint;
}

export function get(endpoint) {
  return request
    .get(getApiLink(endpoint))
    .accept('application/json')
    .set('X-WP-Nonce', API_Config.nonce);
}

export function post(endpoint) {
  return request
    .post(getApiLink(endpoint))
    .accept('application/json')
    .set('X-WP-Nonce', API_Config.nonce);
}