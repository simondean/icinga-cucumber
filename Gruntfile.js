module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochacli: {
      options: {
        require: ['should']
      },
      all: ['test/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-cli');

  // Default task(s).
  grunt.registerTask('test', ['mochacli']);
  grunt.registerTask('default', ['test']);

};