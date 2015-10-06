# ng-password-strength

Password strength checker wrapped in an angular directive
Based on:

*	[Bruno Scopelliti's Blog Post on Testing Password Strength in Angular][bruno]
*	[The Password Meter][meter]
* [Salvador Subarrocas Initial Angular Directive Implemention][upstream]

  [bruno]: http://blog.brunoscopelliti.com/angularjs-directive-to-test-the-strength-of-a-password
  [meter]: http://www.passwordmeter.com
  [upstream]: https://github.com/subarroca/ng-password-strength

## Examples
See `app/index.html` in the respository.
[Live example] [live-example]
[live-example]: http://subarroca.github.io/ng-password-strength/

## Usage

1. JSPM install github:billrawlinson/ng-password-strength

Seriously, use JSPM it makes your life much easier.  This module is set up to import lodash already so you don't need to make it globally avialable.



2. Set `ng-password-strength` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ngPasswordStrength'])
  ```

3. Add ng-password-strength directive to the wanted element, example:
  ```html
  <div ng-password-strength="model.password"> .... </div>
  ```

* Accepted addtional params:

  * strength: value returned [0-100]
  * mode: 'foundation' or 'bootstrap'. Sets inner-class, inner-class-prefix, outter-class-prefix. No need to set one by one.  Bootstrap is default
  * inner-class: inner bar class (i.e. 'progress-bar')
  * inner-class-prefix: inner bar class prefix (i.e. 'progress-bar-' => 'progress-bar-success')
  * outter-class-prefix: root element class prefix (i.e. 'progress-bar-' => 'progress-bar-success')


## Formula
Values limited to [0-100]

* Pros:

  * Number of Characters `+ n*4`
  * Uppercase Letters (if any uppercase)  `+ (len-n)*2`
  * Lowercase Letters (if any lowercase)  `+ (len-n)*2`
  * Numbers (if any letter)  `+ n*4`
  * Symbols  `+ n*6`
  * Middle Numbers or Symbols  `+ n*2`
  * Requirements `+ n*2`

* Cons:

  * Letters Only `- n`
  * Numbers Only `- n`
  * Repeat Characters (Case Insensitive) `- (n/len) *10`
  * Consecutive Uppercase Letters  `- n*2`
  * Consecutive Lowercase Letters  `- n*2`
  * Consecutive Numbers  `- n*2`
  * Sequential Letters (3+)  `- n*3`
  * Sequential Numbers (3+)  `- n*3`
  * Sequential Symbols (3+)  `- n*3`

## TODO
Create tests

## Changelog
### v0.2.0
* added dependency: lodash
* removed dependencies: bootstrap, ng-lodash
* added classes for further customization
* added modes for faster customization: [foundation, bootstrap]

### v0.1.0
* added dependency: ng-lodash
* removed dependencies: underscore.string
* changed compass to node-sass

### v0.0.8
* lodash update

### v0.0.7
* strength value feedback

### v0.0.6
* change underscore to lodash

### v0.0.1
* formula-based value calculations
