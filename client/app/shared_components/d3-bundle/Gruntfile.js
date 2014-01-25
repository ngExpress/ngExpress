'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        clean: {
            bundle: {
                files: [{
                    dot: true,
                    src: [
                        'dist'
                    ]
                }]
            }
        },

        concat: {
            bundle: {
                src: ['src/d3.js', 'src/nv.d3.js', 'src/angularjs-nvd3-directives.js', 'src/d3-bundle.js'],
                dest: 'dist/d3-bundle.js',
            },
        },

        ngmin: {
            bundle: {
                files: [{
                    src: 'dist/d3-bundle.js',
                    dest: 'dist/d3-bundle.min.js'
                }]
            }
        },

        copy: {
            dist: {
                files: [{
                    dest: 'dist/d3-bundle.css',
                    src: [
                        'src/d3-bundle.css'
                    ]
                },
                {
                    dest: 'dist/d3-bundle.min.css',
                    src: [
                        'src/d3-bundle.min.css'
                    ]
                }]
            },
            bundle: {
                files: [{
                    dest: 'src/d3.js',
                    src: [
                        'bower_components/d3/d3.js'
                    ]
                }, 
                {
                    dest: 'src/nv.d3.js',
                    src: [
                        'bower_components/nvd3/nv.d3.js'
                    ]
                },
                {
                    dest: 'src/d3-bundle.css',
                    src: [
                        'bower_components/nvd3/nv.d3.css'
                    ]
                },
                {
                    dest: 'src/d3-bundle.min.css',
                    src: [
                        'bower_components/nvd3/nv.d3.min.css'
                    ]
                },
                {
                    dest: 'src/angularjs-nvd3-directives.js',
                    src: [
                        'bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js'
                    ]
                }]
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'copy:dist',
        'concat',
        'ngmin'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
