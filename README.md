# Ember-fduicomponents

  Ember addon which contains generic components.
  
## List of Components Present

* Split Button Dropdown
* Dependecy Dropdown
* Multiple Input Selector
* Tabs Default
* Alphabet Filter
* Menu Filter
* File Attachment
* Avatar Upload


## Documentaion & usage

we have created an app which contains the documentation on using all the components, to run it in local do : 

* git clone this repository
* npm install
* bower install
* ember server
* Visit your demo app at http://localhost:4200.

## Dependencies

Need to install these depencies inorder for the components to work accordingly

  * "bootstrap": "~3.3.5"
  * "jquery-file-upload": "9.10.0"
  * "select2": "3.5.2"
  
after installation import all these dependencies in your __/ember-cli-build.js__

    app.import('bower_components/bootstrap/dist/css/bootstrap.css');
    app.import('bower_components/bootstrap/dist/css/bootstrap-theme.css');
    app.import('bower_components/bootstrap/dist/js/bootstrap.js');
    app.import("bower_components/jquery-file-upload/js/vendor/jquery.ui.widget.js");
    app.import("bower_components/jquery-file-upload/js/jquery.fileupload.js");
  
  
  

## Errors and further

if there are content security policy errors, in your __/config/environment.js__ add these inside EmberENV:

    contentSecurityPolicy: {
      'default-src': ["'none'"],
      'script-src':  ["'self'"],
      'font-src':    ["'self'"],
      'connect-src': ["'self'"],
      'img-src':     ["'self'"],
      'style-src':   ["'self'"],
      'media-src':   ["'self'"]
    } 


