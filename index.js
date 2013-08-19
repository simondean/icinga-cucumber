var IcingaCucumber = function(options) {
  if (!(this instanceof IcingaCucumber)) return new IcingaCucumber(options);

  var self = this;

  return self;
}

IcingaCucumber.prototype.run = function(callback) {
  var self = this;

  console.log("OK: Scenario passed | 'Total duration'=12.345s 'Step 1 - Given a passing pre-condition'=0.123s 'Step 2 - When a passing action is executed'=0.123s 'Step 3 - Then a post-condition passes'=0.123s");

  console.log('Steps:');
  console.log('  - Step 1: Given a passing pre-condition');
  console.log('  - Step 2: When a passing action is executed');
  console.log('  - Step 3: Then a post-condition passes');

  callback();
}

module.exports = IcingaCucumber;
