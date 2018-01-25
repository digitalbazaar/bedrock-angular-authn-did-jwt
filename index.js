/*
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import DidJwtService from './did-jwt-service.js';
import SendTokenComponent from './send-token-component.js';

var module = angular.module('bedrock.authn-did-jwt', ['ngMaterial']);

module.service('brDidJwtService', DidJwtService);
module.component('brAuthnDidJwtSendToken', SendTokenComponent);
