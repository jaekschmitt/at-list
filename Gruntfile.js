module.exports = function(grunt) {
  
	grunt.initConfig({		
		
		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],			
		},

		uglify: {
			src: {
				files: {
					'dist/at-list.min.js': ['dist/at-list.js']
				}
			}
		},		

		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['test/**/*.js']
			}
		},

		sass: {
			dist: {
				files: {
					'dist/styles/css/at-list.css': 'dist/styles/scss/at-list.scss'
				}
			}
		},

		watch: {
			src: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint']
			},			
			scss: {
				files: ['dit/styles/scss/**/*.scss'],
				tasks: ['sass']
			}			
		},		

	});

	require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', ['jshint', 'sass', 'watch']);
	grunt.registerTask('test', ['mochaTest']);
	grunt.registerTask('build', ['mochaTest', 'sass', 'uglify']);	
};