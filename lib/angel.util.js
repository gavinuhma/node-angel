var util = module.exports = new function() {
	this.tryCatch = function(code) {
		try {
			code();
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}
};