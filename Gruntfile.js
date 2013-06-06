'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
	      all: [
	        'Gruntfile.js',
	        'lib/*.js',
	        'tasks/*.js',
	        'test/**/*.js'
	      ]
	    },
		filerev: {
			compile: {
				files: {
					src: ['test/fixtures/file.png']
				}
			},
			withconfig: {
				files: {
					src: ['test/fixtures/file.png']
				}
			},
			withsummary: {
				files: {
					src: ['test/fixtures/file.png']
				}
			}
		},
		simplemocha: {
			test: {
				src: 'test/*.js'
			}
		},
		clean: {
			test: ['test/tmp']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', ['clean', 'filerev', 'simplemocha', 'clean']);
};
