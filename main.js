/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([
  'angular',
  './did-jwt-service',
  './send-token-component'
], function(angular) {

'use strict';

var module = angular.module('bedrock.authn-did-jwt', []);

Array.prototype.slice.call(arguments, 1).forEach(function(register) {
  register(module);
});

});
