import 'angular-mocks';
import PasswordStrengthModule from '/dist/ng-password-strength-module';

// Based on unit testing directives from here: https://docs.angularjs.org/guide/unit-testing
describe('NgPasswordStrength', () => {
  let $compile,
        $rootScope,
        $injector,
        linkFn;


  beforeEach(angular.mock.module(PasswordStrengthModule.name));

    let template =
        '<form name="testForm" novalidate show-validation>' +
            '<div class="form-group"><input type="text" class="form-control" id="inputPass" placeholder="Password" ng-model="model"><span class="help-block">' +
            '<div ng-password-strength="model" strength="passStrength" inner-class="progress-bar" inner-class-prefix="progress-bar-"></div>' +
            '</span></div>' +
        '</form>';

  beforeEach(inject(function(_$rootScope_, _$compile_, _$injector_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $injector = _$injector_;
    let element = angular.element(template);
    linkFn = $compile(element);
  }));

  describe('Apply Directive', () => {

    it('Makes sure the directive exists', function() {
        should.exist($injector.modules.ngPasswordStrength)
    });

    it('Returns danger for an weak password', function() {
        $rootScope.model = 'weakPassword';

        let compiled = linkFn($rootScope);

        compiled.scope().$digest();

        let progressBar = compiled.find('div[role="progressBar"');

        let expected = 'progress-bar progress-bar-danger'

        let actual = compiled.find('div')[3].className;

        actual.should.equal(expected);

        // If the value is valid, there will be no error message.

    });

    it('Returns warning for an sort of weak password', function() {
        $rootScope.model = '1BetterPassword';

        let compiled = linkFn($rootScope);

        compiled.scope().$digest();

        let progressBar = compiled.find('div[role="progressBar"');

        let expected = 'progress-bar progress-bar-warning'

        let actual = compiled.find('div')[3].className;

        actual.should.equal(expected);

        // If the value is valid, there will be no error message.

    });

    it('Returns success for a strong password', function() {
        $rootScope.model = '!Gr3@tp@$$w0rd';

        let compiled = linkFn($rootScope);

        compiled.scope().$digest();

        let progressBar = compiled.find('div[role="progressBar"');

        let expected = 'progress-bar progress-bar-success'

        let actual = compiled.find('div')[3].className;

        actual.should.equal(expected);

        // If the value is valid, there will be no error message.

    });



  });
});
