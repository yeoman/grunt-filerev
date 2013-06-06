'use strict';
var crypto = require('crypto');

module.exports = function (grunt) {
	grunt.registerMultiTask('filerev', 'File revisioning based on content hashing', function () {
		var options = this.options();

		grunt.util.async.forEach(this.files, function (el, next) {
			grunt.log.writeln(" Looking at " + el.src);
		}, function(err) {console.log("FRED ++ ", err);}/*this.async()*/);
	});
};
