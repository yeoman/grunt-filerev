'use strict';
var fs = require('fs');
var assert = require('assert');

var hashes = {
  'test/fixtures/file.png' : 'test/tmp/file.26365248.png',
  'test/fixtures/cfgfile.png' : 'test/tmp/cfgfile.da63.png',
  'test/fixtures/math.js' : 'test/tmp/withSourceMaps/math.6272e937.js',
  'test/fixtures/math.js.map' : 'test/tmp/withSourceMaps/math.6272e937.js.map',
  'test/fixtures/physics.js' : 'test/tmp/withSourceMaps/physics.28cb15fd.js',
  'test/fixtures/another.png' : 'test/tmp/another-processed-92279d3f.png'
};

it('should revision files based on content', function () {
  var file = 'test/fixtures/file.png';
  var original = fs.statSync(file).size;
  var revisioned = fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should accept options', function () {
  var file = 'test/fixtures/cfgfile.png';
  var original = fs.statSync(file).size;
  var revisioned = fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should allow a dest directory option', function () {
  var file = 'test/fixtures/file.png';
  var original = fs.statSync(file).size;
  var revisioned = fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should allow sources defined with expand', function () {
  var file = 'test/fixtures/file.png';
  var original = fs.statSync(file).size;
  var revisioned = fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should use same revision as .js source for the .map', function () {
  var file = 'test/fixtures/math.js.map';
  var original = fs.statSync(file).size;
  var revisioned = fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should point the .js sourceMappingURL to the revisioned .map', function () {
  var file = 'test/fixtures/math.js';
  var map = 'math.6272e937.js.map';
  var revisioned = fs.readFileSync(hashes[file], {encoding: 'utf8'});
  assert(revisioned.indexOf('//# sourceMappingURL=' + map) !== -1);
});

it('should revision .js file ok without any .map', function () {
  var file = 'test/fixtures/physics.js';
  var original = fs.statSync(file).size;
  var revisioned = fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});

it('should allow a filename processing function', function () {
  var file = 'test/fixtures/another.png';
  var original = fs.statSync(file).size;
  var revisioned = fs.statSync(hashes[file]).size;
  assert(revisioned === original);
});
