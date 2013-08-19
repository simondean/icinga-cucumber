module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochacli: {
      options: {
        require: ['should']
      },
      all: ['test/**/*.js']
    },
    cuketree: {
      default: {}
    }
  });

  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-cuke-tree');

  // Default task(s).
  grunt.registerTask('test', ['mochacli']);
  grunt.registerTask('acceptance_test', ['cuketree']);
  grunt.registerTask('default', ['test', 'acceptance_test']);

};