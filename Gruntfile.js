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
    copy: {
      test: {
        flatten: true,
        expand: true,
        src: ['test/fixtures/*.png'],
        dest: 'test/tmp/',
      },
    },

		filerev: {
			compile: {
				src: ['test/tmp/file.png']
			},
			withconfig: {
				src: ['test/tmp/file.png']
			},
			withdest: {
				src: ['test/fixtures/file.png'],
				dest: 'test/tmp/dest'
			},
			withsummary: {
				src: ['test/tmp/file.png', 'test/tmp/another.png']
			}
		},
		simplemocha: {
			test: {
				src: 'test/*.js'
			}
		},
		clean: {
			test: ['test/tmp']
		},
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', ['clean', 'copy', 'filerev', 'simplemocha', 'clean']);
};
