import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('split-button-dropdown');
	this.route('dependency-dropdown');
	this.route('multiple-input-selector');
	this.route('tabs-default');
	this.route('menu-filter');
	this.route('alphabet-filter');
  	this.route('file-attachment');
  	this.route('avatar-upload');
});

export default Router;
