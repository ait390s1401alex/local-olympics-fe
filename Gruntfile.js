module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('del', ["clean"]);
  grunt.registerTask('cop', ["copy"]);
  grunt.registerTask('build', ['browserify']);
  grunt.registerTask('babeltask', ['babel']);
  // Default task(s).
  grunt.registerTask('default', ['copy', 'browserify']);


  // Project configuration.
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'build/app.js': ['src/**/*.js', 'src/**/*.jsx']
        },
        options: {
          plugin: [
            ['css-modulesify', {
              output: 'build/main.css'
            }
            ]
          ],
          transform: [
            ['babelify', { 'presets': ['react', 'es2015'] }]
          ]
        }
      }
    },
    copy: {
      files : {
        expand: true,
        flatten: true,
        src: ['src/index.html', 'node_modules/bootstrap/dist/*/bootstrap.min.*', 'node_modules/jquery/dist/jquery.min.js'],
        dest: 'build/',
        filter: 'isFile'
      }
    },
    clean: {
      build: ['./build']
    },
    watch: {
      files: ['src/**/*'],
      tasks: ['copy', 'browserify']
    }
  });



};
