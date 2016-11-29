var mocha = require('mocha');
module.exports = MyReporter;

function MyReporter(runner) {
  mocha.reporters.Base.call(this, runner);
  var summarises = 0;
  var passes = 0;
  var pendings = 0;
  var failures = 0;

  runner.on('test end', function(test) {
    summarises++
    console.log('TESTEND: %s', test.title);
    console.log('RESULT1: pass: %s; pending: %s; fail: %s; all: %s', passes, pendings, failures, summarises);
  });

  runner.on('pass', function(test) {
    passes++;
    console.log('PASSEDTEST: %s', test.title);
    console.log('RESULT2: pass: %s; pending: %s; fail: %s; all: %s', passes, pendings, failures, summarises);
  });

  runner.on('pending', function(test) {
    pendings++;
    console.log('PENDINGTEST: %s', test.title);
    console.log('RESULT3: pass: %s; pending: %s; fail: %s; all: %s', passes, pendings, failures, summarises);
  });

  runner.on('fail', function(test){
    failures++;
    console.log('FAILEDTEST: %s', test.title);
    console.log('RESULT3: pass: %s; pending: %s; fail: %s; all: %s', passes, pendings, failures, summarises);
  });

  runner.on('end', function() {
    console.log('STATISTICS: pass: %s; pending: %s; fail: %s; all: %s', passes, pendings, failures, summarises);
  });

};