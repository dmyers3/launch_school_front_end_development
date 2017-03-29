module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          "public/javascripts/vendor/all.js": ["public/javascripts/vendor/all.js"]
        }
      }
    },
    bower_concat: {
      all: {
        dest: "public/javascripts/vendor/all.js",
        // sets up order to make sure everything works - jquery first, then underscore, then backbone
        dependencies: {
          "underscore": "jquery",
          "backbone": "underscore"
        }
      }
    }
  });
  
  [
    "grunt-bower-concat",
    "grunt-contrib-uglify"
  ].forEach(function(task) {
    grunt.loadNpmTasks(task);
  });
  
  // registers a task to do, first it will concat, then uglify
  grunt.registerTask("default", ["bower_concat", "uglify"]);
};