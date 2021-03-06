import angular from 'angular';

import NgPasswordStrenghtTemplate from './ng-password-strength.html!text';

class NgPasswordStrength {
  constructor(passwordStrengthService) {

    // Set the directive properties
    this.restrict = 'A';
    this.template = NgPasswordStrenghtTemplate;
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

  link(scope) {
    let passwordStrengthService = this.passwordStrengthService;
    scope.strength = scope.strength || passwordStrengthService.measureStrength(scope.pwd);
    scope.innerClassPrefix = scope.innerClassPrefix || '';
    scope.outerClassPrefix = scope.outerClassPrefix || '';
    scope.mode = scope.mode || 'bootstrap';
    scope.width = scope.strength + '%';

    let modes = {
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
        angular.extend(scope, modes[scope.mode]);
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
  compile(element) {
    return this.link.bind(this);
  }

  static directiveFactory(passwordStrengthService) {
    NgPasswordStrength.instance = new NgPasswordStrength(passwordStrengthService);
    return NgPasswordStrength.instance;
  }
}

NgPasswordStrength.directiveFactory.$inject = ['passwordStrengthService'];
NgPasswordStrength.directiveName = 'ngPasswordStrength';

export default NgPasswordStrength;