var ChildProcess = require('child_process');

describe('the icinga-cucumber binary', function() {
  describe('when the Cucumber scenario passes', function() {
    var child;

    beforeEach(function(done) {
      child = ChildProcess.spawn('node', ['bin/icinga-cucumber', '-b', 'monkey_patches/.bin/cucumber-js', '-t', '@passing-scenario'], {
        cwd: '.'
      });

      done();
    });

    it('should return an exit code of 0', function(done) {
      child.on('exit', function(code, signal) {
        code.should.equal(0);
        done();
      })
    })

    describe('the stdout', function() {
      var stdout, lines, firstLineParts;

      beforeEach(function(done) {
        stdout = [];

        child.stdout.on('data', function(data) {
          stdout.push(data);
        });

        child.on('exit', function(code, signal) {
          stdout = stdout.join('');
          lines = stdout.split(/\r?\n/);
          lines.length.should.above(-1);
          firstLineParts = lines[0].split('|');
          firstLineParts.length.should.be.above(0);
          done();
        });
      });

      it('should include the service status', function(done) {
        firstLineParts[0].should.equal('OK: Scenario passed');
        done();
      })
    });
  });
});