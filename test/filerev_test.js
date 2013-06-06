'use strict';
var assert = require('assert');
var fs = require('fs');

describe('filerev', function() {
	it('should revision files based on content', function() {
	    var original = fs.statSync('test/fixtures/file.png').size;
	    var revisioned= fs.statSync('test/tmp/12345.file.png').size;
	    assert(revisioned == original); 
	});
});