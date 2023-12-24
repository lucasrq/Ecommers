module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/styles/main.css': 'source/styles/main.scss'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.registerTask('default', ['sass'])
}