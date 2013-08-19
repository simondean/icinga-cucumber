var ChildProcess = require('child_process');

describe('the icinga-cucumber binary', function() {
  it('should return a 0 exit code when the Cucumber scenario passes', function(done) {
    var child = ChildProcess.spawn('node', ['bin/icinga-cucumber', '-b', 'monkey_patches/.bin/cucumber-js', '-t', '@passing-scenario'], {
      cwd: '.'
    });

    child.on('exit', function(code, signal) {
      code.should.equal(0);
      done();
    })
  })
});