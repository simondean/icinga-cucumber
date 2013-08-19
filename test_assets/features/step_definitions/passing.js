module.exports = function() {
  this.Given(/^a passing pre-condition$/, function(callback) {
    callback();
  });

  this.When(/^a passing action is executed$/, function(callback) {
    callback();
  });

  this.Then(/^a post-condition passes$/, function(callback) {
    callback();
  });
}
