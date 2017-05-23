/*!
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
/* @ngInject */
export default function factory($http, config) {
  var service = {};

  /**
   * Get a JWT token for the currently authenticated identity.
   *
   * @param options the options to use:
   *   [aud] the base URL for the intented token recipient (e.g. https://x.com).
   *
   * @return a Promise that resolves to a JWT containing identity's DID.
   */
  service.getToken = function(options) {
    return $http({
      method: 'POST',
      url: config.data['authn-did-jwt'].token.basePath,
      data: options
    }).then(function(response) {
      return response.data.token;
    });
  };

  service.login = function(token) {
    return $http({
      method: 'POST',
      url: config.data['authn-did-jwt'].login.basePath,
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(function(response) {
      return response.data;
    });
  };

  service.sendToken = function(email) {
    return $http.post(
      config.data['authn-did-jwt'].token.basePath, {email: email});
  };

  return service;
}
