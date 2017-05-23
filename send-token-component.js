/*!
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
export default {
  bindings: {
    showRetry: '<?brShowRetry'
  },
  controller: Ctrl,
  templateUrl: 'bedrock-angular-authn-did-jwt/send-token-component.html'
};

/* @ngInject */
function Ctrl(brDidJwtService, brAlertService) {
  var self = this;
  self.email = '';
  self.display = {
    form: true,
    retry: false,
    success: false
  };

  self.$onInit = function() {
    if(self.showRetry) {
      _display('retry');
    }
  };

  self.show = function(property) {
    _display(property);
  };

  self.submit = function() {
    brDidJwtService.sendToken(self.email)
      .then(function() {
        _display('success');
      }).catch(function(err) {
        brAlertService.add('error', err);
      });
  };

  function _display(showProperty) {
    Object.keys(self.display).forEach(function(propertyName) {
      self.display[propertyName] = false;
    });
    self.display[showProperty] = true;
  }
}
