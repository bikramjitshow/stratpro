'use strict';

module.exports = function(grunt) {
  // Using jit-grunt to load packages automatically instead of calling loadNpmTasks manually.
  require('jit-grunt')(grunt, {
    sasslint: 'grunt-sass-lint',
    replace: 'grunt-text-replace'
  });

  require('time-grunt')(grunt, (stats, done) => {
    done();
  });

  var env = grunt.option('env') || 'dev';
  grunt.loadNpmTasks('grunt-json-generator');
  //
  grunt.initConfig({
    env: require('./grunt/env'),
    // Contain all configuration for the current app.
    app: require('./grunt/app'),
    watch: require('./grunt/watch'),
    browserify: require('./grunt/browserify'),
    clean: require('./grunt/clean'),
    copy: require('./grunt/copy'),
    concat: require('./grunt/concat'),
    csscomb: require('./grunt/csscomb'), //Beautify CSS code, e.g. sort CSS properties.
    cssmin: require('./grunt/cssmin'),
    sass: require('./grunt/sass'),
    // sasslint: require( './grunt/sasslint' ),
    postcss: require('./grunt/postcss'),
    rtlcss: require('./grunt/rtlcss'),
    connect: require('./grunt/connect'),
    imagemin: require('./grunt/imagemin'),
    svgmin: require('./grunt/svgmin'),
    uglify: require('./grunt/uglify'),
    jekyll: require('./grunt/jekyll'),
    modernizr: require('./grunt/modernizr'),
    grunticon: require('./grunt/grunticon'),
    json_generator: require('./grunt/json_generator'),
    critical: require('./grunt/critical'),
    run: {
      chatbotProd: {
        exec: 'cd src/assets/js/modules/chatbot && grunt chatbot-prod --env=' + env
      }
    },
    'ftp-deploy': {
      zoo: {
        src: './dist/',
        dest: '/60158/zoo/',
        exclusions: ['./dist/**/.DS_Store', './dist/**/Thumbs.db'],
        forceVerbose: false
      },
      designSystem: {
        src: './design-system/storybook-static/',
        dest: '/60158/zoo/design-system/',
        exclusions: ['./dist/**/.DS_Store', './dist/**/Thumbs.db'],
        forceVerbose: false
      },
      nextGen: {
        src: './nextgen/storybook-static/',
        dest: '/60158/zoo/nextgen/',
        exclusions: ['./dist/**/.DS_Store', './dist/**/Thumbs.db'],
        forceVerbose: false
      }
    },
    // Split single task into multiple tasks and run them in paralell
    parallelize: {
      svgmin: {
        icons: 4
      },
      browserify: {
        serve: 2,
        prod: 2,
        dist: 2
      }
    },
    // Run multiple tasks in paralell.
    concurrent: {
      serve: [
        'jekyll:serve',
        [
          'sass:serve',
          'sass:serveDS',
          'sass:serveNextGen',
          'postcss:serve',
          'postcss:serve_main',
          'rtlcss:serve',
          'modernizr',
          'concat'
        ],
        ['browserify:serve'],
        'copy:serve',
        ['parallelize:svgmin:icons', 'grunticon:serve']
      ],
      prod: [
        [
          'run:chatbotProd',
          'sass:prod',
          'sass:prodDS',
          'sass:prodNextGen',
          'postcss:prod',
          'postcss:prod_main',
          'rtlcss:prod',
          'modernizr',
          'concat',
          'critical:prod'
        ],
        ['browserify:prod'],
        ['parallelize:svgmin:icons', 'grunticon:prod']
      ],
      minify: ['cssmin', 'uglify'],
      build: [
        [
          'sass:dist',
          'sass:distDS',
          'sass:distNextGen',
          'postcss:dist',
          'rtlcss:dist',
          'modernizr',
          'concat'
        ],
        ['browserify:dist', 'uglify'],
        ['svgmin:icons', 'grunticon:dist']
      ]
    },
    replace: require('./grunt/replace')
  });

  //
  grunt.registerTask('serve', 'Serving module catalog from local', function() {
    grunt.option('baseUrl', '.tmp/');
    grunt.task.run(['env:serve', 'clean:serve', 'concurrent:serve', 'connect:serve', 'watch']);
  });

  //
  grunt.registerTask('build', 'Build module catalog to static HTML files', function() {
    grunt.option('baseUrl', 'dist');
    grunt.task.run(['clean:dist', 'jekyll:dist', 'concurrent:build', 'copy:dist', 'replace']);
  });

  grunt.registerTask('prod', 'Build assets for PROD deployment', function() {
    grunt.option('baseUrl', 'global');
    grunt.task.run([
      'env:prod',
      'clean:prod',
      'clean:preprod_chatbot',
      'json_generator:prod',
      'concurrent:prod',
      'concurrent:minify',
      'copy:prod', // copy fakes files
      'copy:prod_chatbot',
      'clean:prod_chatbot'
    ]);
  });

  grunt.registerTask('zoo', 'Deploy to Zoo', function() {
    const username = grunt.option('ftp-username');
    const password = grunt.option('ftp-pass');
    const host = grunt.option('ftp-host');

    if (!username || !password || !host) {
      grunt.log.write('FTP username, password, host are not provided');
      return -1;
    }

    grunt.task.run('ftp-deploy:designSystem');
    grunt.task.run('ftp-deploy:nextGen');
    grunt.task.run('ftp-deploy:zoo');
  });

  grunt.registerTask('default', ['serve']);

  /*
    Grunt task for atomic module
    command: grunt module --name={ name of the module } --atomic={ atom | molecule | organism }
    Examples:
      grunt module --name=sc-banner-title --atomic=atom
      grunt module --name=sc-banner-breadcrumb --atomic=molecule
      grunt module --name=sc-banner-hero-horizontal --atomic=organism
  */
  grunt.registerTask('module', 'Create new module', function() {
    var atomicDesign = grunt.option('atomic'),
      moduleName = grunt.option('name'),
      atomicFolder;

    if (!moduleName || !atomicDesign) {
      grunt.log.writeln('Error: This task is missing module name or atomic structure'['red']);
      return;
    }
    if (!moduleName.match(/[a-z_-]/)) {
      grunt.log.writeln(
        'Error: The module name should contain only smallcase letters and _ or -'['red']
      );
      return;
    }

    // Folder structure for Atomic design.
    if (atomicDesign == 'molecule') {
      atomicFolder = 'molecules';
    } else if (atomicDesign == 'organism') {
      atomicFolder = 'organisms';
    } else if (atomicDesign == 'atom') {
      atomicFolder = 'atoms';
    } else {
      grunt.log.writeln('Error: Wrong atomic structure is passed'['red']);
      return;
    }

    var fs = require('fs');
    if (fs.existsSync('src/_includes/atomic/' + atomicFolder + '/' + moduleName)) {
      return grunt.log.writeln(
        'Error: The module already exists. Please use it or try different name to create new module.'[
          'red'
        ]
      );
    } else {
      grunt.config.set('moduleName', moduleName);
      grunt.config.set('atomicDesign', atomicFolder);
      grunt.task.run('copy:create_module');
    }
  });

  grunt.registerMultiTask('ftp-deploy', 'Upload files to NS using ftp', async function() {
    let ftp = require('basic-ftp');
    let done = this.async();
    const config = this.data;
    const client = new ftp.Client();
    client.ftp.verbose = config.forceVerbose;
    // eslint-disable-next-line no-console
    console.log(`Uploading to ${config.dest}`);
    try {
      await client.access({
        host: grunt.option('ftp-host'),
        user: grunt.option('ftp-username'),
        password: grunt.option('ftp-pass')
      });
      await client.ensureDir(config.dest);
      // eslint-disable-next-line no-console
      client.trackProgress(info => console.log('Transferred Overall', info.bytesOverall));
      await client.uploadFromDir(config.src, config.dest);
      client.trackProgress();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
    client.close();
    done();
  });
};
