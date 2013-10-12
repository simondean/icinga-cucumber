var ChildProcess = require('child_process');

module.exports = function() {
  this.When(/^executing the '(.*)' scenario with the icinga-cucumber bin$/, function(tag, callback) {
    if (isDryRun()) { return callback(); }

    var world = this;

    world.child = ChildProcess.spawn('node', ['../bin/icinga-cucumber', '-b', 'monkey_patches/.bin/cucumber-js', '-t', tag], {
      cwd: 'test_assets'
    });

    var stdout = [];

    world.child.stdout.on('data', function (data) {
      stdout.push(data);
    });

    world.child.on('exit', function(code) {
      world.stdout = stdout.join('');
      world.exitCode = code;

      callback();
    });
  });

  this.Then(/^the exit code should be '(.*)'$/, function(exitCode, callback) {
    if (isDryRun()) { return callback(); }

    var world = this;

    if (world.exitCode !== exitCode) {
      callback({ message: 'Unexpected value', expected: exitCode, actual: world.exitCode});
    }
    else {
      callback();
    }
  });

  this.Then(/^the stdout first line should match '(.*)'$/, function(firstLinePattern, callback) {
    if (isDryRun()) { return callback(); }

    var world = this;

    var firstLine = world.stdout.split(/\r?\n/)[0];

    if (!new RegExp(firstLinePattern).test(firstLine)) {
      callback({ message: 'Unexpected value', expectedPattern: firstLinePattern, actual: firstLine });
    }
    else {
      callback();
    }
  });

  this.Then(/^the stdout second and subsequent lines should match:$/, function(expectedLines, callback) {
    if (isDryRun()) { return callback(); }

    var world = this;

    var extraLines = world.stdout.split(/(\r?\n)/).slice(2).join('');
    expectedLines = expectedLines.replace(/\r?\n/g, '\n') + '\n';

    if (extraLines !== expectedLines) {
      callback(JSON.stringify({ message: 'Unexpected value', expected: expectedLines, actual: extraLines }));
    }
    else {
      callback();
    }
  });
};

function isDryRun() {
  return process.argv.indexOf('--dry-run') !== -1;
}