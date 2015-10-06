'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _ngPasswordStrengthDirective = require('./ng-password-strength-directive');

var _ngPasswordStrengthDirective2 = _interopRequireDefault(_ngPasswordStrengthDirective);

var _passwordStrengthService = require('./password-strength-service');

var _passwordStrengthService2 = _interopRequireDefault(_passwordStrengthService);

exports['default'] = _angular2['default'].module('ngPasswordStrength', []).directive(_ngPasswordStrengthDirective2['default'].directiveName, _ngPasswordStrengthDirective2['default'].directiveFactory).service('passwordStrengthService', _passwordStrengthService2['default']);
module.exports = exports['default'];