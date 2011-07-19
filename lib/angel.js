/*!
 * angel
 * Copyright(c) 2011 Gavin Uhma <gavinmail@gmail.com>
 * MIT Licensed
 */

/**
 * Library version.
 */

exports.name = 'angel';

exports.version = '0.0.1';

exports.defaultPort = 9000;

exports.listen = function(port) {
	port = port || exports.defaultPort;
	console.log('* ' + exports.name + ' listening on port ' + port);
};
