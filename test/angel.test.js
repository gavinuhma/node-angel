var angel = require('../'),
	assert = require('assert'),
	tester = require('../lib/angel.tester');

angel.listen();

tester.numTests(1);
tester.test(function() { assert.equal(angel.version, '0.0.1', 'version'); });
