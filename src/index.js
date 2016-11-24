var mocha = require('mocha');
module.exports = MyReporter;

function MyReporter(runner) {
  mocha.reporters.Base.call(this, runner);
  var passes = 0;
  var failures = 0;

  runner.on('pass', function(test){
    passes++;
    console.log('pass: %s', test.fullTitle());
  });

  runner.on('fail', function(test, err){
    failures++;
    console.log('FAILEDTEST: %s', test.title);
  });

  /*runner.on('end', function(){
    console.log('111111 end: %d/%d', passes, passes + failures);
    process.exit(failures);
  });*/
}