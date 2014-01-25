'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        yeoman: {
            app: 'client/app',
            dist: 'client/dist',
            tmp: '.tmp'
        },

        watch: {
            js: {
                files: ['<%= yeoman.app %>/scripts/**/*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/**/*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/**/*.html',
                    '<%= yeoman.app %>/styles/**/*.css',
                    '<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,gif}'
                ]
            }
        },

        uglify : {
            options: {
                preserveComments: false,
                compress: false,
                mangle: false,
                beautify: {
                    beautify: false,
                    ascii_only: true,
                    quote_keys: true
                }
            },
        },

        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        jshint: {
            options: {
                jshintrc: 'client/.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/**/*.js'
            ]
        },

        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '<%= yeoman.tmp %>',
                            '<%= yeoman.dist %>'
                        ]
                    }
                ]
            },
            server: '<%= yeoman.tmp %>'
        },

        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.tmp %>/styles/',
                        src: '{,*/}*.css',
                        dest: '<%= yeoman.tmp %>/styles/'
                    }
                ]
            }
        },

        'bower-install': {
            app: {
                src: '<%= yeoman.app %>/index.html',
                ignorePath: '<%= yeoman.app %>/'
            }
        },

        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif}'
                    ]
                }
            }
        },

        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },

        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>']
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.dist %>',
                        src: ['*.html', 'views/{,*/}*.html'],
                        dest: '<%= yeoman.dist %>'
                    }
                ]
            }
        },

        ngmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.tmp %>/concat/scripts',
                        src: '*.js',
                        dest: '<%= yeoman.tmp %>/concat/scripts'
                    }
                ]
            }
        },

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            '*.{ico}',
                            '*.html',
                            'views/{,*/}*.html',
                            'bower_components/**/*',
                            'fonts/*',
                            'styles/{,*/}*.{png,gif}'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.tmp %>/images',
                        dest: '<%= yeoman.dist %>/images',
                        src: ['generated/*']
                    }
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '<%= yeoman.tmp %>/styles/',
                src: '{,*/}*.css'
            },
            images: {
                expand: true,
                cwd: '<%= yeoman.app %>/images',
                dest: '<%= yeoman.dist %>/images',
                src: '{,*/}*.png'
            }
        },

        open: {
            server: {
                url: 'http://localhost:9000/'
            }
        },

        concurrent: {
            server: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                'copy:images'
            ]
        }
    });

    grunt.registerTask('serve', function() {
        grunt.task.run([
            'bower-install',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function() {
        var child = grunt.util.spawn({
            cmd: process.argv[0],
            args: ['server/app.js', '-dev']
        });

        child.stdout.pipe(process.stdout);
        child.stderr.pipe(process.stderr);

        grunt.task.run(['bower-install', 'open', 'watch']);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'bower-install',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'ngmin',
        'copy:dist',
        'cssmin',
        'uglify',
        'rev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'build'
    ]);
};