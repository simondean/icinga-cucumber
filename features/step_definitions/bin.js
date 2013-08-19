var ChildProcess = require('child_process');
require('should');

module.exports = function() {
  this.When(/^executing the '(.*)' scenario with the icinga-cucumber bin$/, function(tag, callback) {
    var world = this;

    world.child = ChildProcess.spawn('node', ['../bin/icinga-cucumber', '-b', 'monkey_patches/.bin/cucumber-js', '-t', tag], {
      cwd: 'test_assets'
    });

    var stdout = [];

    world.child.stdout.on('data', function (data) {
      stdout.push(data);
    });

    world.child.on('exit', function(code, signal) {
      world.stdout = stdout.join('');
      world.exitCode = code;

      callback();
    });
  });

  this.Then(/^the exit code should be '(.*)'$/, function(exitCode, callback) {
    var world = this;

    world.exitCode.should.equal(0);

    callback();
  });

  this.Then(/^the stdout first line should match '(.*)'$/, function(firstLinePattern, callback) {
    var world = this;

    var firstLine = world.stdout.split(/\r?\n/)[0];
    firstLine.should.match(new RegExp(firstLinePattern));

    callback();
  });

  this.Then(/^the stdout second and subsequent lines should match:$/, function(expectedLines, callback) {
    var world = this;

    var extraLines = world.stdout.split(/(\r?\n)/).slice(2).join('');
    extraLines.should.equal(expectedLines.replace(/\r?\n/g, '\n') + '\n');

    callback();
  });
}
