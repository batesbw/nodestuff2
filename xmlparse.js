'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var fs = require('fs');
var xml2js = require('xml2js');
var fs = require('fs');
var xml2js = require('xml2js');

module.exports = {
    parseXML: function(options) {
    return through.obj(function(file, enc, callback) {
        var parser = new xml2js.Parser();
        fs.readFile(__dirname + '/src/objects/Asset.object', function(err, data) {
            parser.parseString(data, function (err, result) {
                console.dir(result);
                console.log('Done');
            });
        });
    });
  }
};