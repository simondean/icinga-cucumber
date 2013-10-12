module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      tests: ['build'],
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'features/**/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },
    cuketree: {
      default: {},
      ide: {
        options: {
          config: 'ide'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-cuke-tree');

  // Default task(s).
  grunt.registerTask('acceptance_test', ['cuketree:default']);
  grunt.registerTask('acceptance_test:ide', ['cuketree:ide']);
  grunt.registerTask('default', ['jshint', 'acceptance_test']);

};