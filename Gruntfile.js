'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jscs: {
      src: ['models/**/*.js', 'test/**/*.js', 'server.js', 'cron.js'],
      options: '.jscsrc'
    },

    jshint: {
      options: {
        jshintrc: true
      },
      src: ['models/**/*.js', 'test/**/*.js', 'server.js', 'cron.js'],
    },

    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: true,
        reporter: 'tap'
      },
      src: ['test/*.js']
    }
  });

  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
