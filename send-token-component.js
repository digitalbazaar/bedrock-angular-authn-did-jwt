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
  const self = this;
  self.email = '';
  self.display = {
    form: true,
    retry: false,
    success: false
  };

  self.$onInit = () => {
    if(self.showRetry) {
      _display('retry');
    }
  };

  self.show = property => {
    _display(property);
  };

  self.submit = () => {
    brDidJwtService.sendToken(self.email)
      .then(() => {
        _display('success');
      }).catch(err => {
        brAlertService.add('error', err);
      });
  };

  const _display = showProperty => {
    Object.keys(self.display).forEach(propertyName => {
      self.display[propertyName] = false;
    });
    self.display[showProperty] = true;
  };
}
