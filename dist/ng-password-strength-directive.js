'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _ngPasswordStrengthHtmlText = require('./ng-password-strength.html!text');

var _ngPasswordStrengthHtmlText2 = _interopRequireDefault(_ngPasswordStrengthHtmlText);

var NgPasswordStrength = (function () {
  function NgPasswordStrength(passwordStrengthService) {
    _classCallCheck(this, NgPasswordStrength);

    // Set the directive properties
    this.restrict = 'A';
    this.template = _ngPasswordStrengthHtmlText2['default'];
    this.passwordStrengthService = passwordStrengthService;
    this.scope = {
      pwd: '=ngPasswordStrength',
      strength: '=strength',
      innerClassPrefix: '@?',
      outerClassPrefix: '@?',
      innerClass: '@?',
      mode: '@?' // mode is set via attribute
    };

    //this.controller = 'PeopleListController as ctrl';
  }

  _createClass(NgPasswordStrength, [{
    key: 'link',
    value: function link(scope) {
      var passwordStrengthService = this.passwordStrengthService;
      scope.strength = scope.strength || passwordStrengthService.measureStrength(scope.pwd);
      scope.innerClassPrefix = scope.innerClassPrefix || '';
      scope.outerClassPrefix = scope.outerClassPrefix || '';
      scope.mode = scope.mode || 'bootstrap';
      scope.width = scope.strength + '%';

      var modes = {
        foundation: {
          innerClass: 'meter'
        },
        bootstrap: {
          innerClass: 'progress-bar',
          innerClassPrefix: 'progress-bar-'
        }
      };
      function getClass(s) {
        switch (Math.round(s / 33)) {
          case 0:
          case 1:
            return {
              outer: scope.outerClassPrefix + 'danger',
              inner: scope.innerClassPrefix + 'danger'
            };
          case 2:
            return {
              outer: scope.outerClassPrefix + 'warning',
              inner: scope.innerClassPrefix + 'warning'
            };
          case 3:
            return {
              outer: scope.outerClassPrefix + 'success',
              inner: scope.innerClassPrefix + 'success'
            };
        }
      }
      scope.$watch('mode', function () {
        if (scope.mode === 'bootstrap' || scope.mode === 'foundation') {
          _angular2['default'].extend(scope, modes[scope.mode]);
          return;
        }
      });

      scope.$watch('pwd', function () {
        scope.strength = passwordStrengthService.measureStrength(scope.pwd);
        scope.width = scope.strength + '%';
        scope.valueClass = getClass(scope.strength);
      });
    }

    // if you don't do this then the link won't have a "this"
    // and thus won't have access to the accountService
  }, {
    key: 'compile',
    value: function compile(element) {
      return this.link.bind(this);
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory(passwordStrengthService) {
      NgPasswordStrength.instance = new NgPasswordStrength(passwordStrengthService);
      return NgPasswordStrength.instance;
    }
  }]);

  return NgPasswordStrength;
})();

NgPasswordStrength.directiveFactory.$inject = ['passwordStrengthService'];
NgPasswordStrength.directiveName = 'ngPasswordStrength';

exports['default'] = NgPasswordStrength;
module.exports = exports['default'];