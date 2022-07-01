module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
            // Compile Sass into Expanded CSS
			dev: {
				files: {
					'wwwroot/css/<%= pkg.name %>.css' : 'Sass/<%= pkg.name %>.scss'
				},
                options: {
                    style: 'expanded'
                }
			},
            
            // Compile Sass into Minified CSS
            prod: {
                files: {
                    'wwwroot/css/<%= pkg.name %>.min.css' : 'Sass/<%= pkg.name %>.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
		},
        
        // Convert pix to rem and auto-prefix css
        postcss: {
            options: {
                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')() // add vendor prefixes
                ]
            },
            dist: {
                src: 'wwwroot/css/*.css'
            }
        },
        
        // Concatenate JS files (jQuery, Bootstrap, custom JS)
        concat: {
            options: {
                separator: ';',
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            
            // Concatenate dependencies (in order)
            pkgs: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/tether/dist/js/tether.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angular/angular.js',
                    'bower_components/filament-sticky/fixedsticky.js'
                    ],
                dest: 'wwwroot/js/<%= pkg.name %>-pkgs.js'
            },
            
            // Concatentate custom scripts
            dist: {
                src: [
                    'Javascript/<%= pkg.name %>.js'
                ],
                dest: 'wwwroot/js/<%= pkg.name %>.js'
            }
        },
        
        // Minify previously concatenated JS file
        uglify: {
            options: {
                peserveComments: false,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            
            // Uglify the dependencies JS
            pkgs: {
                files: {
                    'wwwroot/js/<%= pkg.name %>-pkgs.min.js' : ['wwwroot/js/<%= pkg.name %>-pkgs.js']
                }
            },
            
            // Uglify the custom JS
            dist: {
                files: {
                    'wwwroot/js/<%= pkg.name %>.min.js': ['wwwroot/js/<%= pkg.name %>.js']
                }
            }
        },
        
        // Watch files and run tasks upon save
		watch: {
			css: {
				files: 'Sass/**/*.scss',
				tasks: ['sass', 'postcss']
			},
            js: {
                files: 'Javascript/<%= pkg.name %>.js',
                tasks: ['concat:dist', 'uglify:dist']
            }
		},
        
        // Allow to run multiple watches at the same time (css and js)
        concurrent: {
            default: ['watch:css', 'watch:js'],
            options: {
                logConcurrentOutput: true
            }
        }
	});
    
    // Load tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    
    // Register tasks
    grunt.registerTask('default', ['css', 'js']);
    grunt.registerTask('css', 
        'Compile sass, convert px to rem, and prefix css.', 
        ['sass', 'postcss']);
    grunt.registerTask('js', 
        'Concatenate JS dependencies and application files, uglify the resulting file, and lint the JS files.', 
        ['concat', 'uglify']);
    grunt.registerTask('spy', 
        'Watch .scss and .js files at the same time and run specific task upon save.', 
        ['default', 'concurrent']);
};