import angular from 'angular';

import NgPasswordStrengthDirective from './ng-password-strength-directive';

export default angular.module('ngPasswordStrength', [])
  .directive(NgPasswordStrengthDirective.directiveName, NgPasswordStrengthDirective.directiveFactory);
