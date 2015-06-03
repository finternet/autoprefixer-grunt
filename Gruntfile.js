module.exports = function(grunt){
	var autoprefixer = require('autoprefixer-core');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		postcss: {
			options: {
				processors: [
				  autoprefixer({ browsers: ['last 5 version', 'ie 8', 'ie 9'] }).postcss
				],
			},
			dist: { src: 'less/*.css' }
		},
		copy: {
			main: {
				files: [
					{expand: true, src: ['less/*.css'], dest: 'css/', filter: 'isFile', flatten: true},
				],
			},
		},
		watch: {
			styles: {
				files: ['less/*.css'],
				tasks: ['postcss', 'copy'],
				options: {
					spawn: false,
				},
			},
		},
    });
	
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.event.on('watch', function(action, filepath) {
	  grunt.config('postcss.dist.src', filepath);
	});
	
	grunt.registerTask('default', ['postcss', 'copy', 'watch']);
	

};