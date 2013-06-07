'use strict';
var assert = require('assert');
var fs = require('fs');

describe('filerev', function() {
	it('should revision files based on content', function() {
	    var original = fs.statSync('test/fixtures/file.png').size;
	    var revisioned= fs.statSync('test/tmp/file.a0539763.png').size;
	    assert(revisioned == original); 
	});
});