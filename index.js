/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-fduicomponents',
   included: function(app) {
    app.import('vendor/css/file-upload.css');
    app.import('vendor/css/multiple-input-selector.css');
    app.import('vendor/css/tab-default.css');
    app.import('vendor/css/alphabet-filter.css');
  }
};
