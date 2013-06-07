'use strict';
var crypto = require('crypto');
var path = require('path');

module.exports = function (grunt) {
    grunt.registerMultiTask('filerev', 'File revisioning based on content hashing', function () {
        var options = this.options({
            encoding: 'utf8',
            algorithm: 'md5',
            length: 8
        });
        grunt.util._.each(this.files, function (el, next) {
            grunt.util._.each(el.src, function(f) {
                var hash = crypto.createHash(options.algorithm).update(grunt.file.read(f), options.encoding).digest('hex');
            });
        });
	});
};
