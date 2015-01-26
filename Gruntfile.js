'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jscs: {
      src: ['models/**/*.js', 'test/**/*.js', 'server.js', 'cron.js'],
      options: 'jscsrc'
    },

    
  })
}
