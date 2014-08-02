module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            style: ['css']
        },
        copy: {
            styleguide: {
                files: [
                    {
                        src: ['sass/styleguide.md'], dest: 'css/development/styleguide.md'
                    },{
                        src: ['sass/styleguide.md'], dest: 'css/styleguide.md'
                    }
                ]
            }
        },     
          
        watch: {
            
            lint: {
                files: ['<%= jshint.custom.src %>'],//'js/custom/attendance.js'
                tasks: ['jshint:custom']
                // options: {
                //   livereload: true 
                // }         
            },
            compress:{
                files: ['*.js','views/*.js'],
                tasks: ['uglify:prod']
            },
            ug:{
                files: ['js/custom/global.js'],
                tasks: ['uglify:prod']
            }   
        },
        concat: {
            options: {
                // separator: ';',
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                src: ['views/*.js'],
                dest: 'bundle_views.js'
            }
        },
        jshint: {
            // files:'',
            // options here to override JSHint defaults
            globals: {
                jQuery: true,
                console: true,
                module: true,
                document: true,
                unused:true, eqnull:true,
                // "smarttabs":true
                //      curly: true,
                // eqeqeq: true,
                // immed: true,
                latedef: true
                // onevar: true  
            
            },
            all: {
                src: ['Gruntfile.js', '*.js','views/*.js'],
                options: {
                    "-W099":true,
                    "-W069":true,
                    "-W041":true
                }
            },
            // attendance:{
            //     src: ['Gruntfile.js','js/custom/attendance.js'],
            //     options: {
            //         "-W099":true,
            //         "-W069":true,
            //         "-W065":true,
            //         "-W041":true
            //     }
            // },
            custom:{
                src: ['Gruntfile.js','js/custom/global.js','js/custom/front.js','js/custom/login.js','js/custom/report.js','js/custom/attendance.js','js/custom/questions.js','js/custom/admin*.js','js/custom/portfolio*.js','js/custom/fees.js','js/custom/events.js'],
                options: {
                    "-W120":true,
                    "-W099":true,
                    "-W069":true,
                    "-W065":true,//parseInt radix
                    "-W064":true,
                    "-W044":true,
                    "-W041":true,
                    "-W083":true
                    // "-W014":true,
                    // "-W004":true
                }
            }
        },
        uglify: {
            
            prod:{
                options: {
                    // banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                    beautify: false, 
                    compress: true,
                    warnings: false
                    // sourceMapRoot: 'js', // the location to find your original source
                    // sourceMapIn: 'example/coffeescript-sourcemap.js', // input sourcemap from a previous compilation
                },
                files: {
                    'bundle_views.js': "views/*.js",
                    'bundle.js': ["../lib/jquery/jquery.js ","../lib/jquery/jquery-migrate.min.js ","../lib/underscore-min.js ","../lib/backbone.js","utils.js","models/model.js","bundle_views.js","app.js","main.js","common.js"]
                }    
            },
            dev:{
                options: {
                    // banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                    beautify: false, 
                    compress: true,
                    warnings: false
                    // sourceMapRoot: 'js', // the location to find your original source
                    // sourceMapIn: 'example/coffeescript-sourcemap.js', // input sourcemap from a previous compilation
                },
                files:{
                    'js/bundle/portfolio_print.bundle.js': '',
                }
            }
        },
        shell:{
            list: {
                options: {
                    stdout: true
                },
                command: 'ls -s js/minified && ls -s js/bundle'
            },
            python: {
                command: 'python -m SimpleHTTPServer'  
            },
            compress:{
                options: {
                    stdout: true
                },
                command: 'sh ../Console/Command/uglify.sh'    
            }
        }
    });
    // grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');   
    // grunt.loadNpmTasks('grunt-styleguide');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-shell');    
    // grunt.registerTask('uglify', ['watch:ug']);
    grunt.registerTask('concat', ['concat']);
    grunt.registerTask('python', ['shell']);    
    grunt.registerTask('lint',['watch:lint']); 
    grunt.registerTask('compress',['watch:compress']);  
    // grunt.registerTask('compass',['watch:sass']);  
    grunt.registerTask('minify',['jshint:custom','uglify:prod']);

    grunt.registerTask('uglify_custom',['uglify:dev']);  

    // grunt.registerTask('hint_fee',['watch:hint']); 
    // grunt.registerTask('default', ['clean','copy','compass', 'less', 'styleguide', 'watch']);
 };
 
