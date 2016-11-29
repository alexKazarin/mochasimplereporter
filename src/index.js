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
  });

  runner.on('pass', function(test) {
    passes++;
    console.log('PASSEDTEST: %s', test.title);
  });

  runner.on('pending', function(test) {
    pendings++;
    console.log('PENDINGTEST: %s', test.title);
  });

  runner.on('fail', function(test){
    failures++;
    console.log('FAILEDTEST: %s', test.title);
  });

  runner.on('end', function() {
    console.log('STATISTICS: pass: %s; pending: %s; fail: %s; all: %s', passes, pendings, failures, summarises);
  });

};