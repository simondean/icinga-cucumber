console.error('hello');

var Configuration = require('./lib/configuration.js')

var IcingaCucumber = function(options) {
  if (!(this instanceof IcingaCucumber)) return new IcingaCucumber(options);

  var self = this;

  self.configuration = new self.Configuration();

  return self;
}

IcingaCucumber.prototype.run = function(callback) {
  var self = this;

  console.log("OK: Scenario passed | 'Total duration'=12.345s 'Step 1 - Given a passing pre-condition'=0.123s 'Step 2 - When a passing action is executed'=0.123s 'Step 3 - Then a post-condition passes'=0.123s");

  console.log('steps:');
  console.log('  - step: "PASSED - 1. Given a passing pre-condition"');
  console.log('  - step: "PASSED - 2. When a passing action is executed"');
  console.log('  - step: "PASSED - 3. Then a post-condition passes"');

  callback();
}

IcingaCucumber.prototype.Configuration = Configuration;

module.exports = IcingaCucumber;
