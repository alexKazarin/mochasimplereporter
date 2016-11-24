var mocha = require('mocha');
module.exports = MyReporter;

function MyReporter(runner) {
  mocha.reporters.Base.call(this, runner);
  var passes = 0;
  var failures = 0;

  runner.on('fail', function(test){
    failures++;
    console.log('FAILEDTEST: %s', test.title);
  });

}