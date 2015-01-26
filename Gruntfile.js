'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    //not being used at the moment
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

  //newest version of jscs doesnt like use strict
  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
