'use strict';
var fs = require('fs');
var assert = require('assert');

var hashes = {
  'test/fixtures/file.png' : 'test/tmp/file.d01d8f48.png',
  'test/fixtures/cfgfile.png' : 'test/tmp/cfgfile.46a6.png'
};

it('should revision files based on content', function () {
  var file = 'test/fixtures/file.png';
  var original = fs.statSync(file).size;
  var revisioned= fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should accept options', function () {
  var file = 'test/fixtures/cfgfile.png';
  var original = fs.statSync(file).size;
  var revisioned= fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should allow a dest directory option', function () {
  var file = 'test/fixtures/file.png';
  var original = fs.statSync(file).size;
  var revisioned= fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should allow sources defined with expand', function () {
  var file = 'test/fixtures/file.png';
  var original = fs.statSync(file).size;
  var revisioned= fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});
