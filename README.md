# mochasimplereporter
Based on minimalistic sample reporter from https://github.com/mochajs/mocha/wiki/Third-party-reporters
##Description:
When you run you mocha test you can visualise your execution process and results in [different ways] (https://mochajs.org/#reporters).  
In this simple report you will get:  
1. after each test it's condition ( PASSEDTEST / PENDINGTEST / FAILEDTEST )  
2. at the end sum of tests in each state ( STATISTICS ) 
  
##How to use:  
* Add module as devDependencies into your project
```
"mochasimplereporter": "git+https://git@github.com/alexKazarin/mochasimplereporter.git"  
```
* Make sure module appears in your node_modules  
```
npm install
```
* Use it as parameter while running mocha-tests (ex. below)  
```
mocha --reporter mochasimplereporter ./build/Execute/Tests.js
```
OR (parallel execution!) 
```
./node_modules/.bin/mocha-parallel-tests --retries 1 --reporter mochasimplereporter ./build/Execute/*.js
```


