'use strict';
var fs = require('fs');
var assert = require('assert');
var grunt = require('grunt');

describe('filerev', function () {
  it('should revision files based on content', function () {
    var original = fs.statSync('test/fixtures/file.png').size;
    var revisioned= fs.statSync('test/tmp/file.a0539763.png').size;
    assert(revisioned === original);
  });

  it('should accept options', function () {
    var original = fs.statSync('test/fixtures/cfgfile.png').size;
    var revisioned= fs.statSync('test/tmp/cfgfile.f64f.png').size;
    assert(revisioned === original);
  });

  it('should allow a dest directory option', function () {
    var original = fs.statSync('test/fixtures/file.png').size;
    var revisioned= fs.statSync('test/tmp/dest/file.a0539763.png').size;
    assert(revisioned === original);
  });

  it('should allow to create a summary file', function () {
    assert(grunt.file.exists('test/tmp/rev_summary.js'));
    var summary = grunt.file.readJSON('test/tmp/rev_summary.js');
    assert(summary['test/fixtures/file.png'] === 'test/tmp/file.a0539763.png');
  });
});
