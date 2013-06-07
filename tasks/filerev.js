'use strict';
var crypto = require('crypto');
var path = require('path');
var fs = require('fs');

module.exports = function (grunt) {
    grunt.registerMultiTask('filerev', 'File revisioning based on content hashing', function () {
        var options = this.options({
            encoding: 'utf8',
            algorithm: 'md5',
            length: 8
        });
        var target = this.target;
        var move = true;

        grunt.util._.each(this.files, function (el, next) {
            // If dest is furnished it should indicate a directory.
            if (el.dest) {
            	try {
	            	var stat = fs.lstatSync(el.dest);
	            	if (stat && !stat.isDirectory()) {
		            	grunt.fail.fatal("Destination for target %s is not a directory",target);
		            }
		        }
		        catch(e) {
		        	grunt.log.writeln('Destination dir ' + el.dest + ' does not exists for target ' + target + ': creating');
		        	grunt.file.mkdir(el.dest);
		        }
		        // We need to copy file as we now have a dest different from the src
		        move = false;
            }

            grunt.util._.each(el.src, function(f) {
                var hash = crypto.createHash(options.algorithm).update(grunt.file.read(f), options.encoding).digest('hex');
                var suffix = hash.slice(0, options.length);
		        var ext = path.extname(f);
                var newName = [path.basename(f, ext), suffix, ext.slice(1)].join('.');
				var resultPath;

                if (move) {
	                resultPath = path.resolve(move ? path.dirname(f) : el.dest, newName);
	                fs.renameSync(f, resultPath);
                } else {
	                resultPath = path.resolve(move ? path.dirname(f) : el.dest, newName);
	                fs.createReadStream(f).pipe(fs.createWriteStream(resultPath));
                }

                console.log('FRED --> %s == %s ==> %s', f, suffix, resultPath);
            });
        });
	});
};
