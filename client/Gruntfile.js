module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      src: {
        expand: true,
        cwd: 'src',
        src: '**',
        dest: 'dist',
      },
    },

    clean: {
      dist: {
        src: 'dist',
      },
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'dist/assets/css',
        src: ['*.css', '**/*.css'],
        dest: 'dist/assets/css',
      },
    },

    imagemin: {
      src: {
        expand: true,
        cwd: 'dist/assets/img',
        src: '**/*.{png,jpg,gif}',
        dest: 'dist/assets/img',
      },
    },
  });

  grunt.registerTask('dist', ['clean', 'copy']);
  grunt.registerTask('minifica', ['imagemin', 'cssmin']);
  grunt.registerTask('default', ['dist', 'minifica']);

  // Load Taks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
};
