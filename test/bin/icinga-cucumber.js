var ChildProcess = require('child_process');

describe('the icinga-cucumber binary', function () {
  describe('when the Cucumber scenario passes', function () {
    var child;

    beforeEach(function (done) {
      child = ChildProcess.spawn('node', ['bin/icinga-cucumber', '-b', 'monkey_patches/.bin/cucumber-js', '-t', '@passing-scenario'], {
        cwd: '.'
      });

      done();
    });

    it('should return an exit code of 0', function (done) {
      child.on('exit', function (code, signal) {
        code.should.equal(0);
        done();
      })
    })

    describe('the stdout', function () {
      var stdout, lines;

      beforeEach(function (done) {
        stdout = [];

        child.stdout.on('data', function (data) {
          stdout.push(data);
        });

        child.on('exit', function (code, signal) {
          stdout = stdout.join('');
          done();
        });
      });

      describe('the first line', function () {
        var firstLineParts;

        beforeEach(function (done) {
          var firstLine = stdout.split(/\r?\n/)[0];
          firstLineParts = firstLine.split(' | ');
          done();
        });

        it('should include the service status', function (done) {
          firstLineParts[0].should.equal('OK: Scenario passed');
          done();
        });

        it('should include the performance data', function (done) {
          firstLineParts.length.should.be.above(0);
          firstLineParts[1].should.match(/^'Total duration'=\d+\.\d{3}s 'Step 1 - Given a passing pre-condition'=\d+\.\d{3}s 'Step 2 - When a passing action is executed'=\d+\.\d{3}s 'Step 3 - Then a post-condition passes'=\d+\.\d{3}s$/);
          done();
        });

        it('should only include two parts', function (done) {
          firstLineParts.length.should.equal(2);
          done();
        });
      });

      describe('second and subsequent lines', function () {
        var extraLines;

        beforeEach(function (done) {
          extraLines = stdout.split(/(\r?\n)/).slice(2).join('');
          done();
        });

        it('should include the status of each step', function (done) {
          extraLines.should.equal('Steps:\n' +
            '  - Step 1: Given a passing pre-condition\n' +
            '  - Step 2: When a passing action is executed\n' +
            '  - Step 3: Then a post-condition passes\n');
          done();
        });
      });
    });
  });
});