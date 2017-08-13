/* global process, __dirname */
'use strict';
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var xml2js = require('xml2js');
var zip = require('gulp-zip');
var forceMeta = require('./');
var replace = require('gulp-replace');
var replaceBatch = require('gulp-batch-replace');
var del = require('del');
var debug = require('gulp-debug');
var xmlParse = require('./xmlparse.js')

gulp.task('templates', function(){
  gulp.src(['./src/objects/Asset.object'])
    .pipe(replace(/dsafas/igm, ''))
    .pipe(debug({title: 'file'}))
    .pipe(gulp.dest('./src/objects/'));
});

gulp.task('modify_billing_info_profiles', function(){
  gulp.src(['./src/profiles/*.profiles'])
    .pipe(replace(/.*<userPermissions>[\s\S]*?<name>EditBillingInfo<\/name>[\s\S]*?<\/userPermissions>\r?\n|\r/igm, ''))
    .pipe(gulp.dest('./src/profiles/'));
});

gulp.task('pre-commit-delete', function () {
  return del([
    //profiles
    'src/profiles/AU Property - Finance.profile',
    //settings
    'src/settings/PersonalJourney.settings',
    //layouts
    'src/layouts/EntityMilestone-Object Milestone Layout.layout',
    //flows
    'src/flows/Lighthouse_Error_Flow_Utility-9.flow',
    'src/flowDefinitions/Lighthouse_Error_Flow_Utility.flowDefinition',
    //workflows
    'src/workflows/ActiveScratchOrg.workflow',
    'src/workflows/ScratchOrgInfo.workflow'
  ]);
});

gulp.task('deployZip', function() {
  gulp.src("./pkg/**", { base: "." })
    .pipe(zip("pkg.zip"))
    .pipe(forceMeta.deployZip({
      username: process.env.SF_USERNAME,
      password: process.env.SF_PASSWORD,
      loginUrl: 'https://test.salesforce.com'
      //, pollTimeout: 120*1000
      //, pollInterval: 10*1000
      //, version: '33.0'
    }));
});

gulp.task('retrieve-apex', function() {
  gulp.src("./package/package-apex.xml", { base: "." })
    .pipe(debug({title: 'retrieve'}))
    .pipe(forceMeta.retrieve({
      username: 'nah',
      password: 'lol',
      loginUrl: 'https://test.salesforce.com',
      pollTimeout: 1200*1000,
      pollInterval: 10*1000,
      version: '40.0'
    }));
});

gulp.task('parse-xml', function() {
  gulp.src("./package/package-apex.xml", { base: "." })
    .pipe(debug({title: 'retrieve'}))
    .pipe(xmlParse.parseXML({
      username: 'nah',
      password: 'lol',
      loginUrl: 'https://test.salesforce.com',
      pollTimeout: 1200*1000,
      pollInterval: 10*1000,
      version: '40.0'
    }));
});