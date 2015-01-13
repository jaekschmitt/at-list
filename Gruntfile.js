module.exports = function(grunt) {
  
	grunt.initConfig({		
		
		jshint: {
			files: ['Gruntfile.js', 'dist/**/*.js', 'test/**/*.js'],			
		},

		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['test/**/*.js']
			}
		},

		watch: {
			src: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint']
			}
		},		

	});

	require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', ['jshint', 'watch:src']);
	grunt.registerTask('test', ['mochaTest']);
};