'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var meta = require('jsforce-metadata-tools');

module.exports = {
  deployZip: function(options) {
  return through.obj(function(file, enc, callback) {
      var err;
      if (file.isNull()) {
        return callback(null, file);
      }
      if (file.isStream()) {
        err = new gutil.PluginError('gulp-jsforce-deploy', 'Stream input is not supported');
        return callback(err);
      }
      options.logger = gutil;
      meta.deployFromZipStream(file.contents, options)
        .then(function(res) {
          meta.reportDeployResult(res, gutil, options.verbose);
          if (!res.success) {
            return callback(new Error('Deploy Failed.'));
          }
          callback(null, file);
        })
        .catch(function(err) {
          callback(err);
        });
    });
  },

  retrieve: function(options) {
  return through.obj(function(file, enc, callback) {
      var err;
      if (file.isNull()) {
        return callback(null, file);
      }
      if (file.isStream()) {
        err = new gutil.PluginError('gulp-jsforce-retrieve', 'Stream input is not supported');
        return callback(err);
      }
      options.logger = gutil;
      meta.retrieveByPackageXML("./package/package-layout.xml", options)
        .then(function(res) {
          meta.reportRetrieveResult(res, gutil, options.verbose);
          if (!res.success) {
            return callback(new Error('Retrieve Failed.'));
          }
         return meta.extractZipContents(res.zipFile, './', console, options.verbose)
        .then(function() {
          console.log('');
          console.log('Retrieved metadata files are saved under the directory: ');
          //program.directory.forEach(function(dir) { console.log('  ' + dir); });
          return true;
        });
          callback(null, file);
        })
        .catch(function(err) {
          callback(err);
        });
    });
  }  

};
