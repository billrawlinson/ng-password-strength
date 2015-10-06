import angular from 'angular';

import NgPasswordStrengthDirective from './ng-password-strength-directive';
import passwordStreghtService from './password-strength-service';

export default angular.module('ngPasswordStrength', [])
  .directive(NgPasswordStrengthDirective.directiveName, NgPasswordStrengthDirective.directiveFactory)
  .service('passwordStrengthService', passwordStreghtService);
