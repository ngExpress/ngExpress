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
                src: ['src/ui-bootstrap.js', 'src/ui-utils.js', 'src/ui-select2.js', 'src/ui-bundle.js'],
                dest: 'dist/ui-bundle.js',
            },
        },

        ngmin: {
            bundle: {
                files: [{
                    src: 'dist/ui-bundle.js',
                    dest: 'dist/ui-bundle.min.js'
                }]
            }
        },

        copy: {
            bundle: {
                files: [{
                    dest: 'src/ui-bootstrap.js',
                    src: [
                        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
                    ]
                }, 
                {
                    dest: 'src/ui-select2.js',
                    src: [
                        'bower_components/angular-ui-select2/src/select2.js'
                    ]
                },
                {
                    dest: 'src/ui-utils.js',
                    src: [
                        'bower_components/angular-ui-utils/ui-utils.js'
                    ]
                }]
            }
        }
    });

//

    grunt.registerTask('build', [
        'clean',
        'concat',
        'ngmin'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
