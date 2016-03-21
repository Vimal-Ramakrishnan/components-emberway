import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
	layout,
	actions: {
		initiateCallback: function(click_type) {
			this.sendAction("ontrigger",click_type);
		},
	}
});
