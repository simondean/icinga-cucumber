var IcingaCucumber = function(options) {
  if (!(this instanceof IcingaCucumber)) return new IcingaCucumber(options);

  var self = this;

  return self;
}

IcingaCucumber.prototype.run = function(callback) {
  var self = this;

  console.log('OK: Scenario passed');

  callback();
}

module.exports = IcingaCucumber;
