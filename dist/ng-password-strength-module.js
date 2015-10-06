'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _ngPasswordStrengthDirective = require('./ng-password-strength-directive');

var _ngPasswordStrengthDirective2 = _interopRequireDefault(_ngPasswordStrengthDirective);

exports['default'] = _angular2['default'].module('ngPasswordStrength', []).directive(_ngPasswordStrengthDirective2['default'].directiveName, _ngPasswordStrengthDirective2['default'].directiveFactory);
module.exports = exports['default'];