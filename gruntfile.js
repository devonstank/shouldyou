module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Remove unused CSS styles
    uncss: {
      dist: {
        files: {
          'css/style.css' : ['index.html']
        }
      }
    },

    // Run predefined tasks whenever watched file patterns are added, changed or deleted
    watch: {
      uglify: {
        files: ['js/main.js'],
        tasks: ['uglify']
      },
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },

    // Compresses JS
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    },

    // Compile Sass to CSS
    sass: {
      dist: {
        files: {
          'css/application.css' : 'sass/application.scss'
        }
      }
    },

    // Compresses CSS
    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    }

  });

  // Load the plugin that provides the "uncss" task.
  grunt.loadNpmTasks('grunt-uncss');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);
};