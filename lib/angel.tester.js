var tryCatch = require('./angel.util').tryCatch;

var tester = module.exports = new function(code) {
	var total = 0,
		pass = 0,
		fail = 0;
	this.numTests = function(val) {
		total = val;
	};
	var done = function() {
		if ((pass + fail) == total) {
			console.log('\n*****');
			console.log(pass + ' / ' + total + ' = ' + ((pass / total) * 100) + '% pass');
			console.log('*****\n');
		}
	};
	this.test = function(code) {
		if (tryCatch(code)) {
			pass++;
		} else {
			fail++;
		}
		done();
	};
};